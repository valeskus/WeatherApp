import {useCallback} from 'react';
import {WeatherDayModel} from '../../../models';

interface WeatherData {
  temp_min: number;
  temp_max: number;
  weather: {
    [description: string]: number;
  };
  icon: string;
}

export interface TransformedArrayElement {
  temp_min: number;
  temp_max: number;
  weather: {
    [description: string]: number;
  };
  icon: string;
  formattedDate: string;
}

interface TransformedObject {
  [formattedDate: string]: WeatherData;
}

export const useWeatherForecastFormat = (
  weatherList: Array<WeatherDayModel> | undefined,
) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const formatWeather = useCallback(() => {
    if (!weatherList) {
      return;
    }

    const transformedObject: TransformedObject = weatherList.reduce(
      (acc: TransformedObject, item) => {
        const formattedDate = formatDate(item.dt);
        const existingWeather = acc[formattedDate];
        const {icon, description} = item.weather[0];

        if (!existingWeather) {
          const weatherObject: {[description: string]: number} = {};
          weatherObject[description] = 1;
          acc[formattedDate] = {
            temp_min: Math.round(item.main.temp_min),
            temp_max: Math.round(item.main.temp_max),
            weather: weatherObject,
            icon: icon,
          };
        } else {
          if (!existingWeather.weather[description]) {
            existingWeather.weather[description] = 1;
          } else {
            existingWeather.weather[description]++;
          }

          if (existingWeather.weather[description] > 1) {
            existingWeather.weather = {
              [description]: existingWeather.weather[description],
            };
          }

          if (item.main.temp_min < acc[formattedDate].temp_min) {
            acc[formattedDate].temp_min = item.main.temp_min;
          }
          if (item.main.temp_max > acc[formattedDate].temp_max) {
            acc[formattedDate].temp_max = item.main.temp_max;
          }
        }

        return acc;
      },
      {},
    );

    const transformedArray: TransformedArrayElement[] = Object.keys(
      transformedObject,
    ).map(formattedDate => {
      const weatherData = transformedObject[formattedDate];
      return {
        formattedDate,
        ...weatherData,
      };
    });

    return transformedArray;
  }, [weatherList]);

  return {
    formatWeather,
  };
};
