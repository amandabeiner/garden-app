import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Buttons, Typography } from '../styles/index';

interface Props {
  onPress: () => void;
  label: string;
}

export const Button: FunctionComponent<Props> = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: { ...Buttons.primary },
  label: { ...Typography.buttonTextPrimary },
});
