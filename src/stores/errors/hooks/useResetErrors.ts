import * as React from 'react';
import * as Redux from 'react-redux';

import {resetErrors} from '../errorsActions';

export const useResetErrors = (errorKey: string) => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    resetErrors(errorKey, dispatch);
  }, [dispatch, errorKey]);
};
