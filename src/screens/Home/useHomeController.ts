import {useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';

export const useHomeController = () => {
  const {city} = WeatherStore.useWeatherStore();
  const getCurrentWeather = WeatherStore.useGetCurrentWeather();

  useEffect(() => {
    if (!city) {
      return;
    }
    getCurrentWeather(city);
  }, [city, getCurrentWeather]);

  return {};
};
