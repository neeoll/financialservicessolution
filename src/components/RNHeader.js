import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RNImage from './RNImage';
import {Fonts, hp, Images, wp} from '../constants';
import TextGradient from './GradientText';
import {hitSlopProp} from '../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';

export default function RNHeader({title, rightComponent, containerStyle}) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: Platform.select({ios: 0, android: hp(1.5)}),
        },
        containerStyle,
      ]}>
      <TouchableOpacity
        hitSlop={hitSlopProp}
        onPress={() => {
          navigation && navigation.goBack();
        }}>
        <RNImage
          resizeMode={'contain'}
          source={Images.leftArrow}
          style={{width: wp(6), height: wp(6)}}></RNImage>
      </TouchableOpacity>
      <TextGradient
        text={title}
        style={{
          fontFamily: Fonts.POPPINS_BOLD,
          fontSize: wp(5),
        }}></TextGradient>
      {rightComponent ? (
        rightComponent()
      ) : (
        <View style={{width: wp(6), height: wp(6)}}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
