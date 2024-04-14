import {useEffect, useMemo} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useForecastController = () => {
  const {city, forecast, units} = WeatherStore.useWeatherStore();
  const getForecast = WeatherStore.useGetForecast();
  const errorGetForecast = ErrorsStore.useGetErrorFor('getForecast');
  const resetGetForecastError = ErrorsStore.useResetErrors('getForecast');
  const navigation = useNavigation();

  useEffect(() => {
    if (!city || forecast) {
      return;
    }
    getForecast(city.name, units);
  }, [city, forecast, getForecast, units]);

  useEffect(() => {
    if (errorGetForecast) {
      Alert.alert('Something went wrong!');
      resetGetForecastError();
      navigation.navigate('Home');
    }
  }, [errorGetForecast, resetGetForecastError, navigation]);

  return {
    forecast: useMemo(() => Object.entries(forecast || {}), [forecast]),
    units,
    city,
  };
};
