import {useCallback, useEffect, useState} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';

import {useGetCurentCityFromStorage} from './hooks';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const useHomeController = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<{lon: number; lat: number} | null>(
    null,
  );

  const {city, units, currentWeather, currentWeatherByLocation, locationCity} =
    WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();
  const getCurrentWeatherByLocation =
    WeatherStore.useGetCurrentWeatherByLocation();

  const getCoordinates = WeatherStore.useGetCoordinates();
  const getLocationName = WeatherStore.useGetLocationName();

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
    Geolocation.getCurrentPosition(info => {
      getLocationName({lat: info.coords.latitude, lon: info.coords.longitude});
      return setLocation({
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      });
    });
  }, [getLocationName]);

  useEffect(() => {
    if (!location) {
      return;
    }
    getCurrentWeatherByLocation(location, units).then(() => setLoading(false));
  }, [location, units, getCurrentWeatherByLocation]);

  useEffect(() => {
    setLoading(true);
    getUnitsFromStorage();

    if (!city) {
      getCityFromStorage();
      setLoading(false);
      return;
    }

    getCurrentWeather(city, units).then(() => setLoading(false));
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
    isLoading,
    currentWeatherByLocation,
    locationCity,
  };
};
