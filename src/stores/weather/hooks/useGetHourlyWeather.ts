import * as React from 'react';
import * as Redux from 'react-redux';

import {getHourlyWeather} from '../weatherActions';

export const useGetHourlyWeather = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (name: string, units: 'Imperial' | 'Metric', cnt: number) => {
      await getHourlyWeather(dispatch, name, units, cnt);
    },
    [dispatch],
  );
};
