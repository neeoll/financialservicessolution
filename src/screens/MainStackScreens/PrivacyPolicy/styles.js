import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import {screenWidth} from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
  flag: {width: wp(6), height: wp(6)},
  reviewTerms: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '400',
    fontSize: wp(4.2),
    color: colors.BLACK_1,
  },
  reviewTerms1: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.BLACK_1,
    textAlign: 'center',
  },
  spacer: {
    marginVertical: hp(1),
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  declineBtn: {
    borderColor: colors.redColor,
    borderWidth: 1,
    borderRadius: hp(3.5),
    height: hp(6.5),
  },
  title: {
    color: colors.redColor,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});
export default styles;
