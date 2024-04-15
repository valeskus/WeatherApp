import {StyleSheet} from 'react-native';
import {Colors} from '../../../../UI/Colors';

export const styles = StyleSheet.create({
  weatherInfoItem: {
    backgroundColor: Colors.backgroundOpacity,
    padding: '5%',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 80,
    marginHorizontal: 5,
  },
  icon: {
    width: '100%',
    height: '65%',
    objectFit: 'contain',
  },

  textInfo: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.primary,
  },
});
