import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 20,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    fontSize: 15,
    paddingHorizontal: 13,
    paddingRight: 62,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  searchBarInput: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    padding: 0,
    color: 'black',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 13,
    right: 13,
    zIndex: 0,
  },
  fakeInput: {
    lineHeight: 50,
  },
  searchBarIcon: {
    width: 27,
    height: 27,
    marginVertical: 7,
    marginHorizontal: 5,
  },
  resetSearchIcon: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    marginVertical: 20,
  },
  searchBarIconContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  resetSearchIconContainer: {
    position: 'absolute',
    right: 42,
    top: 0,
  },
  searchPress: {
    transform: [{scale: 0.96}],
  },
  placeholder: {
    color: 'gray',
  },
  inputsContainer: {
    position: 'relative',
    flex: 1,
  },
});
