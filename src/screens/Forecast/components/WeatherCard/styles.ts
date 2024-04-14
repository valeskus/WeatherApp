import {StyleSheet} from 'react-native';
import {Colors} from '../../../../UI/Colors';

export const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundSecondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    width: '100%',
    height: '75%',
    objectFit: 'contain',
  },
  dateTempContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  tempIconContainer: {
    alignItems: 'center',
  },

  cardItem: {
    flex: 1,
    flexDirection: 'column',
    height: 150,
  },
  weatherInfo: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weatherInfoItem: {
    backgroundColor: Colors.backgroundOpacity,
    padding: '5%',
    borderRadius: 9,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  text_secondary: {
    fontSize: 20,
    color: 'white',
  },
  text_primary: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: '30%',
    color: 'white',
  },
  temp: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
    color: 'white',
  },
  textInfo: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.primary,
  },
  tempBox: {
    flexDirection: 'row',
  },
});
