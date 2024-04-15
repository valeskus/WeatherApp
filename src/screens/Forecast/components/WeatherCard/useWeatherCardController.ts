import {useMemo} from 'react';
import {PlainForecastItem} from '../../../../models';

export interface WeatherCardControllerParams {
  weatherData: [date: string, Array<PlainForecastItem>];
  units: 'Imperial' | 'Metric';
  city?: string;
}

const dateRegexp =
  /^(?<WeekDay>[a-zA-Z]{3})\s(?<Month>[a-zA-Z]{3})\s(?<Day>\d{2})\s(?<Year>\d{4})/;

export const useWeatherCardController = ({
  weatherData,
  units,
}: WeatherCardControllerParams) => {
  const [date, weatherForDate] = weatherData;

  const parsedData = useMemo(() => {
    const {groups} = dateRegexp.exec(date) || {
      groups: {
        WeekDay: '',
        Day: '',
        Month: '',
        Year: '',
      },
    };

    return {
      weekDay: groups?.WeekDay || '',
      dateString: `${groups?.Day}.${groups?.Month}.${groups?.Year}`,
    };
  }, [date]);

  const referenceIndex = useMemo(
    () => Math.floor(weatherForDate.length / 2),
    [weatherForDate.length],
  );

  const weatherInfo = useMemo(
    () =>
      weatherForDate.reduce((accumulator, item) => {
        if (accumulator.temp_max < item.temp_max) {
          accumulator.temp_max = item.temp_max;
        }

        if (accumulator.temp_min > item.temp_min) {
          accumulator.temp_min = item.temp_min;
        }

        return accumulator;
      }, weatherForDate[referenceIndex]),
    [weatherForDate, referenceIndex],
  );

  return {
    unit: units === 'Imperial' ? 'F' : 'C',
    weatherInfo,
    ...parsedData,
  };
};
