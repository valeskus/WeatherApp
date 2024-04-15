import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {useForecastController} from './useForecastController';
import {WeatherCard} from './components/WeatherCard/WeatherCard';

export function Forecast(): JSX.Element {
  const {forecast, units, city, isLoading} = useForecastController();

  return (
    <View style={styles.forecastScreenContainer}>
      {isLoading && <ActivityIndicator />}
      <ScrollView style={styles.cardContainer}>
        {city && forecast && (
          <>
            <Text style={styles.note}>{city.name}:</Text>
            {forecast.map((weatherData, index) => (
              <WeatherCard
                key={index}
                weatherData={weatherData}
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
