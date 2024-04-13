import * as React from 'react';
import * as Redux from 'react-redux';

import {getCoordinatesByLocationName} from '../weatherActions';

export const useGetCoordinates = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (name: string) => {
      await getCoordinatesByLocationName(dispatch, name);
    },
    [dispatch],
  );
};
