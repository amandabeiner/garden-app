import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Person } from './Person';
import { History } from './History';
import { TOS } from './TOS';
import { Signature } from './Signature';

interface Props {
  [key: string]: any;
}

const Stack = createStackNavigator<ApplicationStepList>();
export const Application: FunctionComponent<Props> = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Person" component={Person} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="TOS" component={TOS} />
      <Stack.Screen name="Signature" component={Signature} />
    </Stack.Navigator>
  );
};

export type ApplicationStepList = {
  Person: undefined;
  History: undefined;
  TOS: undefined;
  Signature: undefined;
};
