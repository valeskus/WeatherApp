import * as React from 'react';
import * as Redux from 'react-redux';

import {getHourlyWeather} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetHourlyWeather = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (
      city: Omit<CityLocModel, 'name'>,
      units: 'Imperial' | 'Metric',
      cnt: number,
    ) => {
      await getHourlyWeather(dispatch, city, units, cnt);
    },
    [dispatch],
  );
};
