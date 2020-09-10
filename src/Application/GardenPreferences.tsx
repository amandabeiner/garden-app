import React, { FunctionComponent, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCity } from '../CityContext';
import { Checkbox, Button } from '../common';
import { Spacing, Typography } from '../styles/index';
import { useApplication } from './ApplicationContext';
import { saveGardenPreferences } from './actions';
import { Screens } from '../navigation';

export const GardenPreferences: FunctionComponent = () => {
  const navigation = useNavigation();
  const [gardenPreferences, setGardenPreferences] = useState<string[]>([]);
  const [, dispatch] = useApplication();
  const [city] = useCity();

  const toggleGarden = (garden: string) => {
    if (gardenPreferences.includes(garden)) {
      return setGardenPreferences(
        gardenPreferences.filter((g) => g !== garden),
      );
    } else {
      return setGardenPreferences([...gardenPreferences, garden]);
    }
  };

  const saveAndProceed = () => {
    dispatch(saveGardenPreferences({ gardenPreferences }));
    navigation.navigate(Screens.TOS);
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.checkboxContainer}>
        <Text style={style.subheader}>
          Please select the garden locations that you would like to apply for.
        </Text>
        <View>
          {city.gardens.map((garden) => {
            return (
              <Checkbox
                isSelected={gardenPreferences.includes(garden.name)}
                text={garden.name}
                key={garden.name}
                onPress={() => {
                  toggleGarden(garden.name);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={style.footer}>
        <Button
          label="Contine"
          onPress={saveAndProceed}
          disabled={gardenPreferences.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  subheader: {
    ...Typography.header5,
    paddingBottom: Spacing.medium,
  },
  checkboxContainer: {},
  footer: {
    paddingVertical: Spacing.large,
  },
});
