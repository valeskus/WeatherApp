import {useCallback, useEffect, useState} from 'react';
import {PersistentStorageManager} from '../../../managers/PersistentStorageManager';
import * as WeatherStore from '../../../stores/weather';

export const useGetCurentCityFromStorage = () => {
  const [cityName, setCityName] = useState<string>('');
  const getCoordinates = WeatherStore.useGetCoordinates();

  const getCityName = useCallback(async () => {
    const city = await PersistentStorageManager.get('cityName');
    if (!city) {
      return;
    }
    setCityName(city);
  }, []);

  useEffect(() => {
    getCityName();
  }, [getCityName]);

  const getCityFromStorage = useCallback(() => {
    if (!cityName) {
      return;
    }
    getCoordinates(cityName);
  }, [getCoordinates, cityName]);

  return {
    getCityFromStorage,
  };
};
