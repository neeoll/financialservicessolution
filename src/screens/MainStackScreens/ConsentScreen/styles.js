import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { Fonts, hp, wp } from '../../../constants';


const styles = StyleSheet.create({
icon: {
    height: hp(6.5),
    width: wp(6.5)
},
cycleType: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
    fontWeight: '600',
    fontSize: wp(4)
},
toggleEnable: {
    height:hp(5),
    width: wp(10),
},
desc: {
    fontFamily: Fonts.JOST,
    color: colors.BLACK,
    fontWeight: '500',
    fontSize: wp(3.2)
},
marginTopAdd: {
    marginTop: hp(2)
},
reviewTerms1: {
    fontFamily: Fonts.JOST,
    fontWeight: '600',
    fontSize: wp(3.5),
    textAlign: 'left'
  },
  flexStart: {
    justifyContent: 'flex-start',alignItems: 'flex-start'
  },
  textStylebtn: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.WHITE,
  },
  btnView: {
    flex: 1,justifyContent: 'flex-end'
  }
});
export default styles;
