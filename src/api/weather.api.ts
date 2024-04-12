import {client} from './client.api';
import {API_KEY} from '@env';

export const getWeatherByCity = async (city: string): Promise<any> => {
  const result = await client.get('/forecast', {
    params: {
      q: city,
      APPID: API_KEY,
    },
  });

  return result.data;
};
