import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

export const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: Colors.tertiary,
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectButton: {
    flex: 1,
    paddingVertical: 10,
  },
  selectItemActive: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    zIndex: 10,
    paddingVertical: 20,
  },
  selectItem: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 10,
  },
  selectItemTitle: {
    alignSelf: 'center',
    fontSize: 15,
    color: Colors.text,
  },
  activeTitle: {
    color: Colors.background,
  },
  moveRight: {
    left: '33%',
  },
  activeItemWrap: {
    width: '100%',
    position: 'absolute',
  },
});
