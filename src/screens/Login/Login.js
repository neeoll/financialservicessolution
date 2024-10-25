import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  RNCheckBox,
  RNContainer,
  RNImage,
  RNText,
  RNTextInput,
} from '../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../constants';
import colors from '../../constants/colors';
import RNButton from '../../components/RNButton';
import {navigationReset, navigationTo} from '../../navigations';
import { authAPI } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [inputState, setInputState] = useState([
    {
      key: 'email',
      label: 'Email',
      value: '',
    },
    {
      key: 'password',
      label: 'Password',
      value: '',
      secure: true,
    },
  ]);

  const renderInput = (itm, index) => {
    return (
      <RNTextInput
        secureTextEntry={itm.secure}
        containerStyle={styles.emailInputContainer}
        label={itm.label}
        placeholder={itm.label}
        onInput={data => {
          setInputState(
            inputState.map(itmx =>
              itmx.key === itm.key
              ? {
                  ...itmx,
                  value: data
                }
              : itmx,
            ),
          );
        }}
      />
    );
  }

  return (
    <RNContainer useScroll edges={['top']}>
      <RNImage
        resizeMode={'contain'}
        source={Images.logo}
        style={styles.logo}></RNImage>
      <View>
        <RNText style={styles.signInText}>{Strings.signIn}</RNText>
        <RNText style={styles.loginText}>{Strings.loginTxt}</RNText>
        {inputState.map((itm, index) => renderInput(itm, index))}
        <View style={styles.rememberForgotContainer}>
          <View style={styles.rememberContainer}>
            <View>
              <RNCheckBox></RNCheckBox>
            </View>
            <RNText style={styles.rememberText}>{Strings.remember}</RNText>
          </View>
          <TouchableOpacity>
            <RNText style={styles.forgotPasswordText}>
              {Strings.forgotPassword}
            </RNText>
          </TouchableOpacity>
        </View>
        <RNButton
          onPress={() => {
            authAPI.login(inputState)
            .then(response => {
              if (response.ok) return response.json()
              if (response.status == 401) throw new Error('Invalid username or password')
            })
            .then(json => {
              AsyncStorage.setItem("auth", json.token)
              navigationTo(navigation, Screens.TabRoutes);
            })
            .catch(error => {
              console.error(error)
            })
          }}
          activeOpacity={0.5}
          title={Strings.login}
          style={styles.loginButton}
          round></RNButton>
        <View style={styles.signUpContainer}>
          <RNText style={styles.dontHaveAccText}>{Strings.dontHaveAcc}</RNText>
          <TouchableOpacity
            onPress={() => {
              navigationTo(navigation, Screens.SignUp);
            }}
            style={styles.signUpButton}>
            <RNText style={styles.signUpText}>{Strings.signUp}</RNText>
          </TouchableOpacity>
        </View>
      </View>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: wp(50),
    width: wp(60),
    alignSelf: 'center',
    marginTop: hp(1),
  },
  signInText: {
    fontSize: wp(6),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  loginText: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: wp(3.5),
    marginTop: hp(1),
  },
  emailInputContainer: {
    marginTop: hp(3),
  },
  rememberForgotContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: colors.GREY_3,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: colors.BLACK_1,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  loginButton: {
    marginTop: hp(4),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  dontHaveAccText: {
    color: colors.BLACK_4,
  },
  signUpButton: {
    marginLeft: wp(2),
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontFamily: Fonts.POPPINS_BOLD,
  },
});
