import {CityLocModel, CurrentWeather} from '../models';
import {client} from './client.api';
import {API_KEY} from '@env';

export const getForecast = async (city: string): Promise<{}> => {
  const result = await client.get('/data/2.5/forecast', {
    params: {
      q: city,
      APPID: API_KEY,
    },
  });

  return result.data;
};

export const getCurrentWeather = async (
  location: Omit<CityLocModel, 'name'>,
): Promise<CurrentWeather> => {
  const result = await client.get<CurrentWeather>('/data/2.5/weather', {
    params: {
      lat: location.lat,
      lon: location.lon,
      APPID: API_KEY,
    },
  });
  return result.data as CurrentWeather;
};

export const getCoordinatesByLocationName = async (
  city: string,
): Promise<CityLocModel> => {
  const result = await client.get<Array<CityLocModel>>('/geo/1.0/direct', {
    params: {
      q: city,
      APPID: API_KEY,
    },
  });
  return result.data[0];
};
