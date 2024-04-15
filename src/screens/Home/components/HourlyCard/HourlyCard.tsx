import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import {Icons} from '../../../../UI/Icons';

interface Props {
  icon: keyof typeof Icons;
  temp: number;
  unit: 'C' | 'F';
  hour: number;
}

export function HourlyCard({icon, temp, unit, hour}: Props): JSX.Element {
  return (
    <View style={styles.weatherInfoItem}>
      <Text style={styles.textInfo}>{hour}</Text>
      <Image style={styles.icon} source={Icons[icon]} />
      <Text style={styles.textInfo}>
        {Math.round(temp)}
        {unit}
      </Text>
    </View>
  );
}
