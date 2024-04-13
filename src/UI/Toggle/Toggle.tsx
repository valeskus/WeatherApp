import React, {useCallback, useMemo} from 'react';
import {Pressable, Text, View, LayoutAnimation} from 'react-native';

import {styles} from './styles';

interface Props {
  items: Array<string>;
  activeItem: 'imperial' | 'metric';
  onChange: (elunitsValue: string) => void;
}

export function Toggle({items, onChange, activeItem}: Props): JSX.Element {
  const setActive = useCallback(
    (activeElement: string): void => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      onChange(activeElement);
    },
    [onChange],
  );

  // const ids = useMemo(() => {
  //   return items.map(({ id }) => id);
  // }, [items]);

  const activeItemWidth = useMemo(() => {
    return 100 / items.length;
  }, [items]);

  const activeItemPosition = useMemo(() => {
    return (100 / items.length) * items.indexOf(activeItem);
  }, [items, activeItem]);

  return (
    <View style={styles.selectContainer}>
      <View style={styles.activeItemWrap}>
        <View
          style={[
            {width: `${activeItemWidth}%`},
            styles.selectItemActive,
            {left: `${activeItemPosition}%`},
          ]}
        />
      </View>

      <View style={styles.selectItem}>
        {items.map((item, index) => {
          return (
            <Pressable
              onPress={() => setActive(item)}
              style={styles.selectButton}
              key={index}>
              <Text
                style={[
                  styles.selectItemTitle,
                  activeItem === item && styles.activeTitle,
                ]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
