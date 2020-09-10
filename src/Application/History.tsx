import React, { FunctionComponent } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import { Typography, Spacing, Forms, Colors } from '../styles/index';
import { Screens } from '../navigation';
import { Button } from '../common/Button';
import { Checkbox } from '../common/index';
import {
  HistoryInfo,
  initialHistoryValues,
  ApplicationFields,
} from './reducer';
import { saveHistoryInfo } from './actions';
import { useNavigation } from '@react-navigation/native';
import { useApplication } from './ApplicationContext';
import { historySchema } from './schema';
import { fieldHasError } from './utils';
import { Label } from '../common/Label';

export const History: FunctionComponent = () => {
  const navigation = useNavigation();
  const [, dispatch] = useApplication();

  const saveAndProceed = (values: HistoryInfo) => {
    dispatch(saveHistoryInfo(values));
    navigation.navigate(Screens.GardenPreferences);
  };
  const {
    LACKS_GARDEN_SPACE,
    HAD_PLOT_IN_CAMBRIDGE,
    CAMBRIDGE_PLOT_LOCATION,
    CAMBRIDGE_PLOT_YEAR,
    HAD_NON_CAMBRIDGE_PLOT,
    NON_CAMBRIDGE_PLOT_LOCATION,
    NON_CAMBRIDGE_PLOT_YEAR,
    REQUIRES_ACCESSIBLE_PLOT,
    VOLUNTEERS_TO_COORDINATE,
  } = ApplicationFields;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.subheader}>Select all that apply</Text>
        <Formik
          initialValues={initialHistoryValues}
          onSubmit={saveAndProceed}
          validateOnBlur
          validationSchema={historySchema}>
          {({
            setFieldValue,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => {
            const showError = (name: keyof HistoryInfo): boolean => {
              return fieldHasError<HistoryInfo>(name, errors, touched);
            };
            return (
              <>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      LACKS_GARDEN_SPACE,
                      !values[LACKS_GARDEN_SPACE],
                    )
                  }
                  text="I do not have any gardening space associated with my residence"
                  isSelected={values[LACKS_GARDEN_SPACE]}
                />

                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      HAD_PLOT_IN_CAMBRIDGE,
                      !values[HAD_PLOT_IN_CAMBRIDGE],
                    )
                  }
                  text="I have participated in a community garden in Cambridge"
                  isSelected={values[HAD_PLOT_IN_CAMBRIDGE]}>
                  <>
                    <View style={style.inputWrapper}>
                      <Label
                        text="Where?"
                        hasError={showError(CAMBRIDGE_PLOT_LOCATION)}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(CAMBRIDGE_PLOT_LOCATION) &&
                            style.inputError,
                        ]}
                        value={values[CAMBRIDGE_PLOT_LOCATION]}
                        onChangeText={handleChange(CAMBRIDGE_PLOT_LOCATION)}
                        onBlur={handleBlur(CAMBRIDGE_PLOT_LOCATION)}
                      />
                      {showError(CAMBRIDGE_PLOT_LOCATION) && (
                        <Text style={style.errorMessage}>
                          {errors[CAMBRIDGE_PLOT_LOCATION]}
                        </Text>
                      )}
                    </View>
                    <View style={style.inputWrapper}>
                      <Label
                        text="What year?"
                        hasError={showError(CAMBRIDGE_PLOT_YEAR)}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(CAMBRIDGE_PLOT_YEAR) && style.inputError,
                        ]}
                        value={values[CAMBRIDGE_PLOT_YEAR]}
                        keyboardType="numeric"
                        onChangeText={handleChange(CAMBRIDGE_PLOT_YEAR)}
                        onBlur={handleBlur(CAMBRIDGE_PLOT_YEAR)}
                      />
                      {showError(CAMBRIDGE_PLOT_YEAR) && (
                        <Text style={style.errorMessage}>
                          {errors[CAMBRIDGE_PLOT_YEAR]}
                        </Text>
                      )}
                    </View>
                  </>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      HAD_NON_CAMBRIDGE_PLOT,
                      !values[HAD_NON_CAMBRIDGE_PLOT],
                    )
                  }
                  text="I have participated in a community garden somewhere other than Cambridge"
                  isSelected={values[HAD_NON_CAMBRIDGE_PLOT]}>
                  <>
                    <View style={style.inputWrapper}>
                      <Label
                        text="Where?"
                        hasError={showError(NON_CAMBRIDGE_PLOT_LOCATION)}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(NON_CAMBRIDGE_PLOT_LOCATION) &&
                            style.inputError,
                        ]}
                        value={values[NON_CAMBRIDGE_PLOT_LOCATION]}
                        onChangeText={handleChange(NON_CAMBRIDGE_PLOT_LOCATION)}
                        onBlur={handleBlur(NON_CAMBRIDGE_PLOT_LOCATION)}
                      />
                      {showError(NON_CAMBRIDGE_PLOT_LOCATION) && (
                        <Text style={style.errorMessage}>
                          {errors[NON_CAMBRIDGE_PLOT_LOCATION]}
                        </Text>
                      )}
                    </View>
                    <View style={style.inputWrapper}>
                      <Label
                        text="What year?"
                        hasError={showError(NON_CAMBRIDGE_PLOT_YEAR)}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError(NON_CAMBRIDGE_PLOT_YEAR) &&
                            style.inputError,
                        ]}
                        value={values[NON_CAMBRIDGE_PLOT_YEAR]}
                        keyboardType="numeric"
                        onChangeText={handleChange(NON_CAMBRIDGE_PLOT_YEAR)}
                        onBlur={handleBlur(NON_CAMBRIDGE_PLOT_YEAR)}
                      />
                      {showError(NON_CAMBRIDGE_PLOT_YEAR) && (
                        <Text style={style.errorMessage}>
                          {errors[NON_CAMBRIDGE_PLOT_YEAR]}
                        </Text>
                      )}
                    </View>
                  </>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      REQUIRES_ACCESSIBLE_PLOT,
                      !values[REQUIRES_ACCESSIBLE_PLOT],
                    )
                  }
                  text="I have a disability and am interested in having an accessible garden plot"
                  isSelected={values[REQUIRES_ACCESSIBLE_PLOT]}>
                  <Text style={style.disclaimer}>
                    By checking this box you agree to provide medical
                    documentation that your disability results in the need for
                    an accessible garden plot at the requiest of the city
                  </Text>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      VOLUNTEERS_TO_COORDINATE,
                      !values[VOLUNTEERS_TO_COORDINATE],
                    )
                  }
                  text="I am interested in being the garden coordinator"
                  isSelected={values[VOLUNTEERS_TO_COORDINATE]}
                />
                <Button
                  label="Next"
                  onPress={() => saveAndProceed(values)}
                  disabled={!isValid}
                />
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
    margin: Spacing.medium,
  },
  subheader: {
    ...Typography.header5,
    paddingBottom: Spacing.medium,
  },
  historyContainer: {},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.medium,
  },
  checkbox: {
    marginRight: Spacing.small,
  },
  checkboxText: {
    flex: 1,
    ...Typography.mainContent,
  },
  inputWrapper: {
    marginBottom: Spacing.xSmall,
  },
  input: {
    ...Forms.textInputFormField,
    marginLeft: Spacing.xxxLarge,
  },
  inputError: {
    borderColor: Colors.primaryRed,
  },
  errorMessage: {
    ...Typography.error,
    paddingLeft: Spacing.xxxSmall,
    marginLeft: Spacing.xxxLarge,
  },
  label: {
    ...Typography.label,
    paddingLeft: Spacing.xxxSmall,
    marginLeft: Spacing.xxxLarge,
  },
  disclaimer: {
    ...Typography.secondaryContent,
    marginBottom: Spacing.large,
    marginLeft: Spacing.xHuge,
  },
});

type HistoryOptionProps = {
  onPress: () => void;
  text: string;
  isSelected: boolean;
};
const HistoryOption: FunctionComponent<HistoryOptionProps> = ({
  onPress,
  text,
  isSelected,
  children,
}) => {
  return (
    <View style={style.historyContainer}>
      <Checkbox isSelected={isSelected} text={text} onPress={onPress} />
      {isSelected && children}
    </View>
  );
};
