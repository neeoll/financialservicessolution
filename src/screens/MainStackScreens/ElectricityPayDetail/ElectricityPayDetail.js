import {FlatList, StyleSheet, View} from 'react-native';
import React, { useState } from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNSearchBar,
  RNText,
  RNTextInput,
  TextGradient,
} from '../../../components';
import {Colors, Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import GradientBorder from '../../../components/RnGradientBorder';
import {screenWidth} from '../../../constants/ResponsiveScreens';
import commonStyles from '../../../styles/commonStyles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import RNButton from '../../../components/RNButton';
import { string } from 'prop-types';
import { navigationTo } from '../../../navigations';
const list = [
  {
    key: 'Location',
    label: 'Location',
    value: '',
    leftIcon:'',
    rightTextBtn: Strings.change
  },
  {
    key: 'Electricity Board',
    label: 'Electricity Board',
    value: '',
    leftIcon: Images.dukelogo,
    rightTextBtn: Strings.change 
  },
  {
    key: 'Bill Number',
    label: 'Bill Number',
    value: '',
    leftIcon: '',
    rightTextBtn: '',
  }
];
export default function ElectricityPayDetail({navigation}) {
  const [inputState, setInputState] = useState(list);
  const renderInput = (itm, index) => {
    return (
      <View>
        <View style={commonStyles.spacer1}/>
        <RNTextInput
          containerStyle={styles.emailInputContainer}
          label={itm?.label}
          placeholder={itm?.label}
          labelStyle={styles.labelStyle}
          style={styles.textInput}
          leftIcon={itm?.leftIcon}
          rightTextBtn={itm?.rightTextBtn}
        />
      </View>
    );
  };
  return (
    <RNContainer backgroundColor={colors.GREY_11} useScroll edges={['top']}>
      <RNImageBgContainer>
        <RNHeader title={Strings.electricityPay}></RNHeader>
        <View style={commonStyles.spacer2}/>
        <TextGradient
              style={styles.fillYourDetails}
              text={Strings.fillYourDetails}></TextGradient>
        {inputState.map((itm, index) => renderInput(itm, index))}
        <View style={commonStyles.spacer2}/>
        <RNButton
          onPress={() => {
           navigationTo(navigation,Screens.ElectricityEnterPayment)
          }}
          activeOpacity={0.5}
          title={Strings.done}
          textStyle={styles.textStyle}
          round></RNButton>
      </RNImageBgContainer>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  
  spacer: {
    marginVertical: hp(1),
  },
  labelStyle: {
    fontSize: wp(4),
    fontWeight: '400',
    color: colors.GREY_3,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  textInput: {
    fontSize: wp(3.5),
    fontWeight: '400',
    color: colors.GREY_2,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  textStyle: {
    color: colors.BLACK_2,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  fillYourDetails: {
    fontSize: wp(5),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_REGULAR,
  }
});
