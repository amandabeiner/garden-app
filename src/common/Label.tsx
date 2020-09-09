import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { Typography, Spacing, Colors } from '../styles/index';

interface Props {
  text: string;
  hasError?: boolean;
  viewStyle?: ViewStyle;
}

export const Label: FunctionComponent<Props> = ({
  text,
  hasError = false,
  viewStyle = {},
}) => {
  return (
    <Text style={[viewStyle, style.label, hasError && style.error]}>
      {text}
    </Text>
  );
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
