import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RNText from './RNText';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, hp, wp} from '../constants';
import colors from '../constants/colors';
import { TextGradient } from '.';

export default function RNButton({
  round,
  style,
  textStyle,
  title,
  activeOpacity,
  borderRadius,
  onPress,
  icon,
  colors = [Colors.LN_FIRST, Colors.LN_TWO],
  isGradientText,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity ?? 0.4}
      style={[
        styles.btnCon,
        {borderRadius: borderRadius ? borderRadius : round ? wp(15) : 0},
        style,
      ]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.9]}
        style={[
          styles.linearGradient,
          {borderRadius: borderRadius ? borderRadius : round ? wp(15) : 0},
        ]}>
        {isGradientText ? (
          <TextGradient
            style={[styles.title, textStyle]}
            text={title}></TextGradient>
        ) : (
          <RNText style={[styles.title, textStyle]}>{title}</RNText>
        )}
        {icon ? icon() : null}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnCon: {
    height: hp(7),
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    color: colors.BLACK_2,
    fontSize: wp(5),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});
