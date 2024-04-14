import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {useForecastController} from './useForecastController';
import {WeatherCard} from './components/WeatherCard/WeatherCard';

export function Forecast(): JSX.Element {
  const {weatherList, units, city} = useForecastController();

  return (
    <View style={styles.forecastScreenContainer}>
      <ScrollView style={styles.cardContainer}>
        {city && weatherList && (
          <>
            <Text style={styles.note}>{city.name}:</Text>
            {weatherList.map((item, index) => (
              <WeatherCard
                key={index}
                weatherForDay={item}
                units={units}
                city={city?.name || ''}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}
