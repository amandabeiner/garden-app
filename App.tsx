import React, { FunctionComponent } from 'react';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { CityProvider } from './src/CityContext';
import { UserProvider } from './src/UserContext';
import { Routes } from './Routes';

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
            <Routes />
          </UserProvider>
        </CityProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
