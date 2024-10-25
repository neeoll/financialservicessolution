import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {wp} from '../constants';

export default function RNCheckBox({...restProps}) {
  return (
    <BouncyCheckbox
      innerIconStyle={{
        borderRadius: 5, // to make it a little round increase the value accordingly
      }}
      iconStyle={{borderRadius: 5}}
      {...restProps}
    />
  );
}

const styles = StyleSheet.create({});
