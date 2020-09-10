import React, { FunctionComponent } from 'react';
import { VictoryPie } from 'victory-native';
import { Text, SafeAreaView } from 'react-native';

interface Props {
  [key: string]: any;
}

export const Home: FunctionComponent<Props> = (props) => {
  const data = [
    { x: 1, y: 4 },
    { x: 2, y: 100 - 4 },
  ];

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <VictoryPie
        standalone={false}
        animate={{ duration: 1000 }}
        width={400}
        height={400}
        data={data}
        innerRadius={120}
        cornerRadius={25}
        labels={() => null}
        style={{
          data: {
            fill: ({ datum }) => {
              const color = datum.y > 30 ? 'green' : 'red';
              return datum.x === 1 ? color : 'transparent';
            },
          },
        }}
      />
    </SafeAreaView>
  );
};
