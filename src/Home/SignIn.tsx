import React, { FunctionComponent, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { useStatusBarEffect } from '../navigation/useStatusBarEffect';
import { Colors, Forms, Spacing, Typography } from '../styles/index';
import { Label, Button } from '../common';

export const SignIn: FunctionComponent = () => {
  useStatusBarEffect('dark-content', Colors.primaryBlue);
  const passwordInput = useRef<TextInput>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.signIn}>Welcome back</Text>
      <Label text="Email" />
      <TextInput
        style={style.input}
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        onSubmitEditing={() => passwordInput.current.focus()}
      />
      <Label text="Password" />
      <TextInput
        secureTextEntry
        textContentType="password"
        autoCompleteType="password"
        style={style.input}
        value={password}
        onChangeText={setPassword}
        ref={passwordInput}
      />
      <Button label="Sign in" onPress={() => {}} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  signIn: {
    ...Typography.header2,
    marginVertical: Spacing.small,
  },
  input: {
    ...Forms.textInputFormField,
    marginBottom: Spacing.small,
  },
});
