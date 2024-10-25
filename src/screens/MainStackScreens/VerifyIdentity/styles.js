import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { Fonts, hp, wp } from '../../../constants';
import { screenWidth } from 'react-native-gifted-charts/src/utils';


const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.JOST,
    color: '#342929',
    fontWeight: '600',
    fontSize: wp(5),
    textAlign: 'center'
},
title1: {
  fontFamily: Fonts.JOST,
  color: colors.blackOpacity60,
  fontWeight: '600',
  fontSize: wp(3.2),
  textAlign: 'center'
},
  textStylebtn: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.WHITE,
  },
  btnView: {
    flex: 1,justifyContent: 'flex-end'
  },
  videoMessage: {
    height: hp(15),
    width: wp(92)
  }
});
export default styles;
