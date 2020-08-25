// Onboarding
export type OnboardingScreen = 'Welcome' | 'SelectCity' | 'CityDetails';

export type OnboardingStackParamList = {
  SelectCity: undefined;
  CityDetails: { city: string };
};

export const OnboardingScreens: {
  [key in OnboardingScreen]: OnboardingScreen;
} = {
  Welcome: 'Welcome',
  SelectCity: 'SelectCity',
  CityDetails: 'CityDetails',
};

// Application
export type ApplicationScreen = 'History' | 'Person' | 'TOS' | 'Signature';
export const ApplicationScreens: {
  [key in ApplicationScreen]: ApplicationScreen;
} = {
  History: 'History',
  Person: 'Person',
  TOS: 'TOS',
  Signature: 'Signature',
};

export type ApplicationStackParamList = {
  History: undefined;
  Person: undefined;
  Signature: undefined;
};

export type Screen = OnboardingScreen | ApplicationScreen;
export const Screens: { [key in Screen]: Screen } = {
  ...OnboardingScreens,
  ...ApplicationScreens,
};

export type Stack = 'ApplicationStack' | 'OnboardingStack';
export const Stacks: { [key in Stack]: Stack } = {
  ApplicationStack: 'ApplicationStack',
  OnboardingStack: 'OnboardingStack',
};
