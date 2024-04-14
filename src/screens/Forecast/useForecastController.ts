import {useEffect, useState} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TransformedArrayElement, useWeatherForecastFormat} from './hooks';

export const useForecastController = () => {
  const [farmatedForecast, setFormatedForecast] = useState<
    TransformedArrayElement[] | undefined
  >();

  const {city, forecast, units} = WeatherStore.useWeatherStore();
  const getForecast = WeatherStore.useGetForecast();
  const errorGetForecast = ErrorsStore.useGetErrorFor('getForecast');
  const resetGetForecastError = ErrorsStore.useResetErrors('getForecast');
  const navigation = useNavigation();
  const {formatWeather} = useWeatherForecastFormat(forecast?.list);

  useEffect(() => {
    if (!city || forecast) {
      return;
    }
    getForecast(city.name, units);
  }, [city, forecast, getForecast, units]);

  useEffect(() => {
    if (!forecast) {
      return;
    }
    const array = formatWeather();
    setFormatedForecast(array);
  }, [forecast, formatWeather]);

  useEffect(() => {
    if (errorGetForecast) {
      Alert.alert('Something went wrong!');
      resetGetForecastError();
      navigation.navigate('Home');
    }
  }, [errorGetForecast, resetGetForecastError, navigation]);

  return {
    weatherList: farmatedForecast,
    units,
    city,
  };
};
