import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNSearchBar,
  RNText,
} from '../../../components';
import {Colors, Fonts, hp, Images, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import GradientBorder from '../../../components/RnGradientBorder';
import {screenWidth} from '../../../constants/ResponsiveScreens';
import commonStyles from '../../../styles/commonStyles';

const yellow = [Colors.LN_FIRST, Colors.LN_TWO];
export default function HelpSupport({navigation}) {
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top', 'bottom']}>
      <RNHeader title={Strings.helpSupport}></RNHeader>
      <RNSearchBar
        placeholder={Strings.searchFinancialServicesSolutionOffice}
        containerStyle={styles.searchBar}></RNSearchBar>
      <View style={styles.spacer} />
      <RNText style={styles.financialServicesSolutionOffices}>
        {Strings.FinancialServicesSolutionOffices}
      </RNText>
      <View style={[commonStyles.flexRow, {marginLeft: -13}]}>
        <View style={commonStyles.alignCenter}>
          <RNImage
            resizeMode={'contain'}
            source={Images.logoWithBorder}
            style={styles.logo}></RNImage>
          <RNText style={styles.officeLocation}>{'USA Office'}</RNText>
        </View>
        <View style={commonStyles.alignCenter}>
          <RNImage
            resizeMode={'contain'}
            source={Images.logoWithoutBorder}
            style={styles.logo}></RNImage>
          <RNText style={styles.officeLocation}>{'UK Office'}</RNText>
        </View>
      </View>

      <View style={commonStyles.marginTopHp2}>
        <RNText style={commonStyles.textStyle}>{'United State Office'}</RNText>
      </View>
      <View style={styles.spacer} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNImage
            resizeMode={'contain'}
            source={Images.mailIcon}
            style={styles.icon}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={commonStyles.textStyle1}>{'Mail'}</RNText>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'7586 Birchall Ave, Bronx NY USA 1075'}
          </RNText>
        </View>
      </View>
      <View style={commonStyles.border} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNImage
            resizeMode={'contain'}
            source={Images.mailIcon}
            style={styles.icon}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={commonStyles.textStyle1}>{'Email'}</RNText>
          <View style={commonStyles.flexRow}>
          <RNText style={commonStyles.textStyle1}>{'Fraud: '}</RNText>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'Fraud@financial services solution.coms'}
          </RNText>
          </View>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'Fraud@financial services solution.coms'}
          </RNText>

        </View>
      </View>
      <View style={commonStyles.border} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNImage
            resizeMode={'contain'}
            source={Images.phoneIcon}
            style={styles.icon}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={commonStyles.textStyle1}>{'Tel'}</RNText>
          <View style={commonStyles.flexRow}>
          <RNText style={commonStyles.textStyle1}>{'Fraud: '}</RNText>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'+234 765-7557'}
          </RNText>
          </View>
          <View style={commonStyles.flexRow}>
          <RNText style={commonStyles.textStyle1}>{'Customer Care:: '}</RNText>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'+234 865-8755'}
          </RNText>
          </View>
        </View>
      </View>
      <View style={commonStyles.border} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNImage
            resizeMode={'contain'}
            source={Images.faxIcon}
            style={styles.icon}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={commonStyles.textStyle1}>{'Fax'}</RNText>
          <View style={commonStyles.flexRow}>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'+234 765-7557'}
          </RNText>
          </View>
        </View>
      </View>
      <View style={commonStyles.border} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNImage
            resizeMode={'contain'}
            source={Images.timeIcon}
            style={styles.icon}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={commonStyles.textStyle1}>{'Office Hours'}</RNText>
          <View style={commonStyles.flexRow}>
          <RNText style={[commonStyles.textStyle2, {colors: colors.GREY_3}]}>
            {'M-F 08:90 PM'}
          </RNText>
          </View>
        </View>
      </View>
      <View style={commonStyles.border} />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: hp(3),
  },
  textGradient: {
    fontSize: wp(5),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  financialServicesSolutionOffices: {
    color: colors.GREY_3,
    fontSize: wp(4),
    fontWeight: '500',
  },
  officeLocation: {
    marginTop: -15,
    color: '262626',
    fontSize: wp(3.2),
    fontWeight: '400',
  },
  spacer: {
    marginVertical: hp(1),
  },
  logo: {
    height: hp(15),
    width: wp(35),
  },
  icon: {
    height: hp(2),
    width: wp(5),
  },
});
