import * as Redux from 'redux';

import {WeatherActions} from './weatherActions';
import {CityLocModel} from '../../models';

export interface WeatherStoreState {
  weather: any;
  city?: CityLocModel;
}

const initialState: WeatherStoreState = {
  weather: [],
};

export function weatherReducer(
  state = initialState,
  action: Redux.AnyAction,
): WeatherStoreState {
  switch (action.type) {
    case WeatherActions.GET_COORDINATS: {
      const {name, lat, lon} = action.payload as CityLocModel;

      return {
        ...state,
        city: {name, lat, lon},
      };
    }

    case WeatherActions.GET_CURRENT_WEATHER: {
      const {weather} = action.payload;

      return {
        ...state,
        weather,
      };
    }

    case WeatherActions.GET_FORECAST: {
      const {weather} = action.payload;

      return {
        ...state,
        weather,
      };
    }

    default:
      return state;
  }
}
