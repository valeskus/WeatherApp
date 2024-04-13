import * as React from 'react';
import * as Redux from 'react-redux';

import {getForecast} from '../weatherActions';

export const useGetForecast = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (cityName: string, units: 'imperial' | 'metric') => {
      await getForecast(dispatch, cityName, units);
    },
    [dispatch],
  );
};
