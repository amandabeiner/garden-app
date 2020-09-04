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
import { Typography, Spacing, Forms } from '../styles/index';
import { Button } from '../common/Button';
import { Checkbox } from '../common/index';
import { initialState, HistoryInfo } from './reducer';
import { saveHistoryInfo } from './actions';
import { useNavigation } from '@react-navigation/native';
import { useApplication } from './ApplicationContext';

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
        <Formik initialValues={initialState} onSubmit={() => {}}>
          {({ setFieldValue, handleChange, handleBlur, values, errors }) => {
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
                    <Text style={style.label}>Where?</Text>
                    <TextInput
                      style={style.input}
                      value={values.cambridgePlotLocation}
                      onChangeText={handleChange('cambridgePlotLocation')}
                      onBlur={handleBlur('cambridgePlotLocation')}
                    />
                    <Text style={style.label}>What year?</Text>
                    <TextInput
                      style={style.input}
                      value={values.cambridgePlotYear}
                      keyboardType="numeric"
                      onChangeText={handleChange('cambridgePlotYear')}
                      onBlur={handleBlur('cambridgePlotYear')}
                    />
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
                    <Text style={style.label}>Where?</Text>
                    <TextInput
                      style={style.input}
                      value={values.nonCambridgePlotLocation}
                      onChangeText={handleChange('nonCambridgePlotLocation')}
                      onBlur={handleBlur('nonCambridgePlotLocation')}
                    />
                    <Text style={style.label}>What year?</Text>
                    <TextInput
                      style={style.input}
                      value={values.nonCambridgePlotYear}
                      keyboardType="numeric"
                      onChangeText={handleChange('nonCambridgePlotYear')}
                      onBlur={handleBlur('nonCambridgePlotYear')}
                    />
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
                <Button label="Next" onPress={() => saveAndProceed(values)} />
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
  input: {
    ...Forms.textInputFormField,
    marginBottom: Spacing.small,
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
