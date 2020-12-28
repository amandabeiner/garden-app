import React, { FunctionComponent, useState, useRef } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';

import { Label, Button } from '../common';
import { Spacing, Forms, Typography } from '../styles/index';
import { useApplication } from './ApplicationContext';
import {
  createUserVariables as CreateUserVariables,
  createUser as CreateUserData,
} from './__generated__/createUser';
import {
  createApplication as CreateApplicationType,
  createApplicationVariables as CreateApplicationVariables,
} from './__generated__/createApplication';
import {
  logInUserMutation as LogInUserType,
  logInUserMutationVariables as LogInUserVariables,
} from './__generated__/logInUserMutation';
import { Screens } from '../navigation';

export const SignUp: FunctionComponent = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log({ confirmPassword });
  const [{ personalInfo, backgroundInfo }] = useApplication();

  const passwordInput = useRef<TextInput>();
  const confirmPasswordInput = useRef<TextInput>();

  const [createUser, { loading }] = useMutation<
    CreateUserData,
    CreateUserVariables
  >(createUserMutation);

  const [createApplication] = useMutation<
    CreateApplicationType,
    CreateApplicationVariables
  >(createApplicationMutation);

  const [logInUser] = useMutation<LogInUserType, LogInUserVariables>(
    logInUserMutation,
  );

  const submitRegistration = async () => {
    try {
      const user = { ...personalInfo, password };
      const returnedUser = await createUser({ variables: { user } });
      const {
        gardenPreferences,
        agreedToTOS,
        signedAgreement,
        ...applicationVariables
      } = backgroundInfo;

      await createApplication({
        variables: {
          application: {
            ...applicationVariables,
            user: { link: returnedUser.data.createUser.user.id },
          },
        },
      });

      await logInUser({
        variables: { session: { email: personalInfo.email, password } },
      });
      navigation.navigate(Screens.Complete);
    } catch (e) {
      console.log(e);
    }
  };

  const disableSubmit =
    password !== confirmPassword ||
    password === '' ||
    confirmPassword === '' ||
    loading;

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.signUp}>Create an account</Text>
      <Label text="Password" />
      <TextInput
        secureTextEntry
        textContentType="newPassword"
        autoCompleteType="off"
        style={style.input}
        value={password}
        onChangeText={setPassword}
        ref={passwordInput}
        onSubmitEditing={() => confirmPasswordInput.current.focus()}
      />
      <Label text="Confirm password" />
      <TextInput
        secureTextEntry
        textContentType="newPassword"
        autoCompleteType="off"
        style={style.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        ref={confirmPasswordInput}
      />
      <Button
        label="Sign up"
        disabled={disableSubmit}
        onPress={submitRegistration}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  signUp: {
    ...Typography.header2,
    marginVertical: Spacing.small,
  },
  input: {
    ...Forms.textInputFormField,
    marginBottom: Spacing.small,
  },
});

const createUserMutation = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      user {
        id
        firstName
        lastName
        email
        street1
        street2
        zip
        phone
      }
    }
  }
`;

const createApplicationMutation = gql`
  mutation createApplication($application: CreateApplicationInput) {
    createApplication(application: $application) {
      application {
        id
      }
    }
  }
`;

const logInUserMutation = gql`
  mutation logInUserMutation($session: LogInViaEmailSessionInput!) {
    currentSession {
      logInViaEmail(session: $session) {
        session {
          id
        }
        success
      }
    }
  }
`;
