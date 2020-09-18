import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Close } from '../assets/index';
import { Colors, Iconography, Spacing } from '../styles/index';

interface Props {
  onPress: () => void;
}

export const CloseButton: FunctionComponent<Props> = ({ onPress }) => {
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
  headerRight: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    marginRight: Spacing.small,
  },
});
