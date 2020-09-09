import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Buttons, Typography } from '../styles/index';

interface Props {
  onPress: () => void;
  label: string;
  disabled?: boolean;
}

export const Button: FunctionComponent<Props> = ({
  onPress,
  label,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[style.button, disabled && style.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: { ...Buttons.primary },
  label: { ...Typography.buttonTextPrimary },
  disabledButton: { ...Buttons.primaryDisabled },
});
