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
  const {unit, weatherInfo, weekDay, dateString} =
    useWeatherCardController(props);

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.dateTempContainer}>
        <View style={[styles.cardItem]}>
          <View>
            <Text style={styles.text}>{weekDay}</Text>
            <Text style={styles.text_secondary}>{dateString}</Text>
            <Text style={styles.temp}>{weatherInfo.description}</Text>
          </View>
        </View>

        <View style={[styles.cardItem, styles.tempIconContainer]}>
          <Image
            style={styles.icon}
            source={Icons[weatherInfo.icon as keyof typeof Icons]}
          />
          <View style={styles.tempBox}>
            <Text style={styles.temp}>
              {Math.round(weatherInfo.temp_min)}°{unit}
            </Text>
            <Text style={styles.temp}>{' - '}</Text>
            <Text style={styles.temp}>
              {Math.round(weatherInfo.temp_max)}°{unit}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
