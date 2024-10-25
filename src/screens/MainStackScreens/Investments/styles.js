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
  sharePrice: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '700',
    fontSize: wp(4)
  },
  sharePriceText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400',
    fontSize: wp(4),
    color: '#BDBDBD'
  }
});
