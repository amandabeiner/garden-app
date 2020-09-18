import React, { useCallback } from 'react';
import { StatusBarStyle, StatusBar, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const useStatusBarEffect = (
  statusBarStyle: StatusBarStyle,
  backgroundColor: string,
): void => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(statusBarStyle);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(backgroundColor);
      }
    }, [statusBarStyle, backgroundColor]),
  );
};
