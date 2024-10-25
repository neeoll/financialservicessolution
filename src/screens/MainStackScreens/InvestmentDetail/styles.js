import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.BLACK_1,
    padding: wp(2),
    borderRadius: 10,
  },
  listImg: {
    height: hp(23),
  },
  sharePriceText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '700',
    fontSize: wp(4.5),
    color: colors.WHITE,
    textAlign: 'center',
    paddingVertical: wp(2),
  },
  accreitedInvestoresOnly: {
    backgroundColor: colors.yellowBg2,
    borderRadius: 25,
    height: hp(6),
  },
  header: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(3.5),
    color: colors.GREY_5,
  },
  header1: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '600',
    fontSize: wp(4.5),
    color: colors.BLACK,
  },
  header2: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(3.5),
    color: colors.BLACK,
  },
  bodyText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400',
    fontSize: wp(3.5),
    color: colors.GREY_4,
  },
});
