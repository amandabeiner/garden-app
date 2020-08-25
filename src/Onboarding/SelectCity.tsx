import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { City } from '../types';
import { Spacing, Typography, Outlines, Colors } from '../styles/index';

import cities from '../cities.json';
import { OnboardingScreens } from '../navigation';
import { useCity } from '../CityContext';

export const SelectCity: FunctionComponent = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.header}>Select a city to continue</Text>
        <ScrollView style={style.citiesSelector}>
          {cities.map((city: City) => (
            <CityItem key={city.name} city={city} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const CityItem: FunctionComponent<{ city: City }> = ({ city }) => {
  const [, setCity] = useCity();
  const navigation = useNavigation();

  const selectCity = (city: City) => {
    setCity(city);
    navigation.navigate(OnboardingScreens.CityDetails);
  };

  return (
    <TouchableHighlight
      onPress={() => selectCity(city)}
      style={style.tappableTarget}
      underlayColor={Colors.tertiaryBlue}>
      <Text style={style.tappableTargetText}>{city.name}</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    margin: Spacing.large,
    alignSelf: 'stretch',
  },
  header: {
    ...Typography.header3,
    marginTop: Spacing.large,
  },
  citiesSelector: {
    marginTop: Spacing.large,
  },
  tappableTarget: {
    borderWidth: 1,
    borderRadius: Outlines.baseBorderRadius * 4,
    borderColor: Colors.primaryBlue,
    padding: Spacing.xSmall,
    marginBottom: Spacing.medium,
    alignItems: 'center',
  },
  tappableTargetText: {
    color: Colors.primaryBlue,
  },
});
