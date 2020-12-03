import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Person } from './Person';
import { History } from './History';
import { TOS } from './TOS';
import { Signature } from './Signature';
import { SignUp } from './SignUp';
import { Complete } from './Complete';
import { GardenPreferences } from './GardenPreferences';
import { ApplicationProvider } from './ApplicationContext';
import { ApplicationScreens, ApplicationScreen } from '../navigation/index';
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
          options={{ headerRight: () => HeaderRight(1, 5) }}
        />
        <Stack.Screen
          name={ApplicationScreens.History}
          component={History}
          options={{ headerRight: () => HeaderRight(2, 5) }}
        />
        <Stack.Screen
          name={ApplicationScreens.GardenPreferences}
          component={GardenPreferences}
          options={{ headerRight: () => HeaderRight(3, 5) }}
        />
        <Stack.Screen
          name={ApplicationScreens.TOS}
          component={TOS}
          options={{ headerRight: () => HeaderRight(4, 5) }}
        />
        <Stack.Screen
          name={ApplicationScreens.Signature}
          component={Signature}
          options={{ headerRight: () => HeaderRight(5, 5) }}
        />
        <Stack.Screen
          name={ApplicationScreens.SignUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ApplicationScreens.Complete}
          component={Complete}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ApplicationProvider>
  );
};

type ApplicationStepList = { [key in ApplicationScreen]: undefined };

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
