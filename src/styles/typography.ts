import { TextStyle } from 'react-native';
import * as Colors from './colors';

// Font sizes
export const xxxSmall = 11;
export const xxSmall = 12;
export const xSmall = 13;
export const small = 15;
export const medium = 17;
export const large = 19;
export const xLarge = 22;
export const xxLarge = 28;
export const xxxLarge = 52;

// Line Heights
export const xxSmallLineHeight = 14;
export const xSmallLineHeight = 16;
export const smallLineHeight = 20;
export const mediumLineHeight = 24;
export const largeLineHeight = 28;
export const xLargeLineHeight = 32;
export const xxLargeLineHeight = 50;

// Letter Spacing
export const mediumLetterSpacing = 0.5;

// Font Weights
export const heavyWeight = '500';
export const xHeavyWeight = '700';

export const extraBold: TextStyle = {
  fontWeight: xHeavyWeight,
};

export const bold: TextStyle = {
  fontWeight: heavyWeight,
};

export const base: TextStyle = {};

// Standard Font Types

export const xSmallFont: TextStyle = {
  ...base,
  lineHeight: xxSmallLineHeight,
  fontSize: xxxSmall,
};

export const smallFont: TextStyle = {
  ...base,
  lineHeight: smallLineHeight,
  fontSize: small,
};

export const mediumFont: TextStyle = {
  ...base,
  lineHeight: mediumLineHeight,
  fontSize: medium,
};

export const largeFont: TextStyle = {
  ...base,
  lineHeight: largeLineHeight,
  fontSize: large,
};

export const xLargeFont: TextStyle = {
  ...base,
  lineHeight: xLargeLineHeight,
  fontSize: xLarge,
};

export const xxLargeFont: TextStyle = {
  ...base,
  lineHeight: xLargeLineHeight,
  fontSize: xxLarge,
};

export const xxxLargeFont: TextStyle = {
  ...base,
  lineHeight: xxLargeLineHeight,
  fontSize: xxxLarge,
};

// Headers

export const header1: TextStyle = {
  ...xxxLargeFont,
  ...bold,
  color: Colors.primaryHeaderText,
};

export const header2: TextStyle = {
  ...xxLargeFont,
  ...bold,
  color: Colors.primaryHeaderText,
};

export const header3: TextStyle = {
  ...xLargeFont,
  ...bold,
  color: Colors.primaryHeaderText,
};

export const header4: TextStyle = {
  ...mediumFont,
  ...extraBold,
  color: Colors.primaryHeaderText,
};

export const header5: TextStyle = {
  ...mediumFont,
  ...bold,
  color: Colors.primaryHeaderText,
};

export const header6: TextStyle = {
  ...smallFont,
  ...bold,
  color: Colors.primaryHeaderText,
};

export const title: TextStyle = {
  ...largeFont,
  fontWeight: xHeavyWeight,
  color: Colors.primaryText,
};

export const footer: TextStyle = {
  ...mediumFont,
  ...bold,
  color: Colors.black,
};

// Content
export const mainContent: TextStyle = {
  ...mediumFont,
  color: Colors.primaryText,
};

export const secondaryContent: TextStyle = {
  ...mediumFont,
  ...base,
  color: Colors.secondaryText,
  lineHeight: mediumLineHeight,
};

export const tertiaryContent: TextStyle = {
  ...smallFont,
  color: Colors.tertiaryText,
  lineHeight: smallLineHeight,
};

export const label: TextStyle = {
  ...smallFont,
  color: Colors.primaryText,
};

export const error: TextStyle = {
  color: Colors.errorText,
  fontSize: xSmall,
  fontWeight: heavyWeight,
};

export const primaryTextInput: TextStyle = {
  ...extraBold,
  fontSize: xLarge,
  lineHeight: xxLargeLineHeight,
  textAlign: 'center',
  color: Colors.primaryText,
};

export const secondaryTextInput: TextStyle = {
  fontSize: medium,
  lineHeight: large,
  color: Colors.primaryText,
};

// Navigation
export const navHeader: TextStyle = {
  ...largeFont,
  ...bold,
  color: Colors.white,
  textTransform: 'uppercase',
};

// Tappables
export const tappableListItem: TextStyle = {
  ...mediumFont,
  color: Colors.primaryBlue,
};

// Buttons
export const buttonText: TextStyle = {
  fontSize: large,
  fontWeight: heavyWeight,
};

export const buttonTextPrimary: TextStyle = {
  ...buttonText,
  color: Colors.white,
};

export const buttonTextSecondary: TextStyle = {
  ...buttonText,
  color: Colors.secondaryText,
};
