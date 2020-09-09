import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  [key: string]: any;
}

export const Home: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Text>Home Screen</Text>
    </>
  );
};
