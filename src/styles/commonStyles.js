import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../constants';
import colors from '../constants/colors';
import { screenWidth } from '../constants/ResponsiveScreens';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  fontSizeWp1: {
    fontSize: wp(1),
  },
  fontSizeWp2: {
    fontSize: wp(2),
  },
  fontSizeWp3: {
    fontSize: wp(3),
  },
  fontSizeWp4: {
    fontSize: wp(4),
  },
  fontSizeWp5: {
    fontSize: wp(5),
  },
  marginLeftWp2: {
    marginLeft: wp(2),
  },
  marginLeftWp3: {
    marginLeft: wp(3),
  },
  marginLeftWp4: {
    marginLeft: wp(4),
  },
  marginTopHp4: {
    marginTop: hp(4),
  },
  marginTopHp2: {
    marginTop: hp(2),
  },
  marginTopHp3: {
    marginTop: hp(3),
  },
  marginTopHp1: {
    marginTop: hp(1),
  },
  marginTopHpZero5: {
    marginTop: hp(0.5),
  },
  margin3: {
    margin: hp(1),
  },
  padding3:{
   padding: wp(3)
  },
  padding2:{
    padding: wp(2)
   },
   flexitemCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirectionRowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexDirectionRowCenterSpaceArround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignToEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flexDirectionRowSpaceAround: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  RNTextInput: {
    color: '#D0D2D1',
    fontSize: wp(4.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  labelStyle: {
    color: '#9796A1',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  textStyle: {
    color: colors.GREY_3,
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500'
  },
  
  textStyle1: {
    color: colors.GREY_13,
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  textStyle2: {
    color: colors.GREY_3,
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  textStyle12: {
    color: colors.GREY_4,
    fontSize: wp(3.3),
    fontFamily: Fonts.JOST,
    fontWeight: '400'
  },
  textStyle3: {
    color: colors.BLACK,
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    fontWeight: '300'
  },
  textStyle4: {
    color: colors.BLACK,
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle6: {
    color: colors.BLACK_2,
    fontSize: wp(4.5),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle5: {
    color: colors.GREY_5,
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle7: {
    color: colors.GREY_5,
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    fontWeight: '400'
  },
  textStyle8: {
    color: colors.BLACK_2,
    fontSize: wp(4.2),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle9: {
    color: colors.BLACK,
    fontSize: wp(4.5),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle10: {
    color: colors.GREY_4,
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
    fontWeight: '500'
  },
  textStyle11: {
    color: colors.BLACK,
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  textStyle12: {
    color: colors.BLACK,
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500'
  },
  border: {
    borderColor: colors.blackOpacity12,
    borderWidth: 0.5,
    //marginVertical: hp(0.7),
  },
  border1: {
    borderColor: colors.blackOpacity12,
    borderWidth: 0.5,
    marginVertical: hp(1.5),
  },
  spacer1: {
    marginVertical: hp(0.5),
  },
  spacerzeroSeven: {
    marginVertical: hp(0.7),
  },
  spacer: {
    marginVertical: hp(1),
  },
  spacer1Point5: {
    marginVertical: hp(1.5),
  },
  spacer2: {
    marginVertical: hp(2),
  },
  flex1: {
    flex: 1
  }
});
