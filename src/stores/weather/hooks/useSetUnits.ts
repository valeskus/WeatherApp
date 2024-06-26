import * as React from 'react';
import * as Redux from 'react-redux';

import {setUnits} from '../weatherActions';

export const useSetUnits = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (unit: 'Imperial' | 'Metric') => {
      await setUnits(dispatch, unit);
    },
    [dispatch],
  );
};
