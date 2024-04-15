import React from 'react';

import {styles} from './styles';
import {useWeatherHourlyController} from './useWeatherHourlyController';
import {HourlyCard} from '../HourlyCard';
import {Icons} from '../../../../UI/Icons';
import {FlatList} from 'react-native-gesture-handler';

interface Props {}

export function WeatherHourly({}: Props): JSX.Element {
  const {hourlyWeather, units} = useWeatherHourlyController();

  return (
    <FlatList
      style={styles.weatherContainer}
      horizontal
      data={hourlyWeather}
      renderItem={({item}) => (
        <HourlyCard
          temp={item.temp}
          unit={units as 'F' | 'C'}
          icon={item.icon as keyof typeof Icons}
          hour={item.hour}
        />
      )}
      keyExtractor={item => item.hour.toString()}
    />
  );
}
