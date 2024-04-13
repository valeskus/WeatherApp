import {useEffect} from 'react';
import {useGetForecast} from '../../stores/weather';

export const useForecastController = () => {
  const getForecast = useGetForecast();

  useEffect(() => {
    getForecast('London');
  });

  return {};
};
