import * as React from 'react';
import * as Redux from 'react-redux';

import {getForecast} from '../weatherActions';

export const useGetForecast = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (cityName: string, units: 'Imperial' | 'Metric') => {
      await getForecast(cityName, units, dispatch);
    },
    [dispatch],
  );
};
