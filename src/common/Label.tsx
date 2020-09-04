import React, { FunctionComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Spacing, Colors } from '../styles/index';

interface Props {
  text: string;
  hasError?: boolean;
}

export const Label: FunctionComponent<Props> = ({ text, hasError = false }) => {
  return <Text style={[style.label, hasError && style.error]}>{text}</Text>;
};

const style = StyleSheet.create({
  label: {
    ...Typography.label,
    paddingLeft: Spacing.xxxSmall,
  },
  error: {
    color: Colors.primaryRed,
  },
});
