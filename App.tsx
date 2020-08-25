import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Application } from './src/Application';
import { Stacks } from './src/navigation/index';
import { OnboardingStack } from './src/Onboarding/index';
import { CityProvider } from './src/CityContext';

const Stack = createStackNavigator();

const SCREEN_OPTIONS = {
  headerShown: false,
};

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <CityProvider>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </CityProvider>
    </NavigationContainer>
  );
};

export default App;
