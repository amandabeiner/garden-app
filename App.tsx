import React, { FunctionComponent } from 'react';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Application } from './src/Application';
import { Home } from './src/Home';
import { Stacks } from './src/navigation/index';
import { OnboardingStack } from './src/Onboarding/index';
import { CityProvider } from './src/CityContext';
import { UserProvider } from './src/UserContext';

const Stack = createStackNavigator();

const SCREEN_OPTIONS = {
  headerShown: false,
};

const httpLink = createHttpLink({ uri: Config.GADGET_URL });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${Config.GADGET_AUTH_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <CityProvider>
          <UserProvider>
            <Stack.Navigator initialRouteName={Stacks.ApplicationStack}>
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
                name={Stacks.HomeStack}
                component={Home}
                options={{ ...SCREEN_OPTIONS }}
              />
            </Stack.Navigator>
          </UserProvider>
        </CityProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
