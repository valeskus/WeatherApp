import * as Redux from 'react-redux';

import {ErrorsStoreState} from '../errorsReducer';
import {RootStore} from '../../rootStore';

export const useGetErrorFor = (key: string) => {
  return Redux.useSelector<RootStore, ErrorsStoreState>(
    store => store.errors[key],
  );
};
