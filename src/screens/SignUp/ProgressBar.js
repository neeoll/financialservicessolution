import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Fonts, hp, wp} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import TextGradient from '../../components/GradientText';
import {RNText} from '../../components';

export default function ProgressBar({currentTab, containerStyle}) {
  const tabData = ['Create Account', 'Driving Documents', 'choose financiers ', 'Buy Packages', ];

  const getWidthFillLine = val => {
    switch (val) {
      case 0:
        return '5%';
      case 1:
        return '28%';
      case 2:
        return '53%';
        case 3:
        return '85%';
      default:
        return '0%';
    }
  };

  return (
    <View style={[containerStyle]}>
      {/* Dashed Line */}
      <View style={styles.dashedLineContainer}>
        {new Array(25).fill(' ').map((_, index) => (
          <View key={index} style={styles.dash}></View>
        ))}
      </View>
      {/* Fill Line */}
      <View style={[styles.fillLine, {width: getWidthFillLine(currentTab)}]}>
        <LinearGradient
          colors={[colors.LN_FIRST, colors.LN_TWO]}
          style={styles.fillLineGradient}
        />
      </View>
      {/* Round Thumb */}
      <View style={[styles.thumb, {left: getWidthFillLine(currentTab)}]}>
        <LinearGradient
          colors={[colors.LN_FIRST, colors.LN_TWO]}
          style={styles.thumbGradient}
        />
      </View>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabData.map((itm, index) => (
          <View key={index} style={styles.tab}>
            {currentTab == index ? (
              <TextGradient style={styles.tabText} text={itm} />
            ) : (
              <RNText style={[styles.tabText, {color: colors.GREY_4}]}>
                {itm}
              </RNText>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashedLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dash: {
    width: 8,
    height: 4,
    backgroundColor: colors.GREY,
    borderRadius: 2,
  },
  fillLine: {
    backgroundColor: colors.LN_FIRST,
    height: 4,
    position: 'absolute',
    left: 0,
  },
  fillLineGradient: {
    width: '100%',
    height: '100%',
  },
  thumb: {
    width: wp(5),
    height: wp(5),
    backgroundColor: colors.LN_FIRST,
    borderRadius: wp(5) / 2,
    position: 'absolute',
    top: -wp(2.3),
  },
  thumbGradient: {
    width: '100%',
    height: '100%',
    borderRadius: wp(5) / 2,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  tab: {},
  tabText: {
    fontFamily: Fonts.JOST,
    fontWeight: '500',
    fontSize: wp(3.5),
    width: wp(22),
  },
});
