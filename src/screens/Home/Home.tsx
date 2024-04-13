import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {useHomeController} from './useHomeController';
import {Search} from '../../components/Search';

export function Home(): JSX.Element {
  const {} = useHomeController();

  return (
    <View style={styles.homeScreenContainer}>
      <Search onSearch={() => {}} />
    </View>
  );
}
