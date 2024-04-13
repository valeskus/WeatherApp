import {useCallback, useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';

export const useHomeController = () => {
  const {city, currentWeather} = WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();
  const getCoordinates = WeatherStore.useGetCoordinates();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      getCoordinates(searchTerm);
    },
    [getCoordinates],
  );

  useEffect(() => {
    if (!city) {
      return;
    }
    getCurrentWeather(city);
  }, [city, getCurrentWeather]);

  useEffect(() => {
    if (!currentWeather) {
      return;
    }
  }, [currentWeather]);

  return {
    handleSearch,
  };
};
