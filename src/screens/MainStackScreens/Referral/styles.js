import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import {screenWidth} from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
  referralPrice: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: wp(12),
    fontWeight: '600',
  },
  ContactsperActivation: {
    fontFamily: Fonts.POPPINS,
    fontSize: wp(4),
    fontWeight: '600',
    color: colors.BLACK_1,
  },
  inviteFriend: {
    fontFamily: Fonts.POPPINS,
    fontSize: wp(4),
    fontWeight: '400',
    color: colors.GREY_3,
  },
  message: {
    fontFamily: Fonts.POPPINS,
    fontSize: wp(3),
    fontWeight: '400',
    color: colors.GREY_13,
    textAlign: 'center',
  },
  spacer: {
    marginVertical: hp(1),
  },
  inviteAFriend: {
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS,
    color: colors.BLACK_2,
  },
  copyMyReferalLink: {
    borderColor: colors.yellowTheme,
    borderWidth: 1,
    borderRadius: hp(3.5),
    height: hp(6.5),
  },
  title: {
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS,
  },
  inviteAFriendbtn: {
    width: screenWidth / 1.15,
  },
  refImage: {
    height: hp(26),
    width: screenWidth / 1.2,
  },
});
export default styles;
