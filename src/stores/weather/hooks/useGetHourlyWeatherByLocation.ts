import * as React from 'react';
import * as Redux from 'react-redux';

import {getHourlyWeatherByLocation} from '../weatherActions';
import {CityLocModel} from '../../../models';

export const useGetHourlyWeatherByLocation = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (
      city: Omit<CityLocModel, 'name'>,
      units: 'Imperial' | 'Metric',
      cnt: number,
    ) => {
      await getHourlyWeatherByLocation(dispatch, city, units, cnt);
    },
    [dispatch],
  );
};
