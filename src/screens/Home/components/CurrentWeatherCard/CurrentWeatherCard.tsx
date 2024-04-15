import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';
import {
  CurrentWeatherCardControllerParams,
  useCurrentWeatherCardController,
} from './useCurrentWeatherCardController';
import {Icons} from '../../../../UI/Icons';
import {WeatherHourly} from '../WeatherHourly';

interface Props extends CurrentWeatherCardControllerParams {}

export function CurrentWeatherCard(props: Props): JSX.Element {
  const {unit, date} = useCurrentWeatherCardController(props);
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
          <Text style={[styles.text, styles.cityText]}>{props.city}</Text>
          <Text style={styles.text_primary}>
            {props.currentWeather.weather[0].description}
          </Text>
        </View>

        <View style={[styles.cardItem, styles.tempIconContainer]}>
          <Text style={styles.temp}>
            {Math.round(props.currentWeather.main.temp)}°{unit}
          </Text>
          <Image
            style={styles.icon}
            source={
              Icons[props.currentWeather?.weather[0].icon as keyof typeof Icons]
            }
          />
        </View>
      </View>

      <View style={styles.weatherInfo}>
        <View style={styles.weatherInfoItem}>
          <Text style={styles.textInfo}>
            {props.currentWeather.visibility / 1000} km
          </Text>
          <Text style={styles.textInfo}>{'Visibility'}</Text>
        </View>
        <View style={styles.weatherInfoItem}>
          <Text style={styles.textInfo}>
            {props.currentWeather.main.humidity}%
          </Text>
          <Text style={styles.textInfo}>{'Humidity'}</Text>
        </View>
        <View style={styles.weatherInfoItem}>
          <Text style={styles.textInfo}>
            {Math.round(props.currentWeather.main.feels_like)}°
          </Text>
          <Text style={styles.textInfo}>{'Feels like'}</Text>
        </View>
      </View>
      <Text style={styles.text_secondary}>
        {'The weather today with a 3-hour step:'}
      </Text>
      <WeatherHourly locationCity={props.locationCity} />
    </View>
  );
}
