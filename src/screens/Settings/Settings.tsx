import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {useSettingsController} from './useSettingsController';
import {Toggle} from '../../UI/Toggle';

export function Settings(): JSX.Element {
  const {units, handleChangeUnits} = useSettingsController();

  return (
    <View style={styles.settingsScreenContainer}>
      <Toggle
        onChange={handleChangeUnits}
        items={['Imperial', 'Metric']}
        activeItem={units}
      />
    </View>
  );
}
