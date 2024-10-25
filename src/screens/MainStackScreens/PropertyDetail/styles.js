import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {Fonts, hp, wp} from '../../../constants';
import {screenWidth} from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
  name: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  name1: {
    fontWeight: '600',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  padding10: {
    padding: wp(3),
  },
  upload: {
    width: wp(6),
    height: wp(6),
  },
  star: {
    width: wp(5),
    height: wp(5),
    marginLeft: wp(1.5),
  },
  uploadLikeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(2),
  },
  marginRight3: {
    marginRight: wp(3),
  },
  nameBigger: {
    fontWeight: '700',
    fontSize: wp(4.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  address: {
    fontWeight: '400',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.GREY_4,
  },
  nameBigger1: {
    fontWeight: '700',
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
  },
  preview: {
    fontWeight: '700',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#101010',
  },
  previewImg: {
    width: wp(25),
    height: wp(25),
  },
  propertyInfoMainView: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: wp(2),
    marginTop: hp(2),
  },
  monthlyRent: {
    fontWeight: '400',
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    color: colors.GREY_5,
  },
  callOut: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  borderSet: {
    borderRightColor: '#D9D9D9',
    borderRightWidth: 1,
    height: hp(5),
  },
  moveInMainView: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    padding: wp(2),
    marginTop: hp(2),
    backgroundColor: colors.yellowBg,
  },
  moveInSpecial: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    color: colors.BLACK,
  },
  discountIcon: {
    width: wp(4),
    height: wp(4),
    marginLeft: wp(2),
  },
  discountDesc: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.GREY_4,
  },
  pricingFloor: {
    fontWeight: '700',
    fontSize: wp(4.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  tabBtn: {
    height: hp(5),
    width: screenWidth / 6,
  },
  textStyle: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  tabViewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: hp(1),
  },
  studio: {
    fontWeight: '600',
    fontSize: wp(4.2),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  studioPrice: {
    fontWeight: '500',
    fontSize: wp(4.2),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  studioPriceThin: {
    fontWeight: '400',
    fontSize: wp(4.2),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  previewImg: {
    width: wp(25),
    height: wp(25),
  },
  floorPlan: {
    width: wp(35),
    height: wp(35),
  },
  tourThisFloorPlan: {
    borderColor: colors.greenColor,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: wp(1),
  },
  tourThisFloorPlanText: {
    fontWeight: '600',
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.greenColor,
  },
  emailBtn: {
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    marginTop: wp(1),
  },
  emailBtn: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    width: screenWidth/2.2,
    height: hp(5)
  },
  buyBtn: {
    backgroundColor: colors.greenColor,
    borderRadius: 20,
    width:  screenWidth/2.2,
    height: hp(5)
  },
  emailBtntext: {
    fontWeight: '600',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.BLACK_2,
  },
  buyBtnText: {
    fontWeight: '600',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: colors.WHITE,
  }
});
export default styles;
