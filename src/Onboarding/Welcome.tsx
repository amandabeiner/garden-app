import React, { FunctionComponent } from 'react';
import { SvgXml } from 'react-native-svg';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OnboardingScreens, Screens } from '../navigation/index';
import { Button } from '../common/Button';

import { Colors, Spacing, Typography } from '../styles/index';
import { Plant } from '../assets/index';

export const Welcome: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topContainer}>
        <SvgXml
          xml={Plant}
          width={150}
          height={150}
          fill={Colors.primaryBlue}
          style={style.logo}
        />

        <Text style={style.appName}>App Name</Text>
      </View>
      <View style={style.footerContainer}>
        <Button
          onPress={() => navigation.navigate(OnboardingScreens.SelectCity)}
          label="Get started"
        />
        <View style={style.signIn}>
          <Button
            onPress={() => navigation.navigate(Screens.SignIn)}
            label="Sign in"
            variant="text"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: Spacing.large,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: Spacing.xxxHuge * 3,
  },
  appName: {
    ...Typography.header1,
    marginTop: Spacing.xxHuge,
    color: Colors.secondaryText,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Spacing.small,
    alignSelf: 'stretch',
  },
  signIn: {
    alignItems: 'center',
  },
});
