import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useHeaderButtonController = (title: 'Settings' | 'Calendar') => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    if (title === 'Settings') {
      navigation.navigate('Settings');
    }
    if (title === 'Calendar') {
      navigation.navigate('Forecast');
    }
  }, [navigation, title]);

  return {
    onPress,
  };
};
