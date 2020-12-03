import React, { FunctionComponent, useRef } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { gql } from '@apollo/client';

import { HomeScreens } from '../navigation';
import { useStatusBarEffect } from '../navigation/useStatusBarEffect';
import { CloseButton, Label, Button } from '../common/index';
import { Typography, Spacing, Forms, Colors } from '../styles/index';

import { UserFields, schema, types } from '../user/index';

import { fieldHasError } from '../utils';
import { useUser } from '../UserContext';
import { CurrentUser } from '../__generated__/CurrentUser';

export const Settings: FunctionComponent = () => {
  useStatusBarEffect('dark-content', Colors.white);
  const navigation = useNavigation();
  const secondInput = useRef<TextInput>();
  const thirdInput = useRef<TextInput>();
  const fourthInput = useRef<TextInput>();
  const fifthInput = useRef<TextInput>();
  const sixthInput = useRef<TextInput>();
  const { currentUser } = useUser();
  console.log({ currentUser });

  const updateUser = (values: Partial<CurrentUser>) => {
    // updateCurrentUser(values);
    navigation.navigate(HomeScreens.Dashboard);
  };

  const onPressClose = () => {
    navigation.navigate(HomeScreens.Dashboard);
  };

  const {
    FIRST_NAME,
    LAST_NAME,
    ADDRESS_1,
    ADDRESS_2,
    ZIP,
    PHONE,
    EMAIL,
  } = UserFields;
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={style.content}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <CloseButton onPress={onPressClose} />
        <Text style={style.header}>Your Information</Text>
        <ScrollView>
          <Formik
            initialValues={currentUser}
            onSubmit={updateUser}
            validateOnBlur
            validationSchema={schema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              dirty,
            }) => {
              const showError = (name: keyof types.User): boolean => {
                return fieldHasError<types.User>(name, errors, touched);
              };
              return (
                <>
                  <View style={style.inputGroup}>
                    <View style={style.name}>
                      <Label
                        text="First name"
                        hasError={showError(FIRST_NAME)}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(FIRST_NAME) && style.inputError,
                        ]}
                        value={values[FIRST_NAME]}
                        returnKeyType="next"
                        onChangeText={handleChange(FIRST_NAME)}
                        onBlur={handleBlur(FIRST_NAME)}
                        onSubmitEditing={() => secondInput.current.focus()}
                      />
                      {showError(FIRST_NAME) && (
                        <Text style={style.errorMessage}>
                          {errors[FIRST_NAME]}
                        </Text>
                      )}
                    </View>
                    <View style={style.name}>
                      <Label
                        text="Last name"
                        hasError={showError(FIRST_NAME)}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(LAST_NAME) && style.inputError,
                        ]}
                        value={values[LAST_NAME]}
                        returnKeyType="next"
                        onChangeText={handleChange(LAST_NAME)}
                        onBlur={handleBlur(LAST_NAME)}
                        onSubmitEditing={() => secondInput.current.focus()}
                      />
                      {showError(LAST_NAME) && (
                        <Text style={style.errorMessage}>
                          {errors[LAST_NAME]}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={style.inputGroup}>
                    <View style={style.address1}>
                      <Label text="Street" hasError={showError(ADDRESS_1)} />
                      <TextInput
                        value={values[ADDRESS_1]}
                        returnKeyType="next"
                        onChangeText={handleChange(ADDRESS_1)}
                        onBlur={handleBlur(ADDRESS_1)}
                        style={[
                          style.input,
                          showError(ADDRESS_1) && style.inputError,
                        ]}
                        ref={secondInput}
                        onSubmitEditing={() => thirdInput.current.focus()}
                      />
                      {showError(ADDRESS_1) && (
                        <Text style={style.errorMessage}>
                          {errors[ADDRESS_1]}
                        </Text>
                      )}
                    </View>
                    <View>
                      <Label
                        text="Apt / Suite / Floor"
                        hasError={showError(ADDRESS_2)}
                      />
                      <TextInput
                        value={values[ADDRESS_2]}
                        onChangeText={handleChange(ADDRESS_2)}
                        onBlur={handleBlur(ADDRESS_2)}
                        returnKeyType="next"
                        style={[
                          style.input,
                          showError(ADDRESS_2) && style.inputError,
                        ]}
                        ref={thirdInput}
                        onSubmitEditing={() => fourthInput.current.focus()}
                      />
                    </View>
                  </View>
                  <View style={style.inputGroup}>
                    <View style={style.inputGroupElement}>
                      <Label text="City" />
                      <TextInput
                        value="Cambridge"
                        editable={false}
                        style={style.disabledInput}
                      />
                    </View>
                    <View style={style.inputGroupElement}>
                      <Label text="State" />
                      <TextInput
                        value="MA"
                        editable={false}
                        style={style.disabledInput}
                      />
                    </View>
                    <View style={style.inputGroupElement}>
                      <Label text="Zip" hasError={showError(ZIP)} />
                      <TextInput
                        value={values[ZIP]}
                        onChangeText={handleChange(ZIP)}
                        onBlur={handleBlur(ZIP)}
                        style={[
                          style.input,
                          showError(ZIP) && style.inputError,
                        ]}
                        keyboardType="numeric"
                        returnKeyType="next"
                        ref={fourthInput}
                        onSubmitEditing={() => fifthInput.current.focus()}
                      />
                      {showError(ZIP) && (
                        <Text style={style.errorMessage}>{errors[ZIP]}</Text>
                      )}
                    </View>
                  </View>
                  <View style={style.inputWrapper}>
                    <Label text="Email" hasError={showError(EMAIL)} />
                    <TextInput
                      value={values[EMAIL]}
                      onChangeText={handleChange(EMAIL)}
                      onBlur={handleBlur(EMAIL)}
                      style={[
                        style.input,
                        showError(EMAIL) && style.inputError,
                      ]}
                      returnKeyType="next"
                      ref={fifthInput}
                      onSubmitEditing={() => sixthInput.current.focus()}
                    />
                    {showError(EMAIL) && (
                      <Text style={style.errorMessage}>{errors[EMAIL]}</Text>
                    )}
                  </View>
                  <Label text="Phone" hasError={showError(PHONE)} />
                  <TextInput
                    value={values[PHONE]}
                    onChangeText={handleChange(PHONE)}
                    onBlur={handleBlur(PHONE)}
                    style={[style.input, showError(PHONE) && style.inputError]}
                    ref={sixthInput}
                  />
                  {showError(PHONE) && (
                    <Text style={style.errorMessage}>{errors[PHONE]}</Text>
                  )}
                  <View style={style.footer}>
                    <Button
                      label="Save"
                      onPress={handleSubmit}
                      disabled={!isValid || !dirty}
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const HomeSettingsFragment = gql`
  fragment HomeSettingsFragment on User {
    id
    firstName
    lastName
    street1
    street2
    zip
    email
    phone
  }
`;

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  content: {
    flex: 1,
  },
  header: {
    ...Typography.header3,
    marginBottom: Spacing.xSmall,
  },
  input: {
    ...Forms.textInputFormField,
  },
  inputError: {
    borderColor: Colors.primaryRed,
  },
  inputWrapper: {
    marginBottom: Spacing.xSmall,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xSmall,
  },
  inputGroupElement: {
    minWidth: '30%',
  },
  errorMessage: {
    ...Typography.error,
    paddingLeft: Spacing.xxxSmall,
  },
  name: {
    flex: 1,
    marginRight: Spacing.small,
  },
  address1: {
    flex: 1,
    marginRight: Spacing.small,
  },
  disabledInput: {
    ...Forms.textInputFormField,
    marginBottom: Spacing.small,
    backgroundColor: Colors.lighterGray,
    color: Colors.mediumGray,
  },
  footer: {
    marginTop: Spacing.medium,
  },
});
