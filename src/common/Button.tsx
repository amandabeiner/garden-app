import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Buttons, Typography } from '../styles/index';

type Variant = 'primary' | 'text';

interface Props {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  variant?: Variant;
}

export const Button: FunctionComponent<Props> = ({
  onPress,
  label,
  disabled,
  variant = 'primary',
}) => {
  const style = (function (v) {
    switch (v) {
      case 'text':
        return styleOptions.text;
      case 'primary':
        return styleOptions.primary;
    }
  })(variant);

  return (
    <TouchableOpacity
      style={[style.button, disabled && style.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const primaryStyles = StyleSheet.create({
  button: { ...Buttons.primary },
  label: { ...Typography.buttonTextPrimary },
  disabledButton: { ...Buttons.primaryDisabled },
});

const textStyles = StyleSheet.create({
  button: { ...Buttons.text },
  label: { ...Typography.link },
  disabledButton: { ...Buttons.text },
});
const styleOptions = {
  primary: primaryStyles,
  text: textStyles,
};
