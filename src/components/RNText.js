import {StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import {Fonts, wp} from '../constants';
import PropTypes from 'prop-types';
import colors from '../constants/colors';
export default function RNText({children, style, ...restProps}) {
  return (
    <Text style={[styles.normal, style]} {...restProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  normal: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
    fontSize: wp(4),
  },
});
