import {Dispatch} from 'redux';

import * as WeatherApi from '../../api/weather.api';
import {CityLocModel, WeatherForecastModel} from '../../models';
import {PersistentStorageManager} from '../../managers/PersistentStorageManager';

export enum WeatherActions {
  GET_CURRENT_WEATHER = '@weather/get_current_weather',
  GET_HOURLY_WEATHER = '@weather/get_hourly_weather',
  GET_FORECAST = '@weather/get_forecast',
  SET_UNITS = '@weather/set_units',
  GET_COORDINATS = '@weather/get_coordinats',
  ERROR = '@error/weather',
}

const actionGetForecast = (payload: WeatherForecastModel) => ({
  type: WeatherActions.GET_FORECAST,
  payload,
});

const actionGetCurrentWeather = (payload: any) => ({
  type: WeatherActions.GET_CURRENT_WEATHER,
  payload,
});

const actionGetHourlyWeather = (payload: any) => ({
  type: WeatherActions.GET_HOURLY_WEATHER,
  payload,
});

const actionGetCoordinates = (payload: CityLocModel) => ({
  type: WeatherActions.GET_COORDINATS,
  payload,
});

const actionSetUnits = (units: 'Imperial' | 'Metric') => ({
  type: WeatherActions.SET_UNITS,
  payload: {units},
});

const actionError = (key: string, error: unknown) => ({
  type: WeatherActions.ERROR,
  payload: {[key]: error},
});

export const getForecast = async (
  cityName: string,
  units: 'Imperial' | 'Metric',
  dispatch: Dispatch,
) => {
  try {
    const forecastWeather = await WeatherApi.getForecast(cityName, units);

    dispatch(actionGetForecast(forecastWeather));
  } catch (error) {
    dispatch(actionError('getForecast', error));
  }
};

export const getHourlyWeather = async (
  dispatch: Dispatch,
  cityName: string,
  units: 'Imperial' | 'Metric',
  cnt: number,
) => {
  try {
    const hourlyWeather = await WeatherApi.getForecast(cityName, units, cnt);

    dispatch(actionGetHourlyWeather(hourlyWeather));
  } catch (error) {
    dispatch(actionError('getCurrentWeather', error));
  }
};

export const getCurrentWeather = async (
  dispatch: Dispatch,
  location: Omit<CityLocModel, 'name' | 'state'>,
  units: 'Imperial' | 'Metric',
) => {
  try {
    const weather = await WeatherApi.getCurrentWeather(location, units);

    dispatch(actionGetCurrentWeather(weather));
  } catch (error) {
    dispatch(actionError('getCurrentWeather', error));
  }
};

export const getCoordinatesByLocationName = async (
  dispatch: Dispatch,
  cityName: string,
) => {
  try {
    const city = await WeatherApi.getCoordinatesByLocationName(cityName);

    dispatch(actionGetCoordinates(city));
    PersistentStorageManager.set('cityName', city.name);
  } catch (error) {
    dispatch(actionError('getCoordinatesByLocationName', error));
  }
};

export const setUnits = async (
  dispatch: Dispatch,
  units: 'Imperial' | 'Metric',
) => {
  try {
    dispatch(actionSetUnits(units));
    PersistentStorageManager.set('units', units);
  } catch (error) {
    dispatch(actionError('setUnits', error));
  }
};
