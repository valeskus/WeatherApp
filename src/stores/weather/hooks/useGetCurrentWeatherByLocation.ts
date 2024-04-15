import * as React from 'react';
import * as Redux from 'react-redux';

import {getCurrentWeatherByLocation} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetCurrentWeatherByLocation = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (
      location: Omit<CityLocModel, 'name' | 'state'>,
      units: 'Imperial' | 'Metric',
    ) => {
      await getCurrentWeatherByLocation(dispatch, location, units);
    },
    [dispatch],
  );
};
