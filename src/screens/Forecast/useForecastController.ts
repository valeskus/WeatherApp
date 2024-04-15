import {useEffect, useMemo, useState} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useForecastController = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const {city, forecast, units} = WeatherStore.useWeatherStore();
  const getForecast = WeatherStore.useGetForecast();
  const errorGetForecast = ErrorsStore.useGetErrorFor('getForecast');
  const resetGetForecastError = ErrorsStore.useResetErrors('getForecast');
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    if (!city || forecast) {
      setLoading(false);
      return;
    }
    getForecast(city, units).then(() => setLoading(false));
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
    isLoading,
  };
};
