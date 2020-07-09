import React, { FunctionComponent } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cities from './cities';
import { City, StackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

type CityDetailsRouteProp = RouteProp<StackParamList, 'CityDetails'>;
type CityDetailsNavigationProp = StackNavigationProp<
  StackParamList,
  'CityDetails'
>;
interface Props {
  route: CityDetailsRouteProp;
  navigation: CityDetailsNavigationProp;
}

export const CityDetails: FunctionComponent<Props> = ({
  route,
  navigation,
}) => {
  const city = cities.find((c: City) => c.name === route.params.city);
  return (
    <ScrollView>
      <Text>Welcome to {city.name}</Text>
      <Text>{city.description}</Text>
      <Button
        title={`Apply to ${city.name}`}
        onPress={() => navigation.navigate('Application')}
      />
    </ScrollView>
  );
};
