import {useCallback, useEffect, useMemo, useState} from 'react';
import * as WeatherStore from '../../stores/weather';
import * as ErrorsStore from '../../stores/errors';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useForecastController = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const {city, forecast, forecastByLocation, units, locationCity} =
    WeatherStore.useWeatherStore();
  const [activeItem, setActiveItem] = useState<string | undefined>(city?.name);

  const getForecast = WeatherStore.useGetForecast();
  const getForecastByLocation = WeatherStore.useGetForecastByLocation();

  const errorGetForecast = ErrorsStore.useGetErrorFor('getForecast');
  const resetGetForecastError = ErrorsStore.useResetErrors('getForecast');
  const navigation = useNavigation();

  const citiesArray = [city?.name, locationCity?.name];

  const handleChangeForecastItems = useCallback((cityName: string) => {
    setActiveItem(cityName);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (locationCity) {
      getForecastByLocation(locationCity, units).then(() => setLoading(false));
    }
    if (!city || forecast) {
      setLoading(false);
      return;
    }
    getForecast(city, units).then(() => setLoading(false));
  }, [city, forecast, getForecast, units, locationCity, getForecastByLocation]);

  useEffect(() => {
    setLoading(true);
    if (!locationCity) {
      return;
    }
    getForecastByLocation(locationCity, units).then(() => setLoading(false));
  }, [units, locationCity, getForecastByLocation]);

  useEffect(() => {
    if (errorGetForecast) {
      Alert.alert('Something went wrong!');
      resetGetForecastError();
      navigation.navigate('Home');
    }
  }, [errorGetForecast, resetGetForecastError, navigation]);

  const forecastBySearch = useMemo(
    () => Object.entries(forecast || {}),
    [forecast],
  );
  const forecastByGeoLocation = useMemo(
    () => Object.entries(forecastByLocation || {}),
    [forecastByLocation],
  );
  return {
    forecast:
      city?.name === activeItem ? forecastBySearch : forecastByGeoLocation,
    units,
    city: city?.name === activeItem ? city?.name : locationCity?.name,
    isLoading,
    citiesArray,
    activeItem,
    handleChangeForecastItems,
  };
};
