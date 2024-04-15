import {useEffect, useMemo, useState} from 'react';
import * as WeatherStore from '../../../../stores/weather';

export const useWeatherHourlyController = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const {city, units, hourlyWeather} = WeatherStore.useWeatherStore();

  const getHourlyWeather = WeatherStore.useGetHourlyWeather();

  const cnt = useMemo(() => {
    return Math.floor((24 - new Date(Date.now()).getHours()) / 3);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (!city || !units) {
      return;
    }

    getHourlyWeather(city?.name, units, cnt).then(() => setLoading(false));
  }, [city, units, getHourlyWeather, cnt]);

  const weather = useMemo(() => {
    if (!hourlyWeather) {
      return [];
    }
    return Object.entries(hourlyWeather || {})[0][1];
  }, [hourlyWeather]);

  return {
    hourlyWeather: weather,
    city: city?.name,
    units: units === 'Imperial' ? 'F' : 'C',
    isLoading,
  };
};
