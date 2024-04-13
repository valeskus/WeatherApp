import React, {useCallback} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Icons} from '../../UI/Icons';

import {styles} from './styles';

interface Props {
  options: StackNavigationOptions;
  headerRight?: React.ReactNode;
  headerLeft?: React.ReactNode;
  seasonAnimate?: React.ReactNode;
}

export function Header({
  options,
  headerRight,
  headerLeft,
  seasonAnimate,
}: Props): JSX.Element {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      {!headerLeft && (
        <Pressable
          onPress={onGoBack}
          style={({pressed}) => [
            styles.leftButton,
            pressed && styles.buttonPressed,
          ]}>
          <Image source={Icons.leftArrow} style={styles.buttonImage} />
        </Pressable>
      )}
      {headerLeft && <View style={styles.leftButton}>{headerLeft}</View>}
      <Text style={styles.headerTitle}>{options.title}</Text>
      <View style={styles.headerRightContainer}>{headerRight}</View>
      {seasonAnimate && (
        <View style={styles.snowflakesContainer}>{seasonAnimate}</View>
      )}
    </View>
  );
}
