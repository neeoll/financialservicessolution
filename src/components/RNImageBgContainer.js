import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Images} from '../constants';

export default function RNImageBgContainer({children}) {
  return (
    <ImageBackground
      style={styles.container}
      source={Images.bgImage}
      resizeMode="cover"
      imageStyle={{opacity: 0.5}}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
