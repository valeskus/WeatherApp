import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {useForecastController} from './useForecastController';
import {WeatherCard} from './components/WeatherCard/WeatherCard';
import {Toggle} from '../../UI/Toggle';

export function Forecast(): JSX.Element {
  const {
    forecast,
    units,
    city,
    isLoading,
    citiesArray,
    activeItem,
    handleChangeForecastItems,
  } = useForecastController();

  return (
    <View style={styles.forecastScreenContainer}>
      {isLoading && <ActivityIndicator />}
      {citiesArray.length === 2 && activeItem && (
        <Toggle
          items={citiesArray as [string, string]}
          activeItem={activeItem}
          onChange={handleChangeForecastItems}
        />
      )}
      <ScrollView
        style={styles.cardContainer}
        showsVerticalScrollIndicator={false}>
        {forecast && (
          <>
            <Text style={styles.note}>{city}:</Text>
            {forecast.map((weatherData, index) => (
              <WeatherCard
                key={index}
                weatherData={weatherData}
                units={units}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}
