import {useCallback, useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';

import {useGetCurentCityFromStorage} from './hooks';
import {Alert} from 'react-native';

export const useHomeController = () => {
  const {city, units, currentWeather} = WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();
  const getCoordinates = WeatherStore.useGetCoordinates();
  const {getCityFromStorage, getUnitsFromStorage} =
    useGetCurentCityFromStorage();
  const errorGetCurrentWeather =
    ErrorsStore.useGetErrorFor('getCurrentWeather');
  const errorGetCoordinates = ErrorsStore.useGetErrorFor(
    'getCoordinatesByLocationName',
  );
  const resetCurrentWeatherError =
    ErrorsStore.useResetErrors('getCurrentWeather');
  const resetGetCoordinatesError = ErrorsStore.useResetErrors(
    'getCoordinatesByLocationName',
  );

  const handleSearch = useCallback(
    (searchTerm: string) => {
      getCoordinates(searchTerm);
    },
    [getCoordinates],
  );
  useEffect(() => {
    getUnitsFromStorage();

    if (!city) {
      getCityFromStorage();
      return;
    }

    getCurrentWeather(city, units);
  }, [city, getCurrentWeather, getCityFromStorage, getUnitsFromStorage, units]);

  useEffect(() => {
    if (!!errorGetCurrentWeather || !!errorGetCoordinates) {
      Alert.alert('City not found!');
      resetCurrentWeatherError();
      resetGetCoordinatesError();
    }
  }, [
    errorGetCurrentWeather,
    errorGetCoordinates,
    resetCurrentWeatherError,
    resetGetCoordinatesError,
  ]);

  return {
    handleSearch,
    currentWeather,
    units,
    city,
  };
};
