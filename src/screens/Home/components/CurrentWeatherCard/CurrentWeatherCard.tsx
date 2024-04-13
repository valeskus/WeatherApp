import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {useCurrentWeatherCardController} from './useCurrentWeatherCardController';

export function CurrentWeatherCard(): JSX.Element {
  const {} = useCurrentWeatherCardController();
  return <View style={styles.weatherContainer} />;
}
