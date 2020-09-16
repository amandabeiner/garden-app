import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Close } from '../assets';
import { Colors, Iconography, Spacing } from '../styles/index';
import { HomeScreens } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { useStatusBarEffect } from '../navigation/useStatusBarEffect';

export const Settings: FunctionComponent = () => {
  useStatusBarEffect('dark-content', Colors.white);
  const navigation = useNavigation();
  const onPressClose = () => {
    navigation.navigate(HomeScreens.Dashboard);
  };

  return (
    <SafeAreaView style={style.container}>
      <CloseButton onPress={onPressClose} />
      <Text>Hello World from profile</Text>
    </SafeAreaView>
  );
};

type CloseButtonProps = {
  onPress: () => void;
};
const CloseButton: FunctionComponent<CloseButtonProps> = ({ onPress }) => {
  return (
    <View style={style.headerRight}>
      <TouchableOpacity onPress={onPress}>
        <SvgXml
          xml={Close}
          fill={Colors.primaryBlue}
          width={Iconography.small}
          height={Iconography.small}
        />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    marginRight: Spacing.small,
  },
});
