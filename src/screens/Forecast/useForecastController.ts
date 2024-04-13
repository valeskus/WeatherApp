import {useEffect} from 'react';
import * as WeatherStore from '../../stores/weather';

export const useForecastController = () => {
  const {city, forecast} = WeatherStore.useWeatherStore();

  const getForecast = WeatherStore.useGetForecast();

  useEffect(() => {
    if (!city || forecast) {
      return;
    }
    getForecast(city.name);
  }, [city, forecast, getForecast]);

  useEffect(() => {
    if (!forecast) {
      return;
    }
  });

  return {};
};
