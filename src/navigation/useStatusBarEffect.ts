import React, { useCallback } from 'react';
import { StatusBarStyle, StatusBar, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const useStatusBarEffect = (
  statusBarStyle: StatusBarStyle,
  backgroundColor: string,
): void => {
  console.log({ backgroundColor });
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(statusBarStyle);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(backgroundColor);
      }
    }, [statusBarStyle, backgroundColor]),
  );
};
