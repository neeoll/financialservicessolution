import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  confirmation: {
    fontFamily: Fonts.JOST,
    fontWeight: '500',
    fontSize: wp(4),
    color: '#342929',
    textAlign: 'center',
  },
  listText: {
    fontFamily: Fonts.JOST,
    fontWeight: '500',
    fontSize: wp(3),
    color: '#676464',
  },
  messageView: {
    backgroundColor: '#DDE2E7',
    borderRadius: 10,
    padding: wp(4)
  },
  message: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400',
    fontSize: wp(3.2),
    color: colors.BLACK,
  },
  btnView: {
    //sflex:1,justifyContent:'center',
  },
  textStylebtn: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.WHITE,
  },
  confirmStatement: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(3.5),
    color: colors.BLACK, 
  }
});
export default styles;
