import React, { FunctionComponent, useState, useRef } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import { Label, Button } from '../common';
import { Spacing, Forms, Typography } from '../styles/index';
import { useUser } from '../UserContext';
import { useApplication } from './ApplicationContext';

export const SignUp: FunctionComponent = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { createUser } = useUser();
  const [{ personalInfo }] = useApplication();

  const passwordInput = useRef<TextInput>();
  const confirmPasswordInput = useRef<TextInput>();

  const disableSubmit =
    password !== confirmPassword || password === '' || confirmPassword === '';

  const submitForm = () => {
    const user = { ...personalInfo, password };
    console.log({ user });
    createUser({ variables: user });
  };

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
