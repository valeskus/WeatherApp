import React from 'react';
import {Image, TextInput, Pressable, View, Text} from 'react-native';

import {Icons} from '../../UI/Icons';

import {styles} from './styles';
import {
  SearchControllerParams,
  useSearchController,
} from './useSearchController';

interface Props extends SearchControllerParams {}

export function Search({onSearch}: Props): JSX.Element {
  const {
    isFocused,
    searchTerm,
    searchInputRef,
    handleChange,
    handleBlur,
    handleFocus,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  } = useSearchController({onSearch});

  return (
    <Pressable style={styles.searchBarContainer} onPress={handlePress}>
      <View style={styles.inputsContainer}>
        {!isFocused && (
          <Text
            style={[styles.searchBarInput, styles.fakeInput]}
            numberOfLines={1}>
            {searchTerm}
          </Text>
        )}
        {!searchTerm && (
          <Text
            style={[
              styles.searchBarInput,
              styles.placeholder,
              styles.fakeInput,
            ]}>
            Search
          </Text>
        )}
        <TextInput
          style={[styles.searchBarInput, {opacity: Number(isFocused)}]}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchTerm}
          ref={searchInputRef}
          autoCapitalize="none"
          onSubmitEditing={handleSearch}
        />
      </View>
      {searchTerm && (
        <Pressable
          onPress={handleResetSearchInput}
          style={({pressed}) => [
            styles.resetSearchIconContainer,
            pressed && styles.searchPress,
          ]}
          disabled={!searchTerm}
          hitSlop={5}>
          <Image source={Icons.cancel} style={styles.resetSearchIcon} />
        </Pressable>
      )}

      <Pressable
        onPress={handleSearch}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
        ]}
        disabled={!searchTerm}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </Pressable>
  );
}
