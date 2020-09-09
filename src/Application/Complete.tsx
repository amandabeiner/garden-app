import React, { FunctionComponent } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { Checkmark } from '../assets/index';
import { Colors, Spacing, Typography } from '../styles/index';
import { Button } from '../common/index';
import { Stacks } from '../navigation';

export const Complete: FunctionComponent = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topContainer}>
        <SvgXml
          xml={Checkmark}
          width={200}
          height={200}
          fill={Colors.primaryBlue}
          style={style.logo}
        />
        <Text style={style.header}>All Set!</Text>
        <Text style={style.bodyText}>
          Your application complete. We'll let you know when we have a plot for
          you.
        </Text>
      </View>
      <View style={style.footer}>
        <Button label="Go home" onPress={() => navigate(Stacks.HomeStack)} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    margin: Spacing.large,
    alignItems: 'center',
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
  },
  header: {
    ...Typography.header1,
  },
  bodyText: {
    paddingTop: Spacing.small,
    textAlign: 'center',
    ...Typography.mainContent,
  },
  logo: {
    marginTop: Spacing.xxxHuge * 3,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Spacing.small,
    alignSelf: 'stretch',
  },
});
