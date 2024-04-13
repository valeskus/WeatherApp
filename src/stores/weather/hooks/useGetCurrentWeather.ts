import * as React from 'react';
import * as Redux from 'react-redux';

import {getCurrentWeather} from '../weatherActions';
import {LocationDataModel} from '../../../models';

export const useGetCurrentWeather = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (location: LocationDataModel) => {
      await getCurrentWeather(dispatch, location);
    },
    [dispatch],
  );
};
