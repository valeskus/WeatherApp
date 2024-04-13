import {Dispatch} from 'redux';

export enum ErrorsActions {
  RESET = '@error/reset',
  SET = '@error/set',
}

const actionSetError = (errorData: Record<string, unknown>) => ({
  type: ErrorsActions.SET,
  payload: errorData,
});
const actionResetError = (errorKey: string) => ({
  type: ErrorsActions.RESET,
  payload: {errorKey},
});

export const setError = (
  errorData: Record<string, unknown>,
  dispatch: Dispatch,
) => {
  dispatch(actionSetError(errorData));
};

export const resetErrors = (errorKey: string, dispatch: Dispatch) => {
  dispatch(actionResetError(errorKey));
};
