import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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

export default function Login({navigation}) {
  return (
    <RNContainer useScroll edges={['top']}>
      <RNImage
        resizeMode={'contain'}
        source={Images.logo}
        style={styles.logo}></RNImage>
      <View>
        <RNText style={styles.signInText}>{Strings.signIn}</RNText>
        <RNText style={styles.loginText}>{Strings.loginTxt}</RNText>
        <RNTextInput
          containerStyle={styles.emailInputContainer}
          label={Strings.email}
          placeholder={Strings.demoEmail}></RNTextInput>
        <RNTextInput
          secureTextEntry={true}
          label={Strings.password}
          placeholder={Strings.password}></RNTextInput>
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
            navigationReset(navigation, Screens.TabRoutes);
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
