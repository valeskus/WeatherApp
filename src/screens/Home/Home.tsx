import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {useHomeController} from './useHomeController';

export function Home(): JSX.Element {
  const {} = useHomeController();

  return <View style={styles.homeScreenContainer} />;
}
