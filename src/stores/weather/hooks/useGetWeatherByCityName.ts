import * as React from 'react';
import * as Redux from 'react-redux';

import {getWeather} from '../weatherActions';

export const useGetWeatherByCityName = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (cityName: string) => {
      await getWeather(dispatch, cityName);
    },
    [dispatch],
  );
};
