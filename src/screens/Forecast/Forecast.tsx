import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {useForecastController} from './useForecastController';

export function Forecast(): JSX.Element {
  const {} = useForecastController();

  return <View style={styles.forecastScreenContainer} />;
}
