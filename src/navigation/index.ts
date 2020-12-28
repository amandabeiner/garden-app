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
  | 'SignUp'
  | 'Complete';

export const ApplicationScreens: {
  [key in ApplicationScreen]: ApplicationScreen;
} = {
  History: 'History',
  Person: 'Person',
  GardenPreferences: 'GardenPreferences',
  TOS: 'TOS',
  Signature: 'Signature',
  SignUp: 'SignUp',
  Complete: 'Complete',
};

export type HomeScreen = 'Dashboard' | 'Profile';
export const HomeScreens: {
  [key in HomeScreen]: HomeScreen;
} = {
  Dashboard: 'Dashboard',
  Profile: 'Profile',
};

export type AuthScreen = 'SignIn';
export const AuthScreens: {
  [key in AuthScreen]: AuthScreen;
} = {
  SignIn: 'SignIn',
};

export type Screen =
  | OnboardingScreen
  | ApplicationScreen
  | HomeScreen
  | AuthScreen;
export const Screens: { [key in Screen]: Screen } = {
  ...OnboardingScreens,
  ...ApplicationScreens,
  ...HomeScreens,
  ...AuthScreens,
};

export type Stack =
  | 'ApplicationStack'
  | 'OnboardingStack'
  | 'HomeStack'
  | 'AuthStack';

export const Stacks: { [key in Stack]: Stack } = {
  ApplicationStack: 'ApplicationStack',
  OnboardingStack: 'OnboardingStack',
  HomeStack: 'HomeStack',
  AuthStack: 'AuthStack',
};
