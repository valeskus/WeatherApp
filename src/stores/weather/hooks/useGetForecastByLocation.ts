import * as React from 'react';
import * as Redux from 'react-redux';

import {getForecastByLocation} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetForecastByLocation = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (city: Omit<CityLocModel, 'name'>, units: 'Imperial' | 'Metric') => {
      await getForecastByLocation(city, units, dispatch);
    },
    [dispatch],
  );
};
