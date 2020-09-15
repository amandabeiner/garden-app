import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { Svg } from 'react-native-svg';
import { Colors, Typography, Spacing } from '../styles/index';

type Props = {
  placeOnList?: number;
  listTotal?: number;
};

export const Home: FunctionComponent<Props> = ({
  placeOnList = 500,
  listTotal = 1150,
}) => {
  const [place, setPlace] = useState(0);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    setPlace(placeOnList);
    setTotal(listTotal);
  }, [listTotal, placeOnList]);

  const percentageComplete = (place / total) * 100;

  const data = [
    { x: 1, y: percentageComplete },
    { x: 2, y: 100 - percentageComplete },
  ];

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.progressGraph}>
        <Svg viewBox="0 0 200 200" height={350} width={350}>
          <VictoryPie
            standalone={false}
            animate={{ duration: 3000 }}
            width={200}
            height={200}
            data={data}
            innerRadius={60}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  return datum.x === 1 ? Colors.primaryBlue : 'transparent';
                },
              },
            }}
          />
          <VictoryLabel
            textAnchor="middle"
            verticalAnchor="middle"
            x={100}
            y={100}
            text={[
              `${formatNumber(place)}`,
              'out of',
              `${formatNumber(total)}`,
            ]}
            lineHeight={1.25}
            style={style.graphLabel}
          />
        </Svg>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    margin: Spacing.large,
  },
  header: {
    ...Typography.header2,
    paddingTop: Spacing.large,
    paddingBottom: Spacing.xSmall,
  },
  subheader: {
    ...Typography.secondaryContent,
    paddingBottom: Spacing.xSmall,
  },
  progressGraph: {
    display: 'flex',
    marginTop: Spacing.xLarge,
    alignItems: 'center',
  },
  graphLabel: {
    ...Typography.secondaryContent,
    fontSize: Typography.xSmall,
    fontFamily: 'System',
  },
});
