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
  | 'GardenPreferences'
  | 'TOS'
  | 'Signature'
  | 'Complete'
  | 'SignUp';

export const ApplicationScreens: {
  [key in ApplicationScreen]: ApplicationScreen;
} = {
  History: 'History',
  Person: 'Person',
  GardenPreferences: 'GardenPreferences',
  TOS: 'TOS',
  Signature: 'Signature',
  Complete: 'Complete',
  SignUp: 'SignUp',
};

export type HomeScreen = 'SignIn' | 'Dashboard' | 'Profile';
export const HomeScreens: {
  [key in HomeScreen]: HomeScreen;
} = {
  Dashboard: 'Dashboard',
  Profile: 'Profile',
  SignIn: 'SignIn',
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
