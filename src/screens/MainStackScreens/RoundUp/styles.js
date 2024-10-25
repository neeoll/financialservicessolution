import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import {screenWidth} from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
  cashoutView: {
    backgroundColor: '#F2F2F2',
    paddingVertical: wp(5),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3)
  },
  cashoutPrice: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: wp(12),
    fontWeight: '600',
  },
  cashoutText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: wp(4),
    fontWeight: '600',
  },
  cashOutBtn: {
    backgroundColor: colors.blackOpacity70,
    borderColor: colors.yellowBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: wp(8),
    marginTop: hp(2)
  },
  toggleEnable: {
    height:hp(5),
    width: wp(10),
},
name: {
  fontFamily: Fonts.POPPINS_BOLD,
  fontSize: wp(4),
  fontWeight: '500',
  color: colors.BLACK
},
divider: {
  width: '98%',
  height: 1,
  backgroundColor: colors.GREY_8,
  alignSelf: 'center',
  marginVertical: hp(1),
},
});
export default styles;
