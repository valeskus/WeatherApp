import {useEffect, useMemo} from 'react';
import * as WeatherStore from '../../../../stores/weather';

export const useWeatherHourlyController = () => {
  const {city, units, hourlyWeather} = WeatherStore.useWeatherStore();

  const getHourlyWeather = WeatherStore.useGetHourlyWeather();

  const cnt = useMemo(() => {
    return Math.floor((24 - new Date(Date.now()).getHours()) / 3);
  }, []);

  useEffect(() => {
    if (!city || !units) {
      return;
    }

    getHourlyWeather(city?.name, units, cnt);
  }, [city, units, getHourlyWeather, cnt]);

  return {
    hourlyWeather: Object.entries(hourlyWeather || {})[0][1],
    city: city?.name,
    units: units === 'Imperial' ? 'F' : 'C',
  };
};
