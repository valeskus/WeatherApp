import {useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';

export const useHomeController = () => {
  const {city, weather} = WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();

  useEffect(() => {
    if (!city) {
      return;
    }
    getCurrentWeather(city);
  }, [city, getCurrentWeather]);

  useEffect(() => {
    if (!weather) {
      return;
    }
  }, [weather]);

  return {};
};
