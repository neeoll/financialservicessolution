// LineChartExample.js

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart, PieChart} from 'react-native-gifted-charts';
import {hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const CustomLineChart = ({containerStyle}) => {
  const data = [
    {value: 11, label: 'Mon'},
    {value: 10, label: 'Tue'},
    {value: 9, label: 'Wed'},
    {value: 13, label: 'Thu'},
    {value: 25, label: 'Fri'},
    {value: 20, label: 'Sat'},
    {value: 26, label: 'Sun'},
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      <LineChart
        onPress={e => {
          alert('cm');
          console.log(e);
        }}
        unFocusOnPressOut={e => {
          alert('cm');
          console.log(e);
        }}
        curved
        height={hp(30)}
        width={wp(80)}
        data={data}
        isAnimated
        xAxisColor={colors.GREY_11}
        yAxisColor={colors.GREY_11}
        xAxisLabelTextStyle={{color: colors.GREY_17}}
        yAxisTextStyle={{color: colors.GREY_17}}
        yAxisLabelSuffix="k"
        yAxisLabelPrefix="$"
        initialSpacing={wp(5)}
        color1={colors.LN_FIRST}
        hideDataPoints
        noOfSections={3}

        // customDataPoint={e => {
        //   console.log(e);
        //   return (
        //     <View
        //       style={{
        //         width: wp(5),
        //         height: wp(5),
        //         backgroundColor: 'red',
        //       }}></View>
        //   );
        // }}

        // hideRules
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomLineChart;
