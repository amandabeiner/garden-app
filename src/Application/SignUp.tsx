import React, { FunctionComponent, useState, useRef } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';

import { Label, Button } from '../common';
import { Spacing, Forms, Typography } from '../styles/index';
import { useUser } from '../UserContext';
import { useApplication } from './ApplicationContext';
import {
  createUserVariables as CreateUserVariables,
  createUser as CreateUserData,
} from './__generated__/createUser';
import { Screens } from '../navigation';

export const SignUp: FunctionComponent = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setCurrentUser } = useUser();
  const [{ personalInfo }] = useApplication();

  const passwordInput = useRef<TextInput>();
  const confirmPasswordInput = useRef<TextInput>();

  const [createUser, { loading }] = useMutation<
    CreateUserData,
    CreateUserVariables
  >(createUserMutation, {
    onCompleted: ({ createUser: { user } }) => {
      setCurrentUser(user);
    },
  });

  const submitForm = async () => {
    try {
      const user = { ...personalInfo, password };
      await createUser({ variables: { user } });
      debugger;
      navigation.navigate(Screens.Complete);
    } catch (e) {
      console.error(e);
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
        autoCompleteType="password"
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
        autoCompleteType="password"
        style={style.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        ref={confirmPasswordInput}
      />
      <Button label="Sign up" disabled={disableSubmit} onPress={submitForm} />
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
