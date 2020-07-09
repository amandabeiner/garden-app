import React, { FunctionComponent } from 'react';
import { Text, Button, View, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types';
import tailwind from 'tailwind-rn';
import cities from './cities.json';
import { City } from './types';

type WelcomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Welcome'
>;

type Props = { navigation: WelcomeScreenNavigationProp };
export const Welcome: FunctionComponent<Props> = (props) => {
  return (
    <ScrollView style={tailwind('h-full')}>
      <Text style={tailwind('text-3xl')}>Welcome</Text>
      <Text style={tailwind('text-base')}>Select a city to continue</Text>
      {cities.map((city: City) =>
        CityItem({ city, navigation: props.navigation }),
      )}
    </ScrollView>
  );
};

const CityItem: FunctionComponent<CityItemProps> = ({ city, navigation }) => {
  return (
    <View style={tailwind('border-t')} key={city.id}>
      <Button
        title={city.name}
        onPress={() => navigation.navigate('CityDetails', { city: city.name })}>
        <Text>{city.name}</Text>
      </Button>
    </View>
  );
};

type CityItemProps = {
  city: City;
  navigation: WelcomeScreenNavigationProp;
};
