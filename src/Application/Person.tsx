import React, { FunctionComponent, useState } from 'react';
import { Button, Text, TextInput, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApplicationStepList } from '.';

type NavigationProps = StackNavigationProp<ApplicationStepList, 'Person'>;
type Props = { navigation: NavigationProps };

export const Person: FunctionComponent<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <ScrollView>
      <Text>Your name</Text>
      <TextInput
        value={name}
        onChangeText={(t) => setName(t)}
        style={tailwind('border border-gray-600')}
      />
      <Text>Address 1</Text>
      <TextInput
        value={address1}
        onChangeText={(t) => setAddress1(t)}
        style={tailwind('border border-gray-600')}
      />
      <Text>Address 2</Text>
      <TextInput
        value={address2}
        onChangeText={(t) => setAddress2(t)}
        style={tailwind('border border-gray-600')}
      />
      <TextInput value="Cambridge" editable={false} />
      <TextInput value="MA" editable={false} />
      <Text>Zip</Text>
      <TextInput
        value={zip}
        onChangeText={(t) => setZip(t)}
        style={tailwind('border border-gray-600')}
        keyboardType="numeric"
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(t) => setEmail(t)}
        style={tailwind('border border-gray-600')}
      />
      <Text>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={(t) => setPhone(t)}
        style={tailwind('border border-gray-600')}
      />
      <Button title="Next" onPress={() => navigation.navigate('History')} />
    </ScrollView>
  );
};
