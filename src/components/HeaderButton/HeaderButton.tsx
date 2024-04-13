import React from 'react';
import {Pressable, Image} from 'react-native';

import {Icons} from '../../UI/Icons';

import {styles} from './styles';
import {useHeaderButtonController} from './useHeaderButtonController';

interface Props {
  title: 'Settings' | 'Calendar';
}

export function HeaderButton({title}: Props): JSX.Element {
  const {onPress} = useHeaderButtonController(title);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.buttonPressed]}>
      <Image
        source={title === 'Settings' ? Icons.setting : Icons.calendar}
        style={styles.buttonImage}
      />
    </Pressable>
  );
}
