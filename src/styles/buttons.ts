import { ViewStyle } from 'react-native';

import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Spacing from './spacing';

const base: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: Outlines.baseBorderRadius,
  alignSelf: 'stretch',
};

// Size
const large: ViewStyle = {
  paddingTop: Spacing.large,
  paddingBottom: Spacing.large + 1,
};

const small: ViewStyle = {
  paddingTop: Spacing.small,
  paddingBottom: Spacing.small + 1,
};

// Color
const primaryBlue: ViewStyle = {
  backgroundColor: Colors.primaryBlue,
  borderColor: Colors.primaryBlue,
};

const white: ViewStyle = {
  backgroundColor: Colors.white,
  borderColor: Colors.white,
};

const disabled: ViewStyle = {
  backgroundColor: Colors.mediumGray,
  borderColor: Colors.mediumGray,
};

const transparent: ViewStyle = {
  backgroundColor: 'transparent',
};

// Combinations
export const primary: ViewStyle = {
  ...base,
  ...large,
  ...primaryBlue,
};

export const primaryDisabled: ViewStyle = {
  ...base,
  ...large,
  ...disabled,
};

export const primaryInverted: ViewStyle = {
  ...base,
  ...large,
  ...white,
};

export const secondary: ViewStyle = {
  ...base,
  ...large,
  ...transparent,
};

export const text: ViewStyle = {
  ...small,
  backgroundColor: 'rgba(0, 0, 0, 0)',
};

export const textDisabled: ViewStyle = {
  ...text,
};
