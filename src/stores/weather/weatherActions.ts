import {Dispatch} from 'redux';

import * as WeatherApi from '../../api/weather.api';

export enum WeatherActions {
  GET = '@weather/get',
  ERROR = '@error/weather',
}

const actionGetWeatherByCity = (payload: any) => ({
  type: WeatherActions.GET,
  payload,
});

const actionError = (key: string, error: unknown) => ({
  type: WeatherActions.ERROR,
  payload: {[key]: error},
});

export const getWeather = async (dispatch: Dispatch, cityName: string) => {
  try {
    const weather = await WeatherApi.getWeatherByCity(cityName);

    dispatch(actionGetWeatherByCity(weather));
  } catch (error) {
    dispatch(actionError('getWeather', error));
  }
};
