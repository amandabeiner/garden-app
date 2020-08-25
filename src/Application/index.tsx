import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Person } from './Person';
import { History } from './History';
import { TOS } from './TOS';
import { Signature } from './Signature';
import { ApplicationProvider } from './ApplicationContext';
import { ApplicationScreens } from '../navigation/index';
import { View, Text, StyleSheet } from 'react-native';
import { Spacing, Typography, Colors } from '../styles/index';

const Stack = createStackNavigator<ApplicationStepList>();
export const Application: FunctionComponent = () => {
  return (
    <ApplicationProvider>
      <Stack.Navigator
        initialRouteName={ApplicationScreens.Person}
        screenOptions={{ title: '', headerBackTitle: 'Back' }}>
        <Stack.Screen
          name={ApplicationScreens.Person}
          component={Person}
          options={{ headerRight: () => HeaderRight(1, 4) }}
        />
        <Stack.Screen
          name={ApplicationScreens.History}
          component={History}
          options={{ headerRight: () => HeaderRight(2, 4) }}
        />
        <Stack.Screen
          name={ApplicationScreens.TOS}
          component={TOS}
          options={{ headerRight: () => HeaderRight(3, 4) }}
        />
        <Stack.Screen
          name={ApplicationScreens.Signature}
          component={Signature}
          options={{ headerRight: () => HeaderRight(4, 4) }}
        />
      </Stack.Navigator>
    </ApplicationProvider>
  );
};

export type ApplicationStepList = {
  Person: undefined;
  History: undefined;
  TOS: undefined;
  Signature: undefined;
};

const HeaderRight = (currentStep: number, totalSteps: number) => {
  return (
    <View style={style.headerRight}>
      <Text style={style.headerRightText}>
        Step {currentStep} of {totalSteps}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  headerRight: {
    marginRight: Spacing.medium,
  },
  headerRightText: {
    ...Typography.base,
    color: Colors.mediumGray,
  },
});
