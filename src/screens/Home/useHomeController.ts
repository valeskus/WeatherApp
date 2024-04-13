import {useCallback, useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';
import {useGetCurentCityFromStorage} from './hooks';

export const useHomeController = () => {
  const {city, currentWeather} = WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();
  const getCoordinates = WeatherStore.useGetCoordinates();
  const {getCityFromStorage} = useGetCurentCityFromStorage();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      getCoordinates(searchTerm);
    },
    [getCoordinates],
  );

  useEffect(() => {
    if (!city) {
      getCityFromStorage();
      return;
    }
    getCurrentWeather(city);
  }, [city, getCurrentWeather, getCityFromStorage]);

  useEffect(() => {
    if (!currentWeather) {
      return;
    }
  }, [currentWeather]);

  return {
    handleSearch,
  };
};
