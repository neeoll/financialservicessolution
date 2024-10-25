import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  legaldocuments: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '600',
    fontSize: wp(4.5),
    color: '#342929',
  },
  subtitle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '300',
    fontSize: wp(3),
    color: '#342929',
  },
  itemText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '600',
    fontSize: wp(3.5),
    color: '#342929',
  },
  carbonDocument: {
        height: hp(5),
        width: wp(5),
  },
  listBg: {
    backgroundColor: 'rgba(40, 40, 40, 0.05)',
    padding: wp(4),
    borderRadius: 5
  },
  textStylebtn: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.WHITE,
  }
});
export default styles;
