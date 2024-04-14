import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';
import {
  WeatherCardControllerParams,
  useWeatherCardController,
} from './useWeatherCardController';
import {Icons} from '../../../../UI/Icons';

interface Props extends WeatherCardControllerParams {}

export function WeatherCard(props: Props): JSX.Element {
  const {unit, date} = useWeatherCardController(props);
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.dateTempContainer}>
        <View style={[styles.cardItem]}>
          {date && (
            <View>
              <Text style={styles.text}>{date.day}</Text>
              <Text style={styles.text_secondary}>{date.dateString}</Text>
            </View>
          )}
        </View>

        <View style={[styles.cardItem, styles.tempIconContainer]}>
          <Text style={styles.temp}>
            {props.weatherForDay.weather[0].description}
          </Text>
          <Text style={styles.temp}>
            {Math.round(props.weatherForDay.main.temp_min)}°{unit}
          </Text>
          <Text style={styles.temp}>
            {Math.round(props.weatherForDay.main.temp_max)}°{unit}
          </Text>
          <Image
            style={styles.icon}
            source={
              Icons[props.weatherForDay?.weather[0].icon as keyof typeof Icons]
            }
          />
        </View>
      </View>
    </View>
  );
}