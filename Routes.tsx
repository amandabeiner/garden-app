import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Application } from './src/Application';
import { Home } from './src/Home';
import { Stacks, Screens } from './src/navigation/index';
import { OnboardingStack } from './src/Onboarding/index';
import { useUser } from './src/UserContext';
import { SignIn } from './src/Home/SignIn';
import { SignUp } from './src/Application/SignUp';

const Stack = createStackNavigator();
const SCREEN_OPTIONS = {
  headerShown: false,
};

export const Routes: FunctionComponent = () => {
  const { userIdToken } = useUser();

  return (
    <>
      {userIdToken ? (
        <Stack.Navigator initialRouteName={Screens.Dashboard}>
          <Stack.Screen
            name={Stacks.HomeStack}
            component={Home}
            options={{ ...SCREEN_OPTIONS }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={Screens.Welcome}>
          <Stack.Screen
            name={Stacks.OnboardingStack}
            component={OnboardingStack}
            options={{ ...SCREEN_OPTIONS }}
          />
          <Stack.Screen
            name={Stacks.ApplicationStack}
            component={Application}
            options={{ ...SCREEN_OPTIONS }}
          />
          <Stack.Screen
            name={Screens.SignIn}
            component={SignIn}
            options={{ ...SCREEN_OPTIONS }}
          />
          <Stack.Screen
            name={Screens.SignUp}
            component={SignUp}
            options={{ ...SCREEN_OPTIONS }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};
