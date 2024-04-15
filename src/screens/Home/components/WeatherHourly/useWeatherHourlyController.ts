import {useEffect, useMemo, useState} from 'react';
import * as WeatherStore from '../../../../stores/weather';
import {CityLocModel} from '../../../../models';

export const useWeatherHourlyController = (locationCity?: CityLocModel) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const {city, units, hourlyWeather, hourlyWeatherByLocation} =
    WeatherStore.useWeatherStore();

  const getHourlyWeather = WeatherStore.useGetHourlyWeather();
  const getHourlyWeatherByLocation =
    WeatherStore.useGetHourlyWeatherByLocation();

  const cnt = useMemo(() => {
    return Math.floor((24 - new Date(Date.now()).getHours()) / 3);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (locationCity) {
      getHourlyWeatherByLocation(locationCity, units, cnt).then(() =>
        setLoading(false),
      );
      return;
    }

    if (!city || !units) {
      return;
    }

    getHourlyWeather(city, units, cnt).then(() => setLoading(false));
  }, [
    city,
    units,
    getHourlyWeather,
    cnt,
    locationCity,
    getHourlyWeatherByLocation,
  ]);

  const weather = useMemo(() => {
    if (hourlyWeatherByLocation && locationCity) {
      return Object.entries(hourlyWeatherByLocation || {})[0][1];
    }

    if (!hourlyWeather) {
      return [];
    }
    return Object.entries(hourlyWeather || {})[0][1];
  }, [hourlyWeather, hourlyWeatherByLocation, locationCity]);

  return {
    hourlyWeather: weather,
    city: city?.name,
    units: units === 'Imperial' ? 'F' : 'C',
    isLoading,
  };
};
