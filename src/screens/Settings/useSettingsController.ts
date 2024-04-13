import {useCallback} from 'react';
import * as WeatherStore from '../../stores/weather';

export const useSettingsController = () => {
  const {units} = WeatherStore.useWeatherStore();
  const setUnits = WeatherStore.useSetUnits();

  const handleChangeUnits = useCallback(
    (unitsValue: string) => {
      if (!unitsValue) {
        return;
      }
      setUnits(unitsValue as 'imperial' | 'metric');
    },
    [setUnits],
  );

  return {
    units,
    handleChangeUnits,
  };
};
