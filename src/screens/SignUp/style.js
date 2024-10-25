import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../constants';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  logo: {
    height: wp(50),
    width: wp(60),
    alignSelf: 'center',
    marginTop: hp(1),
  },
  signInText: {
    fontSize: wp(6),
    fontWeight: '600',
  },
  loginText: {
    color: colors.GREY_4,
    fontSize: wp(3.5),
    marginVertical: hp(1.5),
  },
  emailInputContainer: {
    marginTop: hp(1),
  },
  rememberForgotContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberContainer: {
    flexDirection: 'row',
  },
  rememberText: {
    color: colors.GREY_2,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: colors.BLACK_1,
  },
  loginButton: {
    marginTop: hp(4),
    marginHorizontal: wp(5),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  dontHaveAccText: {
    color: colors.BLACK_4,
  },
  signUpButton: {
    marginLeft: wp(2),
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontFamily: Fonts.POPPINS_BOLD,
  },
  createAccountContainer: {
    paddingHorizontal: wp(5),
  },
  drivingVerificationText: {
    fontSize: wp(5.5),
    marginTop: hp(3),
    fontWeight: '600',
    paddingHorizontal: wp(3.1),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  documentContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
  },
  documentLabel: {
    opacity: 0.6,
    fontFamily: Fonts.JOST,
  },
  uploadContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: colors.LN_TWO,
    borderRadius: 6,
    paddingVertical: hp(1.5),
    shadowColor: '#D3D1D8',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    backgroundColor: colors.WHITE,
  },
  uploadImage: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(2),
  },
  uploadText: {
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
  },
  uploadSubText: {
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  buyCardContainer: {
    backgroundColor: colors.yellowBg,
    marginTop: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: wp(6),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buyCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  packageName: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '600',
    fontSize: wp(6),
  },
  arrowContainer: {
    width: wp(8),
    height: wp(8),
    backgroundColor: colors.LN_FIRST,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(8),
  },
  arrowImage: {
    width: wp(3),
    height: wp(3),
  },
  packageDescription: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_5,
    fontSize: wp(4),
    marginTop: hp(1),
  },
  packageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  saleTax: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '600',
    fontSize: wp(5),
  },
  serviceFeeText: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_5,
    fontSize: wp(4),
  },
  buyButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buyNowText: {
    fontSize: wp(3.8),
    color: colors.GREY_5,
  },
  buyNowButton: {
    width: '75%',
    height: hp(6),
  },
  buyPackagesContainer: {
    paddingHorizontal: wp(5),
  },
  progressBarContainer: {
    marginBottom: hp(2),
  },
  progressBar: {
    marginHorizontal: wp(5),
  },

    padding: {
    paddingHorizontal: wp(5),
  },

  greenDiscount: {
    height: wp(6),
    width: wp(6),
  },
  discount: {
    color: '#5ABF73',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400',
    marginLeft: wp(2),
  },
  discountView: {
    backgroundColor: '#F1FFE9',
    paddingHorizontal: wp(2.5),
    marginBottom: wp(-1.7),
    zIndex: 99999,
    paddingVertical: wp(1),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: wp(3),
  },
  insuranceLogo: {
    height: wp(12),
    width: wp(12),
  },
  carSupreme: {
    color: '#7D7272',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '300',
  },
  carSupreme1: {
    color: '#BDBDBD',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '300',
    marginLeft: wp(2.5)
  },
  viewPolicy: {
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
  },
  buyNowView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellowBg,
    borderRadius: 10,
    padding: wp(1),
  },
  marginLeftWp2: {
    marginLeft: wp(2),
  },
  outerpadding: {
    borderColor: colors.blackOpacity12,
    borderWidth: 0.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  marginLeftWp2: {
    marginLeft: wp(2),
  },
  listfooter: {},
  textwidth: {
    width: wp(50),
  }
});
export default styles;
