import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RNText from './RNText';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../constants';
import colors from '../constants/colors';
import { hitSlopProp } from '../styles/commonStyles';
import { RNImage, TextGradient } from '.';

export default function RNTransParentBtn({
  style,
  textStyle,
  title,
  activeOpacity,
  onPress,
  leftIcon,
  isGradientText
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={hitSlopProp}
      activeOpacity={activeOpacity ?? 0.5}
      style={[
        styles.btnCon,
        style,
      ]}>
       {leftIcon && <RNImage source={leftIcon} style={styles.leftIcon} resizeMode={'contain'}></RNImage>}
       {isGradientText ?
       <TextGradient style={[styles.title, textStyle]} text={title} /> : 
        <RNText style={[styles.title, textStyle]}>{title}</RNText>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnCon: {
     height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    paddingHorizontal: wp(2)
  },
  title: {
    color: colors.BLACK_2,
    fontSize: wp(4),
    fontWeight: '500',
    marginLeft:5
  },
  leftIcon: {
    height: wp(5),
    width: wp(5),
  },
});
