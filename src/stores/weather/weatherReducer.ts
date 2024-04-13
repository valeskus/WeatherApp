import * as Redux from 'redux';

import {WeatherActions} from './weatherActions';
import {CityLocModel, CurrentWeather, WeatherForecastModel} from '../../models';

export interface WeatherStoreState {
  currentWeather?: CurrentWeather;
  city?: CityLocModel;
  forecast?: WeatherForecastModel;
}

const initialState: WeatherStoreState = {};

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
      const currentWeather = action.payload as CurrentWeather;

      return {
        ...state,
        currentWeather,
      };
    }

    case WeatherActions.GET_FORECAST: {
      const forecast = action.payload as WeatherForecastModel;

      return {
        ...state,
        forecast,
      };
    }

    default:
      return state;
  }
}
