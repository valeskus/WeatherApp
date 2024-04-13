import {Dispatch} from 'redux';

import * as WeatherApi from '../../api/weather.api';
import {CityLocModel} from '../../models';
import {PersistentStorageManager} from '../../managers/PersistentStorageManager';

export enum WeatherActions {
  GET_CURRENT_WEATHER = '@weather/get_current_weather',
  GET_FORECAST = '@weather/get_forecast',
  GET_COORDINATS = '@weather/get_coordinats',
  ERROR = '@error/weather',
}

const actionGetForecast = (payload: any) => ({
  type: WeatherActions.GET_FORECAST,
  payload,
});

const actionGetCurrentWeather = (payload: any) => ({
  type: WeatherActions.GET_CURRENT_WEATHER,
  payload,
});

const actionGetCoordinates = (payload: CityLocModel) => ({
  type: WeatherActions.GET_COORDINATS,
  payload,
});

const actionError = (key: string, error: unknown) => ({
  type: WeatherActions.ERROR,
  payload: {[key]: error},
});

export const getForecast = async (dispatch: Dispatch, cityName: string) => {
  try {
    const forecastWeather = await WeatherApi.getForecast(cityName);

    dispatch(actionGetForecast(forecastWeather));
  } catch (error) {
    dispatch(actionError('getForecast', error));
  }
};

export const getCurrentWeather = async (
  dispatch: Dispatch,
  location: Omit<CityLocModel, 'name' | 'state'>,
) => {
  try {
    const weather = await WeatherApi.getCurrentWeather(location);

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
