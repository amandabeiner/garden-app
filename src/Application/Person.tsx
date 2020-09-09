import React, { FunctionComponent, useRef } from 'react';
import { Formik } from 'formik';
import {
  PersonalInfo,
  initialPersonValues,
  ApplicationFields,
} from './reducer';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { Typography, Spacing, Forms, Colors } from '../styles/index';
import { Button } from '../common/Button';
import * as schema from './schema';
import { Label } from '../common/Label';
import { savePersonalInfo } from './actions';
import { useNavigation } from '@react-navigation/native';
import { useApplication } from './ApplicationContext';
import { fieldHasError } from './utils';

export const Person: FunctionComponent = () => {
  const navigation = useNavigation();
  const secondInput = useRef<TextInput>();
  const thirdInput = useRef<TextInput>();
  const fourthInput = useRef<TextInput>();
  const fifthInput = useRef<TextInput>();
  const sixthInput = useRef<TextInput>();

  const [, dispatch] = useApplication();

  const saveAndProceed = (values: PersonalInfo) => {
    dispatch(savePersonalInfo(values));
    navigation.navigate('History');
  };
  const { NAME, ADDRESS_1, ADDRESS_2, ZIP, PHONE, EMAIL } = ApplicationFields;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.subheader}>
          We need a little information about you. Please be sure to provide
          accurate information so that we can contact you.
        </Text>
        <Formik
          initialValues={initialPersonValues}
          onSubmit={(values) => {
            saveAndProceed(values);
          }}
          validateOnBlur
          validationSchema={schema.personSchema}>
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
            const showError = (name: keyof PersonalInfo): boolean => {
              return fieldHasError<PersonalInfo>(name, errors, touched);
            };
            return (
              <>
                <View style={style.inputWrapper}>
                  <Label text="Your name" hasError={showError(NAME)} />
                  <TextInput
                    style={[style.input, showError(NAME) && style.inputError]}
                    value={values[NAME]}
                    returnKeyType="next"
                    onChangeText={handleChange(NAME)}
                    onBlur={handleBlur(NAME)}
                    onSubmitEditing={() => secondInput.current.focus()}
                  />
                  {showError(NAME) && (
                    <Text style={style.errorMessage}>{errors[NAME]}</Text>
                  )}
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
                      style={[style.input, showError(ZIP) && style.inputError]}
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
                    style={[style.input, showError(EMAIL) && style.inputError]}
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
                    label="Next"
                    onPress={handleSubmit}
                    disabled={!isValid || !dirty}
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.medium,
  },
  subheader: {
    ...Typography.mainContent,
    paddingBottom: Spacing.medium,
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
