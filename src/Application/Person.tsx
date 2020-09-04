import React, { FunctionComponent, useRef } from 'react';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import { initialState, Application, PersonalInfo } from './reducer';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApplicationStepList } from '.';
import { Typography, Spacing, Forms, Colors } from '../styles/index';
import { Button } from '../common/Button';
import * as schema from './schema';
import { Label } from '../common/Label';
import { savePersonalInfo } from './actions';
import { useNavigation } from '@react-navigation/native';
import { useApplication } from './ApplicationContext';

type NavigationProps = StackNavigationProp<ApplicationStepList, 'Person'>;
type Props = { navigation: NavigationProps };

export const Person: FunctionComponent<Props> = () => {
  const navigation = useNavigation();
  const secondInput = useRef<TextInput>();
  const thirdInput = useRef<TextInput>();
  const fourthInput = useRef<TextInput>();
  const fifthInput = useRef<TextInput>();
  const sixthInput = useRef<TextInput>();

  const [, dispatch] = useApplication();

  const hasError = (
    field: keyof Application,
    errors: FormikErrors<Application>,
    touched: FormikTouched<Application>,
  ): boolean => {
    return Boolean(Boolean(errors[field] && touched[field]));
  };

  const saveAndProceed = (values: PersonalInfo) => {
    dispatch(savePersonalInfo(values));
    navigation.navigate('History');
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.subheader}>
          We need a little information about you. Please be sure to provide
          accurate information so that we can contact you.
        </Text>
        <Formik
          initialValues={initialState}
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
            const showError = (name: keyof Application): boolean => {
              return hasError(name, errors, touched);
            };
            return (
              <>
                <View style={style.inputWrapper}>
                  <Label text="Your name" hasError={showError('name')} />
                  <TextInput
                    style={[style.input, showError('name') && style.inputError]}
                    value={values.name}
                    returnKeyType="next"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    onSubmitEditing={() => secondInput.current.focus()}
                  />
                  {showError('name') && (
                    <Text style={style.errorMessage}>{errors.name}</Text>
                  )}
                </View>
                <View style={style.inputGroup}>
                  <View style={style.address1}>
                    <Label text="Street" hasError={showError('address1')} />
                    <TextInput
                      value={values.address1}
                      returnKeyType="next"
                      onChangeText={handleChange('address1')}
                      onBlur={handleBlur('address1')}
                      style={[
                        style.input,
                        showError('address1') && style.inputError,
                      ]}
                      ref={secondInput}
                      onSubmitEditing={() => thirdInput.current.focus()}
                    />
                    {showError('address1') && (
                      <Text style={style.errorMessage}>{errors.address1}</Text>
                    )}
                  </View>
                  <View>
                    <Label
                      text="Apt / Suite / Floor"
                      hasError={showError('address2')}
                    />
                    <TextInput
                      value={values.address2}
                      onChangeText={handleChange('address2')}
                      onBlur={handleBlur('address2')}
                      returnKeyType="next"
                      style={[
                        style.input,
                        showError('address2') && style.inputError,
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
                    <Label text="Zip" hasError={showError('zip')} />
                    <TextInput
                      value={values.zip}
                      onChangeText={handleChange('zip')}
                      onBlur={handleBlur('zip')}
                      style={[
                        style.input,
                        showError('zip') && style.inputError,
                      ]}
                      keyboardType="numeric"
                      returnKeyType="next"
                      ref={fourthInput}
                      onSubmitEditing={() => fifthInput.current.focus()}
                    />
                    {touched.zip && errors.zip && (
                      <Text style={style.errorMessage}>{errors.zip}</Text>
                    )}
                  </View>
                </View>
                <View style={style.inputWrapper}>
                  <Label text="Email" hasError={showError('email')} />
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    style={[
                      style.input,
                      showError('email') && style.inputError,
                    ]}
                    returnKeyType="next"
                    ref={fifthInput}
                    onSubmitEditing={() => sixthInput.current.focus()}
                  />
                  {showError('email') && (
                    <Text style={style.errorMessage}>{errors.email}</Text>
                  )}
                </View>
                <Label text="Phone" hasError={showError('phone')} />
                <TextInput
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  style={[style.input, showError('phone') && style.inputError]}
                  ref={sixthInput}
                />
                {showError('phone') && (
                  <Text style={style.errorMessage}>{errors.phone}</Text>
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
