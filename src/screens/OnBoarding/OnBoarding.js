import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNContainer, RNImage, RNText, TextGradient} from '../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../constants';
import colors from '../../constants/colors';
import RNButton from '../../components/RNButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationTo} from '../../navigations';

export default function OnBoarding({navigation}) {
  const {bottom} = useSafeAreaInsets();
  console.log('🪲🪲 ~ file: onBoarding.js:11 ~ OnBoarding ~ bottom:', bottom);

  return (
    <RNContainer useScroll edges={[]}>
      <RNImage source={Images.OnBoardingBg} style={styles.image} />
      <RNText style={styles.title}>{Strings.onBoardingText1}</RNText>
      <RNText style={styles.subtitle}>{Strings.onBoardingText2}</RNText>

      <RNButton
        onPress={() => {
          navigationTo(navigation, Screens.Login);
        }}
        activeOpacity={0.5}
        title={Strings.getStarted}
        round
        textStyle={styles.buttonText}
        style={[styles.button, {marginBottom: bottom}]}
      />
      <View style={{height: hp(3)}}></View>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: hp(60),
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(10),
  },
  subtitle: {
    textAlign: 'center',
    fontSize: wp(5),
    color: colors.BLACK_3,
    paddingHorizontal: wp(5),
    marginVertical: hp(2),
  },
  button: {
    width: wp(60),
    alignSelf: 'center',
    marginTop: 'auto',
    height: hp(8),
  },
  buttonText: {
    color: colors.BLACK_2,
  },
});
