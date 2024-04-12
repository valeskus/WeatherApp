import * as Redux from 'redux';

import {WeatherActions} from './weatherActions';

export interface WeatherStoreState {
  weather: any;
}

const initialState: WeatherStoreState = {
  weather: [],
};

export function weatherReducer(
  state = initialState,
  action: Redux.AnyAction,
): WeatherStoreState {
  switch (action.type) {
    case WeatherActions.GET: {
      const {weather} = action.payload;

      return {
        weather,
      };
    }

    default:
      return state;
  }
}
