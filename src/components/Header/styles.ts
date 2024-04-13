import {StyleSheet} from 'react-native';

import {Colors} from '../../UI/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'relative',
  },

  headerTitle: {
    color: Colors.primary,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    flex: 1,
  },

  buttonPressed: {
    transform: [{scale: 0.96}],
  },

  buttonImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  leftButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    zIndex: 10,
    marginLeft: 10,
  },

  headerRightContainer: {
    justifyContent: 'center',
    marginRight: 10,
    width: 30,
    height: 30,
    zIndex: 1,
  },

  snowflakesContainer: {
    width: '100%',
    paddingHorizontal: 20,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
  },
});
