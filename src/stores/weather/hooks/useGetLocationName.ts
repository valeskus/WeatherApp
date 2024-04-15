import * as React from 'react';
import * as Redux from 'react-redux';

import {getLocationNameByCoordinates} from '../weatherActions';

export const useGetLocationName = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (city: {lon: number; lat: number}) => {
      await getLocationNameByCoordinates(dispatch, city);
    },
    [dispatch],
  );
};
