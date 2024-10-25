import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  profileView: {
    flexDirection: 'row',
    padding: wp(4),
    backgroundColor: colors.yellowBg,
    borderRadius: 15,
  },
  userName: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '600',
    fontSize: wp(4.3),
    color: colors.BLACK_2,
  },
  acountsText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '600',
    fontSize: wp(4.3),
    color: colors.BLACK_2,
    marginLeft: 9,
    paddingVertical: 5,
  },
  mobileNumber: {
    fontWeight: '600',
    fontSize: wp(3.1),
    color: colors.GREY_4,
  },
  userNameView: {
    marginLeft: wp(5),
  },
  acounts: {
    marginTop: hp(2),
    padding: wp(3),
    backgroundColor: colors.yellowBg,
    borderRadius: 15,
  },
  leftIcon: {
    height: wp(5),
    width: wp(5),
  },
  name: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '500',
    fontSize: wp(4),
    marginLeft: wp(3),
    color: colors.BLACK_1,
  },
  logoutText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '500',
    fontSize: wp(4),
    marginLeft: wp(3),
    color: colors.redColor,
  },
  listMainView: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
  },
});
export default styles;
