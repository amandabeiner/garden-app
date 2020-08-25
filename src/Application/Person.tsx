import React, { FunctionComponent, useRef } from 'react';
import { useApplication } from './ApplicationContext';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApplicationStepList } from '.';
import * as Actions from './actions';
import { Typography, Spacing, Forms, Colors } from '../styles/index';
import { Button } from '../common/Button';

type NavigationProps = StackNavigationProp<ApplicationStepList, 'Person'>;
type Props = { navigation: NavigationProps };

export const Person: FunctionComponent<Props> = ({ navigation }) => {
  const [state, dispatch] = useApplication();
  const secondInput = useRef<TextInput>();
  const thirdInput = useRef<TextInput>();
  const fourthInput = useRef<TextInput>();
  const fifthInput = useRef<TextInput>();
  const sixthInput = useRef<TextInput>();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.subheader}>
          We need a little information about you. Please be sure to provide
          accurate information so that we can contact you.
        </Text>
        <Text style={style.label}>Your name</Text>
        <TextInput
          style={style.input}
          value={state.name}
          returnKeyType="next"
          onChangeText={(t) => dispatch(Actions.updateName(t))}
          onSubmitEditing={() => secondInput.current.focus()}
        />
        <View style={style.inputGroup}>
          <View style={style.address1}>
            <Text style={style.label}>Address 1</Text>
            <TextInput
              value={state.address1}
              returnKeyType="next"
              onChangeText={(t) => dispatch(Actions.updateAddress1(t))}
              style={style.input}
              ref={secondInput}
              onSubmitEditing={() => thirdInput.current.focus()}
            />
          </View>
          <View>
            <Text style={style.label}>Apt / Suite / Floor</Text>
            <TextInput
              value={state.address2}
              onChangeText={(t) => dispatch(Actions.updateAddress2(t))}
              returnKeyType="next"
              style={style.input}
              ref={thirdInput}
              onSubmitEditing={() => fourthInput.current.focus()}
            />
          </View>
        </View>
        <View style={style.inputGroup}>
          <View style={style.inputGroupElement}>
            <Text style={style.label}>City</Text>
            <TextInput
              value="Cambridge"
              editable={false}
              style={style.disabledInput}
            />
          </View>
          <View style={style.inputGroupElement}>
            <Text style={style.label}>State</Text>
            <TextInput
              value="MA"
              editable={false}
              style={style.disabledInput}
            />
          </View>
          <View style={style.inputGroupElement}>
            <Text style={style.label}>Zip</Text>
            <TextInput
              value={state.zip}
              onChangeText={(t) => dispatch(Actions.updateZip(t))}
              style={style.input}
              keyboardType="numeric"
              returnKeyType="next"
              ref={fourthInput}
              onSubmitEditing={() => fifthInput.current.focus()}
            />
          </View>
        </View>
        <Text style={style.label}>Email</Text>
        <TextInput
          value={state.email}
          onChangeText={(t) => dispatch(Actions.updateEmail(t))}
          style={style.input}
          returnKeyType="next"
          ref={fifthInput}
          onSubmitEditing={() => sixthInput.current.focus()}
        />
        <Text>Phone</Text>
        <TextInput
          value={state.phone}
          onChangeText={(t) => dispatch(Actions.updatePhone(t))}
          style={style.input}
          ref={sixthInput}
        />
        <View style={style.footer}>
          <Button label="Next" onPress={() => navigation.navigate('History')} />
        </View>
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
  label: {
    ...Typography.label,
    paddingLeft: Spacing.xxxSmall,
  },
  input: {
    ...Forms.textInputFormField,
    marginBottom: Spacing.small,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroupElement: {
    minWidth: '30%',
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

type InputProps = {
  value: string;
  onChangeText: (t: string) => void;
};

const Input = React.forwardRef<any, InputProps>(
  ({ value, onChangeText }, ref) => {
    const { currentRef, nextRef } = ref;
    return (
      <TextInput
        value={value}
        onChangeText={onChangeText}
        returnKeyType="next"
        ref={currentRef}
        onSubmitEditing={nextRef.current.focus()}
        style={tailwind('border border-gray-600')}
      />
    );
  },
);
