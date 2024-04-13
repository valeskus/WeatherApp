import * as React from 'react';
import * as Redux from 'react-redux';

import {getCurrentWeather} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetCurrentWeather = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (
      location: Omit<CityLocModel, 'name' | 'state'>,
      units: 'imperial' | 'metric',
    ) => {
      await getCurrentWeather(dispatch, location, units);
    },
    [dispatch],
  );
};
