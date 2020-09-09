import React, { FunctionComponent, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useCity } from '../CityContext';
import { Checkbox, Button } from '../common/index';
import { Screens } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { Spacing } from '../styles/index';
import { useApplication } from './ApplicationContext';
import { toggleAgreeToTermsAccepted } from './actions';

export const TOS: FunctionComponent = () => {
  const [city] = useCity();
  const [state, dispatch] = useApplication();

  const navigation = useNavigation();
  const uri = `https://drive.google.com/viewerng/viewer?embedded=true&url=${city.tos}`;
  return (
    <SafeAreaView style={style.container}>
      <WebView source={{ uri }} style={style.tos} />
      <View style={style.footer}>
        <Checkbox
          text="I have read and agree to the terms of service"
          isSelected={state.agreedToTOS}
          onPress={() => {
            dispatch(toggleAgreeToTermsAccepted());
          }}
        />
        <Button
          label="Continue"
          onPress={() => navigation.navigate(Screens.Signature)}
          disabled={!state.agreedToTOS}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tos: {
    height: '100%',
    width: '100%',
  },
  footer: {
    margin: Spacing.large,
  },
});
