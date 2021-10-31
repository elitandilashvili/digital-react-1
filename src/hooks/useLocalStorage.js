import { useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { getItem, saveItem } from '../helper/LocalStorage';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    console.log('use local storage');
    try {
      const value = getItem(key);
      return value ? value : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    console.log('counter change', newValue);
    try {
      const valueToSet =
        newValue instanceof Function ? newValue(storedValue) : newValue;

      setStoredValue(valueToSet);
      saveItem(key, valueToSet);
    } catch (error) {}
  };

  return [storedValue, setValue];
};
