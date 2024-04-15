import React from 'react';

import {styles} from './styles';
import {useWeatherHourlyController} from './useWeatherHourlyController';
import {HourlyCard} from '../HourlyCard';
import {Icons} from '../../../../UI/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native';
import {CityLocModel} from '../../../../models';

interface Props {
  locationCity?: CityLocModel;
}

export function WeatherHourly({locationCity}: Props): JSX.Element {
  const {hourlyWeather, units, isLoading} =
    useWeatherHourlyController(locationCity);

  return (
    <>
      {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
      {!isLoading && (
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
      )}
    </>
  );
}
