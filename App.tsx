import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { StackParamList } from './src/types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './src/Welcome';
import { CityDetails } from './src/CityDetails';
import { Application } from './src/Application';

const Stack = createStackNavigator<StackParamList>();

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CityDetails" component={CityDetails} />
        <Stack.Screen name="Application" component={Application} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
