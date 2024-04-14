import {StyleSheet} from 'react-native';
import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    alignItems: 'center',
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
