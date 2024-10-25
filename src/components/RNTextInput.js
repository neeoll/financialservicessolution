import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNText from './RNText';
import {Fonts, hp, Images, wp} from '../constants';
import colors from '../constants/colors';
import RNImage from './RNImage';
import {TextGradient} from '.';

export default function RNTextInput({
  labelStyle,
  label,
  style,
  secureTextEntry,
  containerStyle,
  leftIcon,
  rightTextBtn,
  rightImg,
  onInput,
  ...restProps
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (secureTextEntry !== undefined) {
      setVisible(secureTextEntry);
    }
  }, []);
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText style={[styles.label, {...labelStyle}]}>{label}</RNText>
      <View style={styles.inputWrapper}>
        {leftIcon && (
          <Image
            resizeMode={'contain'}
            source={leftIcon}
            style={styles.leftIconStyle}></Image>
        )}
        <TextInput
          {...restProps}
          onChangeText={value => onInput(value)}
          secureTextEntry={visible}
          style={[styles.textInput, style]}
          placeholderTextColor={colors.GREY_2}></TextInput>
        {secureTextEntry !== undefined && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setVisible(!visible);
            }}>
            <Image
              resizeMode={'contain'}
              source={visible ? Images.eyeClose : Images.eyeOpen}
              style={styles.eyeIcon}></Image>
          </TouchableOpacity>
        )}
        {rightTextBtn && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setVisible(!visible);
            }}>
            <TextGradient
              style={styles.rightText}
              text={rightTextBtn}></TextGradient>
          </TouchableOpacity>
        )}
         {rightImg && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              //setVisible(!visible);
            }}>
            <Image
              resizeMode={'contain'}
              source={rightImg}
              style={styles.leftIconStyle}></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(1),
  },
  label: {
    fontSize: wp(5),
    marginBottom: hp(0.5),
    color: colors.GREY_3,
  },
  rightText: {
    fontSize: wp(4),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.GREY,
    borderRadius: 5,
    paddingHorizontal: wp(2),
    paddingVertical: Platform.select({ios: 0, android: wp(1)}),
  },
  textInput: {
    fontSize: wp(5),
    padding: 0,
    height: hp(6),
    flex: 1,
    fontFamily: Fonts.POPPINS_REGULAR,
    paddingLeft: wp(1.5),
  },
  eyeIcon: {
    height: wp(6),
    width: wp(8),
    tintColor: colors.GREY_3,
  },
  leftIconStyle: {
    height: wp(6),
    width: wp(8),
  },
});
