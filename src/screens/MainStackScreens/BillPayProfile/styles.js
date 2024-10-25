import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { Fonts, hp, wp } from '../../../constants';


const styles = StyleSheet.create({
icon: {
    height: hp(5),
    width: wp(5)
},
cycleType: {
    color: colors.BLACK,
    fontWeight: '500'
},
toggleEnable: {
    height:hp(5),
    width: wp(10),
},
desc: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_4,
    fontWeight: '400',
    fontSize: wp(3)
},
marginTopAdd: {
    marginTop: hp(2),
}
});
export default styles;
