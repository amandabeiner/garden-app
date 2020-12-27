import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Stacks, ApplicationScreens } from '../navigation/index';
import { Typography, Spacing, Buttons } from '../styles/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCity } from '../CityContext';

export const CityDetails: FunctionComponent = () => {
  const { navigate } = useNavigation();
  const { city } = useCity();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.detailsHeader}>Welcome to {city.name}</Text>
      <Text style={style.description}>{city.description}</Text>
      <View style={style.footerContainer}>
        <TouchableOpacity
          style={style.applyButton}
          onPress={() =>
            navigate(Stacks.ApplicationStack, {
              screen: ApplicationScreens.Person,
            })
          }>
          <Text style={style.applyText}>Apply to {city.name}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  detailsHeader: {
    ...Typography.header3,
    marginVertical: Spacing.medium,
  },
  description: {
    ...Typography.mainContent,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  applyButton: {
    ...Buttons.primary,
  },
  applyText: {
    ...Typography.buttonTextPrimary,
  },
});
