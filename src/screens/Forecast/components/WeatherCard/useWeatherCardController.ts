import {useCallback, useEffect, useState} from 'react';
import {TransformedArrayElement} from '../../hooks';

export interface WeatherCardControllerParams {
  weatherForDay: TransformedArrayElement;
  units: 'Imperial' | 'Metric';
  city: string;
}

export const useWeatherCardController = ({
  weatherForDay,
  units,
}: WeatherCardControllerParams) => {
  const [unit, setUnit] = useState<'F' | 'C'>();
  const [date, setDate] = useState<{day: string; dateString: string} | null>(
    null,
  );
  useEffect(() => {
    if (units === 'Imperial') {
      return setUnit('F');
    }
    setUnit('C');
  }, [units]);

  const getWeekDay = useCallback(() => {
    const weekDays = ['Sun.', 'Mon.', 'Tues', 'Wed.', 'Thurs.', 'Fri.'];

    const dateParts = weatherForDay.formattedDate.split('.');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10) + 2000;

    const dateInfo = new Date(year, month, day);
    const dayOfWeekIndex = dateInfo.getDay();

    setDate({
      day: weekDays[dayOfWeekIndex],
      dateString: weatherForDay.formattedDate,
    });
  }, [weatherForDay]);

  useEffect(() => {
    getWeekDay();
  }, [getWeekDay]);

  return {
    unit,
    date,
  };
};
