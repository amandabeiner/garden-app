import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen, OnboardingScreens } from '../navigation/index';
import { Welcome } from './Welcome';
import { CityDetails } from './CityDetails';
import { SelectCity } from './SelectCity';

type OnboardingStackList = { [key in OnboardingScreen]: undefined };
const Stack = createStackNavigator<OnboardingStackList>();

export const OnboardingStack: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={OnboardingScreens.Welcome}>
      <Stack.Screen name={OnboardingScreens.Welcome} component={Welcome} />
      <Stack.Screen
        name={OnboardingScreens.SelectCity}
        component={SelectCity}
      />
      <Stack.Screen
        name={OnboardingScreens.CityDetails}
        component={CityDetails}
      />
    </Stack.Navigator>
  );
};
