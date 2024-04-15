import React from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';

import {styles} from './styles';
import {useHomeController} from './useHomeController';
import {Search} from '../../components/Search';
import {CurrentWeatherCard} from './components/CurrentWeatherCard/CurrentWeatherCard';

export function Home(): JSX.Element {
  const {handleSearch, currentWeather, units, city, isLoading} =
    useHomeController();

  return (
    <View style={styles.homeScreenContainer}>
      <Search onSearch={handleSearch} />
      {isLoading && <ActivityIndicator size={'large'} />}
      {!isLoading && (
        <ScrollView style={styles.cardContainer}>
          {currentWeather && (
            <>
              <Text style={styles.note}>{'Last search result:'}</Text>
              <CurrentWeatherCard
                currentWeather={currentWeather}
                units={units}
                city={city?.name || ''}
              />
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
}
