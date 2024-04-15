import {CityLocModel, CurrentWeather, WeatherForecastModel} from '../models';
import {client} from './client';
import {API_KEY} from '@env';

export const getForecast = async (
  city: Omit<CityLocModel, 'name'>,
  units: 'Imperial' | 'Metric',
  cnt?: number,
): Promise<WeatherForecastModel> => {
  const result = await client.get<WeatherForecastModel>('/data/2.5/forecast', {
    params: {
      lat: city.lat,
      lon: city.lon,
      APPID: API_KEY,
      units,
      cnt,
    },
  });

  return result.data;
};

export const getCurrentWeather = async (
  location: Omit<CityLocModel, 'name' | 'state'>,
  units: 'Imperial' | 'Metric',
): Promise<CurrentWeather> => {
  const result = await client.get<CurrentWeather>('/data/2.5/weather', {
    params: {
      lat: location.lat,
      lon: location.lon,
      APPID: API_KEY,
      units,
    },
  });

  return result.data;
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

export const getLocationNameByCoordinates = async (coordinates: {
  lon: number;
  lat: number;
}): Promise<CityLocModel> => {
  const result = await client.get<Array<CityLocModel>>('/geo/1.0/reverse', {
    params: {
      APPID: API_KEY,
      lat: coordinates?.lat,
      lon: coordinates?.lon,
    },
  });
  return result.data[0];
};
