import {useCallback, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {useGetCoordinates} from '../../stores/weather';

export interface SearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: SearchControllerParams) => {
  const [pendingSearchTerm, setPendingSearchTerm] = useState<string>('');
  const getCoordinates = useGetCoordinates();

  const [isFocused, setFocused] = useState(false);

  const searchInputRef = useRef<TextInput>(null);

  const handleChange = useCallback((nextValue: string) => {
    setPendingSearchTerm(nextValue);
  }, []);

  const handleSearch = useCallback(() => {
    if (!pendingSearchTerm) {
      return;
    }
    params.onSearch();

    getCoordinates(pendingSearchTerm);
  }, [pendingSearchTerm, getCoordinates, params]);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleResetSearchInput = useCallback(() => {
    setPendingSearchTerm('');
    handlePress();
  }, [handlePress]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const cutSearchTerm = useCallback(() => {
    if (pendingSearchTerm.length > 35) {
      return pendingSearchTerm.slice(0, 32).concat('', '...');
    }

    return pendingSearchTerm;
  }, [pendingSearchTerm]);

  return {
    searchTerm: pendingSearchTerm,
    searchInputRef,
    isFocused,
    handleBlur,
    handleFocus,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
    cutSearchTerm,
  };
};
