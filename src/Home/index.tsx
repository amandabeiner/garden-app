import React, { FunctionComponent } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { gql, useQuery } from '@apollo/client';

import { userQuery as UserQueryData } from './__generated__/userQuery';
import { HomeScreens } from '../navigation/index';
import { Dashboard } from './Dashboard';
import { Colors, Iconography, Spacing } from '../styles/index';
import { Profile } from '../assets/index';
import { Settings, HomeSettingsFragment } from './Settings';
import { useUser } from '../UserContext';

const Stack = createStackNavigator();
export const Home: FunctionComponent = () => {
  const navigation = useNavigation();
  const { updateCurrentUser } = useUser();

  const onPressProfile = () => {
    navigation.navigate(HomeScreens.Profile);
  };

  useQuery(userQuery, {
    onCompleted: (queryData: UserQueryData) =>
      updateCurrentUser(queryData.user),
  });

  return (
    <Stack.Navigator initialRouteName={HomeScreens.Dashboard}>
      <Stack.Screen
        name={HomeScreens.Dashboard}
        component={Dashboard}
        options={{
          headerStyle: { backgroundColor: Colors.primaryBlue },
          title: '',
          headerRight: () => ProfileButton({ onPress: onPressProfile }),
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name={HomeScreens.Profile}
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const userQuery = gql`
  query userQuery {
    user(id: "1") {
      ...HomeSettingsFragment
    }
  }

  ${HomeSettingsFragment}
`;

type ProfileButtonProps = {
  onPress: () => void;
};

const ProfileButton: FunctionComponent<ProfileButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.profileContainer}>
      <SvgXml
        xml={Profile}
        fill={Colors.white}
        width={Iconography.small}
        height={Iconography.small}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  profileContainer: {
    marginRight: Spacing.small,
  },
});
