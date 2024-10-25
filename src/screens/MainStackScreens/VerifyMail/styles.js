import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  openMail: {
    fontFamily: Fonts.JOST,
    fontWeight: '700',
    fontSize: wp(4.5),
    color: '#342929',
  },
  subtitle: {
    fontFamily: Fonts.JOST,
    fontWeight: '600',
    fontSize: wp(3),
    color: '#342929',
    textAlign: 'center'
  },
  mailGif: {
    height: hp(15),
    width: wp(25)
  },
  textStylebtn: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.WHITE,
  },
  btnView: {
    flex:1,justifyContent:'center',
  }
});
export default styles;
