// Onboarding
export type OnboardingScreen = 'Welcome' | 'SelectCity' | 'CityDetails';

export const OnboardingScreens: {
  [key in OnboardingScreen]: OnboardingScreen;
} = {
  Welcome: 'Welcome',
  SelectCity: 'SelectCity',
  CityDetails: 'CityDetails',
};

// Application
export type ApplicationScreen =
  | 'History'
  | 'Person'
  | 'TOS'
  | 'Signature'
  | 'Complete';

export const ApplicationScreens: {
  [key in ApplicationScreen]: ApplicationScreen;
} = {
  History: 'History',
  Person: 'Person',
  TOS: 'TOS',
  Signature: 'Signature',
  Complete: 'Complete',
};

export type HomeScreen = 'Home';
export const HomeScreens: {
  [key in HomeScreen]: HomeScreen;
} = {
  Home: 'Home',
};

export type Screen = OnboardingScreen | ApplicationScreen | HomeScreen;
export const Screens: { [key in Screen]: Screen } = {
  ...OnboardingScreens,
  ...ApplicationScreens,
  ...HomeScreens,
};

export type Stack = 'ApplicationStack' | 'OnboardingStack' | 'HomeStack';
export const Stacks: { [key in Stack]: Stack } = {
  ApplicationStack: 'ApplicationStack',
  OnboardingStack: 'OnboardingStack',
  HomeStack: 'HomeStack',
};
