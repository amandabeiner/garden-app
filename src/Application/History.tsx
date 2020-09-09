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
import { Button } from '../common/Button';
import { Checkbox } from '../common/index';
import { HistoryInfo, Application, initialHistoryValues } from './reducer';
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
    navigation.navigate('TOS');
  };

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
            const showError = (name: keyof Application): boolean => {
              return fieldHasError<HistoryInfo>(name, errors, touched);
            };
            return (
              <>
                <HistoryOption
                  onPress={() =>
                    setFieldValue('lacksGardenSpace', !values.lacksGardenSpace)
                  }
                  text="I do not have any gardening space associated with my residence"
                  isSelected={values.lacksGardenSpace}
                />

                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      'hadPlotInCambridge',
                      !values.hadPlotInCambridge,
                    )
                  }
                  text="I have participated in a community garden in Cambridge"
                  isSelected={values.hadPlotInCambridge}>
                  <>
                    <View style={style.inputWrapper}>
                      <Label
                        text="Where?"
                        hasError={showError('cambridgePlotLocation')}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError('cambridgePlotLocation') &&
                            style.inputError,
                        ]}
                        value={values.cambridgePlotLocation}
                        onChangeText={handleChange('cambridgePlotLocation')}
                        onBlur={handleBlur('cambridgePlotLocation')}
                      />
                      {showError('cambridgePlotLocation') && (
                        <Text style={style.errorMessage}>
                          {errors.cambridgePlotLocation}
                        </Text>
                      )}
                    </View>
                    <View style={style.inputWrapper}>
                      <Label
                        text="What year?"
                        hasError={showError('cambridgePlotYear')}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError('cambridgePlotYear') && style.inputError,
                        ]}
                        value={values.cambridgePlotYear}
                        keyboardType="numeric"
                        onChangeText={handleChange('cambridgePlotYear')}
                        onBlur={handleBlur('cambridgePlotYear')}
                      />
                      {showError('cambridgePlotYear') && (
                        <Text style={style.errorMessage}>
                          {errors.cambridgePlotYear}
                        </Text>
                      )}
                    </View>
                  </>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      'hadNonCambridgePlot',
                      !values.hadNonCambridgePlot,
                    )
                  }
                  text="I have participated in a community garden somewhere other than Cambridge"
                  isSelected={values.hadNonCambridgePlot}>
                  <>
                    <View style={style.inputWrapper}>
                      <Label
                        text="Where?"
                        hasError={showError('nonCambridgePlotLocation')}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError('nonCambridgePlotLocation') &&
                            style.inputError,
                        ]}
                        value={values.nonCambridgePlotLocation}
                        onChangeText={handleChange('nonCambridgePlotLocation')}
                        onBlur={handleBlur('nonCambridgePlotLocation')}
                      />
                      {showError('nonCambridgePlotLocation') && (
                        <Text style={style.errorMessage}>
                          {errors.nonCambridgePlotLocation}
                        </Text>
                      )}
                    </View>
                    <View style={style.inputWrapper}>
                      <Label
                        text="What year?"
                        hasError={showError('nonCambridgePlotYear')}
                        viewStyle={style.label}
                      />
                      <TextInput
                        style={[
                          style.input,
                          showError('nonCambridgePlotYear') && style.inputError,
                        ]}
                        value={values.nonCambridgePlotYear}
                        keyboardType="numeric"
                        onChangeText={handleChange('nonCambridgePlotYear')}
                        onBlur={handleBlur('nonCambridgePlotYear')}
                      />
                      {showError('nonCambridgePlotYear') && (
                        <Text style={style.errorMessage}>
                          {errors.nonCambridgePlotYear}
                        </Text>
                      )}
                    </View>
                  </>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      'requiresAccessiblePlot',
                      !values.requiresAccessiblePlot,
                    )
                  }
                  text="I have a disability and am interested in having an accessible garden plot"
                  isSelected={values.requiresAccessiblePlot}>
                  <Text style={style.disclaimer}>
                    By checking this box you agree to provide medical
                    documentation that your disability results in the need for
                    an accessible garden plot at the requiest of the city
                  </Text>
                </HistoryOption>
                <HistoryOption
                  onPress={() =>
                    setFieldValue(
                      'volunteersToCoordinate',
                      !values.volunteersToCoordinate,
                    )
                  }
                  text="I am interested in being the garden coordinator"
                  isSelected={values.volunteersToCoordinate}
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
