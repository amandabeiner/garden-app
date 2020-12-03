import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

export const useIdToken = () => {
  const [userIdToken, setUserIdToken] = useState<string | null>();
  useEffect(() => {
    const getUserId = async () => {
      const token = await AsyncStorage.getItem('userIdToken');
      setUserIdToken(token);
    };

    getUserId();
  });

  return userIdToken || '1';
};
