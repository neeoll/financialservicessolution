import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import {screenWidth} from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
  uploadIdPhoto: {
    fontFamily: Fonts.POPPINS,
    fontWeight: '600',
    fontSize: wp(4.2),
  },
  uploadIdFront: {
    fontFamily: Fonts.POPPINS,
    fontWeight: '400',
    fontSize: wp(3.5),
    color: colors.BLACK,
  },
  spacer: {
    marginVertical: hp(1),
  },
  border: {
    borderColor: colors.blackOpacity12,
    borderWidth: 1,
    marginVertical: hp(2)
  },
  uploadDoc: {
    height: hp(25),
    width : screenWidth/1.17
  }
});
export default styles;
