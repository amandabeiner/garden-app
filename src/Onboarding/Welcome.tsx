import React, { FunctionComponent } from 'react';
import { SvgXml } from 'react-native-svg';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OnboardingScreens } from '../navigation/index';

import { Colors, Spacing, Buttons, Typography } from '../styles/index';
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
        <TouchableOpacity
          style={style.getStarted}
          onPress={() => navigation.navigate(OnboardingScreens.SelectCity)}>
          <Text style={style.getStartedText}>Get started</Text>
        </TouchableOpacity>
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
  getStarted: {
    ...Buttons.primary,
  },
  getStartedText: {
    ...Typography.buttonTextPrimary,
  },
});
