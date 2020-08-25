import React, { FunctionComponent } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useApplication } from './ApplicationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApplicationStepList } from '.';
import * as Actions from './actions';
import { Typography, Spacing, Forms } from '../styles/index';
import { Button } from '../common/Button';
import { Checkbox } from '../common/index';

type NavigationProps = StackNavigationProp<ApplicationStepList, 'Person'>;
type Props = { navigation: NavigationProps };

export const History: FunctionComponent<Props> = ({ navigation }) => {
  const [state, dispatch] = useApplication();
  console.log({ state });
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.subheader}>Select all that apply</Text>
        <HistoryOption
          onPress={() => dispatch(Actions.toggleLacksGardenSpace())}
          text="I do not have any gardening space associated with my residence"
          isSelected={state.lacksGardenSpace}
        />

        <HistoryOption
          onPress={() => dispatch(Actions.toggleHadCambridgePlot())}
          text="I have participated in a community garden in Cambridge"
          isSelected={state.hadPlotInCambridge}>
          <>
            <Text style={style.label}>Where?</Text>
            <TextInput
              style={style.input}
              value={state.cambridgePlotLocation}
              onChangeText={(t) =>
                dispatch(Actions.updateCambridgePlotLocation(t))
              }
            />
            <Text style={style.label}>What year?</Text>
            <TextInput
              style={style.input}
              value={state.cambridgePlotYear}
              keyboardType="numeric"
              onChangeText={(t) => dispatch(Actions.updateCambridgePlotYear(t))}
            />
          </>
        </HistoryOption>
        <HistoryOption
          onPress={() => dispatch(Actions.toggleHadNonCambridgePlot())}
          text="I have participated in a community garden somewhere other than Cambridge"
          isSelected={state.hadNonCambridgePlot}>
          <>
            <Text style={style.label}>Where?</Text>
            <TextInput
              style={style.input}
              value={state.nonCambridgePlotLocation}
              onChangeText={(t) =>
                dispatch(Actions.updateNonCambridgePlotLocation(t))
              }
            />
            <Text style={style.label}>What year?</Text>
            <TextInput
              style={style.input}
              value={state.nonCambridgePlotYear}
              keyboardType="numeric"
              onChangeText={(t) =>
                dispatch(Actions.updateNonCambridgePlotYear(t))
              }
            />
          </>
        </HistoryOption>
        <HistoryOption
          onPress={() => dispatch(Actions.toggleRequiresAccessiblePlot())}
          text="I have a disability and am interested in having an accessible garden plot"
          isSelected={state.requiresAccessiblePlot}>
          <Text style={style.disclaimer}>
            By checking this box you agree to provide medical documentation that
            your disability results in the need for an accessible garden plot at
            the requiest of the city
          </Text>
        </HistoryOption>
        <HistoryOption
          onPress={() => dispatch(Actions.toggleVolunteersToCoordinate())}
          text="I am interested in being the garden coordinator"
          isSelected={state.volunteersToCoordinate}
        />
        <Button label="Next" onPress={() => navigation.navigate('TOS')} />
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
