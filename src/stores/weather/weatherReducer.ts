import * as Redux from 'redux';

import {WeatherActions} from './weatherActions';
import {
  CityLocModel,
  CurrentWeather,
  PlainForecastItem,
  PlainHourlyItem,
  WeatherForecastModel,
} from '../../models';

export interface Units {
  units: 'Imperial' | 'Metric';
}
export interface WeatherStoreState {
  currentWeather?: CurrentWeather;
  currentWeatherByLocation?: CurrentWeather;
  hourlyWeather?: Record<string, Array<PlainHourlyItem>>;
  hourlyWeatherByLocation?: Record<string, Array<PlainHourlyItem>>;
  city?: CityLocModel;
  locationCity?: CityLocModel;
  forecast?: Record<string, Array<PlainForecastItem>>;
  units: 'Imperial' | 'Metric';
}

const initialState: WeatherStoreState = {
  units: 'Metric',
};

export function weatherReducer(
  state = initialState,
  action: Redux.AnyAction,
): WeatherStoreState {
  switch (action.type) {
    case WeatherActions.GET_COORDINATS: {
      const city = action.payload as CityLocModel;

      return {
        ...state,
        city,
      };
    }

    case WeatherActions.GET_CURRENT_WEATHER: {
      const currentWeather = action.payload as CurrentWeather;

      return {
        ...state,
        currentWeather,
      };
    }

    case WeatherActions.GET_CURRENT_WEATHER_BY_LOCATION: {
      const currentWeatherByLocation = action.payload as CurrentWeather;

      return {
        ...state,
        currentWeatherByLocation,
      };
    }

    case WeatherActions.GET_HOURLY_WEATHER: {
      const {list} = action.payload as WeatherForecastModel;

      return {
        ...state,
        hourlyWeather: list.reduce<Record<string, Array<PlainHourlyItem>>>(
          (accumulator, item) => {
            const plainItem = {
              hour: new Date(item.dt * 1000).getHours(),
              temp: item.main.temp,
              icon: item.weather[0].icon,
            };

            const textDate = new Date(item.dt * 1000).toDateString();

            if (accumulator[textDate]) {
              accumulator[textDate].push(plainItem);
            } else {
              accumulator[textDate] = [plainItem];
            }

            return accumulator;
          },
          {},
        ),
      };
    }

    case WeatherActions.GET_HOURLY_WEATHER_BY_LOCATION: {
      const {list} = action.payload as WeatherForecastModel;

      return {
        ...state,
        hourlyWeatherByLocation: list.reduce<
          Record<string, Array<PlainHourlyItem>>
        >((accumulator, item) => {
          const plainItem = {
            hour: new Date(item.dt * 1000).getHours(),
            temp: item.main.temp,
            icon: item.weather[0].icon,
          };

          const textDate = new Date(item.dt * 1000).toDateString();

          if (accumulator[textDate]) {
            accumulator[textDate].push(plainItem);
          } else {
            accumulator[textDate] = [plainItem];
          }

          return accumulator;
        }, {}),
      };
    }

    case WeatherActions.GET_FORECAST: {
      const {list} = action.payload as WeatherForecastModel;

      return {
        ...state,
        forecast: list.reduce<Record<string, Array<PlainForecastItem>>>(
          (accumulator, item) => {
            const plainItem = {
              temp_max: item.main.temp_max,
              temp_min: item.main.temp_min,
              description: item.weather[0].description,
              icon: item.weather[0].icon,
              main: item.weather[0].main,
              id: item.weather[0].id,
            };

            const textDate = new Date(item.dt * 1000).toDateString();

            if (accumulator[textDate]) {
              accumulator[textDate].push(plainItem);
            } else {
              accumulator[textDate] = [plainItem];
            }

            return accumulator;
          },
          {},
        ),
      };
    }

    case WeatherActions.SET_UNITS: {
      const {units} = action.payload as Units;

      return {
        ...state,
        units,
      };
    }

    case WeatherActions.GET_LOCATION_NAME: {
      const locationCity = action.payload as CityLocModel;
      return {
        ...state,
        locationCity,
      };
    }

    default:
      return state;
  }
}
