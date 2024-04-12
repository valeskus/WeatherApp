import {useEffect} from 'react';
import {useGetWeatherByCityName} from '../../stores/weather';

export const useHomeController = () => {
  const getWeatherByCityName = useGetWeatherByCityName();

  useEffect(() => {
    getWeatherByCityName('London');
  });

  return {};
};
