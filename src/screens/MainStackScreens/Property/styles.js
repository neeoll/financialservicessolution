import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { Colors, Fonts, hp, wp } from '../../../constants';


const styles = StyleSheet.create({
titleTab: {
    fontWeight: '600',
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
    paddingVertical:hp(1)
},
itemMainView: {
    borderColor: Colors.yellowBorder,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: hp(1),
    marginVertical:hp(1)
},
name: {
    fontWeight: '700',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_BOLD,
    color: '#101010'
},
address: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: '#878787'
},
date: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    color: colors.BLACK_2
},
nextdue: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    color: colors.redColor
},
borderBottom: {
    borderBottomColor: Colors.blackOpacity10,
    borderBottomWidth: 1,
    marginTop: 8
},
sliderImage: {
    height: hp(12),
    width: wp(33),
    borderRadius: 10
},
price: {
    fontWeight: '700',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_BOLD,
},
priceView: {flex: 1,paddingHorizontal:wp(2)},
marginTop2: {
marginTop: hp(1)
},
description: {
    fontWeight: '400',
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    color: colors.GREY_4,
},
viewDetailTextBtn: {
    fontSize: wp(4),
    color: colors.WHITE,
    fontWeight: '500'
  },
  viewDetailBtn: {
    marginTop: hp(2),
    width: '90%',
    height: hp(4),
  },

});
export default styles;
