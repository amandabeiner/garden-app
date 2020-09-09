import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { Leaf } from '../assets/index';
import { useApplication } from './ApplicationContext';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Spacing, Typography, Iconography, Colors } from '../styles/index';
import { Checkbox, Button } from '../common/index';
import { toggleSignAgreement } from './actions';
import { Screens } from '../navigation';

export const Signature: FunctionComponent = () => {
  const [values, dispatch] = useApplication();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.content}>
        <Text style={style.header}>Review & Submit</Text>
        <Text style={style.subheader}>
          Please review your answers below. Submitting will complete your
          application and serve as your virtual signature.
        </Text>
        <AnswerItem title="Name:" value={values.name} />
        <AnswerItem
          title="Address:"
          value={
            <>
              <Text style={style.address1}>
                {values.address1} {values.address2}
                {'\n'}
              </Text>
              <Text style={style.address2}>Cambridge, MA {values.zip}</Text>
            </>
          }
        />
        <AnswerItem title="Email:" value={values.email} />
        <AnswerItem title="Phone:" value={values.phone} />
        <Text style={style.label}>Your answers:</Text>
        <View style={style.list}>
          <ListItem value={gardenSpaceToString(values.lacksGardenSpace)} />
          <ListItem
            value={cambridgePlotToString(
              values.hadPlotInCambridge,
              values.cambridgePlotLocation,
              values.cambridgePlotYear,
            )}
          />
          <ListItem
            value={nonCambridgePlotToString(
              values.hadNonCambridgePlot,
              values.nonCambridgePlotLocation,
              values.nonCambridgePlotYear,
            )}
          />
          <ListItem
            value={accessiblePlotToString(values.requiresAccessiblePlot)}
          />
          <ListItem
            value={gardenCoordinatorToString(values.volunteersToCoordinate)}
          />
        </View>
      </ScrollView>
      <View style={style.footer}>
        <Checkbox
          isSelected={values.signedAgreement}
          text="I confirm that the information above is correct to the best of my knowledge"
          onPress={() => dispatch(toggleSignAgreement())}
        />
        <Button
          label="Submit Application"
          onPress={() => navigation.navigate(Screens.Complete)}
          disabled={!values.signedAgreement}
        />
      </View>
    </SafeAreaView>
  );
};
const gardenSpaceToString = (val: boolean): string => {
  switch (val) {
    case true:
      return 'No garden space';
    case false:
      return 'Garden space at home';
  }
};

const cambridgePlotToString = (
  hadPlot: boolean,
  location: string | null,
  year: string | null,
) => {
  switch (hadPlot) {
    case true:
      return `${location} plot in ${year}`;
    case false:
      return 'No previous Cambridge plots';
  }
};

const nonCambridgePlotToString = (
  hadPlot: boolean,
  location: string | null,
  year: string | null,
) => {
  switch (hadPlot) {
    case true:
      return `${location} plot in ${year}`;
    case false:
      return 'No plots in other cities';
  }
};

const accessiblePlotToString = (requiresAccessiblePlot: boolean): string => {
  switch (requiresAccessiblePlot) {
    case true:
      return 'Request accessible plot';
    case false:
      return 'Do not require accessible plot';
  }
};

const gardenCoordinatorToString = (gardenCoordinator: boolean): string => {
  switch (gardenCoordinator) {
    case true:
      return 'Volunteer to coordinate';
    case false:
      return 'Not interested in coordinating';
  }
};

type AnswerItemProps = {
  title: string;
  value: React.ReactNode;
};

const AnswerItem: FunctionComponent<AnswerItemProps> = ({ title, value }) => {
  return (
    <View style={style.answer}>
      <Text style={style.label}>{title}</Text>
      <Text style={style.value}>{value}</Text>
    </View>
  );
};

const ListItem: FunctionComponent<{ value: string }> = ({ value }) => {
  return (
    <View style={style.listItem}>
      <SvgXml
        xml={Leaf}
        width={Iconography.small}
        height={Iconography.small}
        fill={Colors.primaryBlue}
      />
      <Text style={style.listItemText}>{value}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: Spacing.medium,
    marginTop: Spacing.medium,
  },
  header: {
    ...Typography.header4,
    marginBottom: Spacing.small,
  },
  subheader: {
    ...Typography.secondaryContent,
    marginBottom: Spacing.small,
  },
  answer: {
    marginBottom: Spacing.medium,
  },
  label: {
    ...Typography.mainContent,
    ...Typography.bold,
  },
  value: {
    ...Typography.mainContent,
  },
  list: {
    paddingTop: Spacing.xSmall,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xxxSmall,
  },
  listItemText: {
    ...Typography.secondaryContent,
    flex: 1,
  },
  address1: {
    flexDirection: 'row',
    flex: 1,
  },
  address2: {
    flexDirection: 'row',
    flex: 1,
  },
  footer: {
    padding: Spacing.medium,
    backgroundColor: Colors.white,
    borderColor: Colors.lighterGray,
    borderWidth: 1,
    width: '100%',
  },
});
