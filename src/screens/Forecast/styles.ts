import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  forecastScreenContainer: {
    flex: 1,

    paddingHorizontal: 10,
  },
  cardContainer: {
    width: '100%',
  },
  note: {
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 15,
    color: Colors.primary,
  },
});
