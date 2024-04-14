import {useCallback, useEffect, useState} from 'react';
import {PersistentStorageManager} from '../../../managers/PersistentStorageManager';
import * as WeatherStore from '../../../stores/weather';

export const useGetCurentCityFromStorage = () => {
  const [cityName, setCityName] = useState<string>('');
  const setUnits = WeatherStore.useSetUnits();

  const getCoordinates = WeatherStore.useGetCoordinates();

  const getCityName = useCallback(async () => {
    const city = await PersistentStorageManager.get('cityName');
    if (!city) {
      return;
    }
    setCityName(city);
  }, []);

  const getUnitsFromStorage = useCallback(async () => {
    const unitsValue = await PersistentStorageManager.get('units');
    if (!unitsValue) {
      return;
    }
    setUnits(unitsValue as 'Imperial' | 'Metric');
  }, [setUnits]);

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
    getUnitsFromStorage,
  };
};
