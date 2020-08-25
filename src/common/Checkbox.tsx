import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Colors, Iconography, Typography, Spacing } from '../styles/index';
import { CheckboxChecked, CheckboxUnchecked } from '../assets/index';

interface Props {
  isSelected: boolean;
  text: string;
  onPress: () => void;
}

export const Checkbox: FunctionComponent<Props> = ({
  isSelected,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.checkboxContainer}>
      <SvgXml
        xml={isSelected ? CheckboxChecked : CheckboxUnchecked}
        fill={Colors.primaryBlue}
        height={Iconography.small}
        width={Iconography.small}
        style={style.checkbox}
      />
      <Text style={style.checkboxText}>{text}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.medium,
  },
  checkbox: {
    marginRight: Spacing.small,
  },
  checkboxText: {
    flex: 1,
    ...Typography.mainContent,
  },
});
