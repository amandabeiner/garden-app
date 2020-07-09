import React, { FunctionComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApplicationStepList } from '.';

type NavigationProps = StackNavigationProp<ApplicationStepList, 'Person'>;
type Props = { navigation: NavigationProps };

export const History: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Select all that apply</Text>
      <Button
        title="I do not have any gardening space associated with my residence"
        onPress={() => {}}
      />
      <Button
        title="I have participated in a community garden in Cambridge"
        onPress={() => {}}
      />
      <Button
        title="I have participated in a community garden somewher eother than Cambridge"
        onPress={() => {}}
      />
      <Button
        title="I have a disability and am interested in having an accessible garden plot"
        onPress={() => {}}
      />
      <Button
        title="I am interested in being the garden coordinator"
        onPress={() => {}}
      />
      <Button title="Next" onPress={() => navigation.navigate('TOS')} />
    </View>
  );
};
