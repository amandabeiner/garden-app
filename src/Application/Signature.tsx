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
  const [{ backgroundInfo, personalInfo }, dispatch] = useApplication();
  const navigation = useNavigation();

  const saveAndProceed = () => {
    navigation.navigate(Screens.SignUp);
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.content}>
        <Text style={style.header}>Review & Submit</Text>
        <Text style={style.subheader}>
          Please review your answers below. Submitting will complete your
          application and serve as your virtual signature.
        </Text>
        <AnswerItem
          title="Name:"
          value={`${personalInfo.firstName} ${personalInfo.lastName}`}
        />
        <AnswerItem
          title="Address:"
          value={
            <>
              <Text style={style.street1}>
                {personalInfo.street1} {personalInfo.street2}
                {'\n'}
              </Text>
              <Text style={style.street2}>
                Cambridge, MA {personalInfo.zip}
              </Text>
            </>
          }
        />
        <AnswerItem title="Email:" value={personalInfo.email} />
        <AnswerItem title="Phone:" value={personalInfo.phone} />
        <Text style={style.label}>About you:</Text>
        <View style={style.list}>
          <ListItem
            value={gardenSpaceToString(backgroundInfo.lacksGardenSpace)}
          />
          <ListItem
            value={cambridgePlotToString(
              backgroundInfo.hadPlotInCambridge,
              backgroundInfo.cambridgePlotLocation,
              backgroundInfo.cambridgePlotYear,
            )}
          />
          <ListItem
            value={nonCambridgePlotToString(
              backgroundInfo.hadNonCambridgePlot,
              backgroundInfo.nonCambridgePlotLocation,
              backgroundInfo.nonCambridgePlotYear,
            )}
          />
          <ListItem
            value={accessiblePlotToString(
              backgroundInfo.requiresAccessiblePlot,
            )}
          />
          <ListItem
            value={gardenCoordinatorToString(
              backgroundInfo.volunteersToCoordinate,
            )}
          />
        </View>
        <Text style={style.label}>Applying to:</Text>
        <View style={style.list}>
          {backgroundInfo.gardenPreferences.map((g) => {
            return <ListItem key={g} value={g} />;
          })}
        </View>
      </ScrollView>
      <View style={style.footer}>
        <Checkbox
          isSelected={backgroundInfo.signedAgreement}
          text="I confirm that the information above is correct to the best of my knowledge"
          onPress={() => dispatch(toggleSignAgreement())}
        />
        <Button
          label="Submit Application"
          onPress={saveAndProceed}
          disabled={!backgroundInfo.signedAgreement}
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
    paddingVertical: Spacing.xSmall,
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
  street1: {
    flexDirection: 'row',
    flex: 1,
  },
  street2: {
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
