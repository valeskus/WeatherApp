import * as React from 'react';
import * as Redux from 'react-redux';

import {getForecast} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetForecast = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (city: Omit<CityLocModel, 'name'>, units: 'Imperial' | 'Metric') => {
      await getForecast(city, units, dispatch);
    },
    [dispatch],
  );
};
