import {useEffect, useState} from 'react';
import {CityLocModel, CurrentWeather} from '../../../../models';

export interface CurrentWeatherCardControllerParams {
  currentWeather: CurrentWeather;
  units: 'Imperial' | 'Metric';
  city: string;
  locationCity?: CityLocModel;
}

export const useCurrentWeatherCardController = ({
  currentWeather,
  units,
}: CurrentWeatherCardControllerParams) => {
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

  useEffect(() => {
    const weekDays = ['Sun.', 'Mon.', 'Tues', 'Wed.', 'Thurs.', 'Fri.'];

    const dateInfo = new Date(currentWeather.dt * 1000);
    const day = dateInfo.getDate();
    const mounth = dateInfo.getMonth();
    const formatMounth = mounth < 10 ? `0${mounth}` : mounth;
    const year = dateInfo.getFullYear();
    const weekDay = dateInfo.getDay();

    setDate({
      day: weekDays[weekDay],
      dateString: `${day}.${formatMounth}.${year}`,
    });
  }, [currentWeather]);

  return {
    unit,
    date,
  };
};
