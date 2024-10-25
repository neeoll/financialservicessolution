import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBorder = ({width, colors, borderWidth, borderRadius,children}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}

      style={[
        styles.gradient,
        {
          borderRadius: borderRadius,
          borderBottomWidth: borderWidth,
          width: width
        },
      ]}>
        {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientBorder;
