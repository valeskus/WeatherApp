import * as Redux from 'react-redux';

import {WeatherStoreState} from '..//weatherReducer';
import {RootStore} from '../../rootStore';

export const useWeatherStore = () => {
  return Redux.useSelector<RootStore, WeatherStoreState>(
    store => store.weather,
  );
};
