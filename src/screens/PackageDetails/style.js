import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {Fonts, hp, wp} from '../../constants';

const styles = StyleSheet.create({
  packageContainer: {
    borderWidth: 1,
    borderColor: colors.LN_FIRST,
    marginTop: hp(2),
    backgroundColor: colors.yellowBg2,
    paddingVertical: hp(3),
    borderRadius: 5,
  },
  centerAlign: {
    alignItems: 'center',
  },
  packageName: {
    fontSize: wp(6),
    fontWeight: 'bold',
    fontFamily: Fonts.JOST,
  },
  saleTax: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(5.5),
  },
  salesTaxLabel: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_6,
  },
  divider: {
    height: 0.8,
    width: wp(45),
    marginVertical: hp(1),
    backgroundColor: colors.GREY_7,
  },
  monthlyFee: {
    fontFamily: Fonts.JOST,
    fontSize: wp(4),
    fontWeight: '500',
    marginVertical: hp(2),
  },
  buyNowText: {
    fontSize: wp(4.5),
  },
  buyNowButton: {
    width: wp(45),
    marginTop: hp(2),
  },
  featuresContainer: {
    backgroundColor: colors.lightBlue,
    width: wp(65),
    paddingVertical: hp(1),
    alignItems: 'center',
    marginTop: hp(2),
    borderRadius: 5,
  },
  featuresText: {
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
  },
  separator: {
    width: '95%',
    height: 1,
    backgroundColor: colors.GREY_6,
    opacity: 0.2,
    marginVertical: hp(2),
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureImage: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2),
  },
  featureLabel: {
    fontFamily: Fonts.JOST,
    fontSize: wp(4.5),
  },
  featuresList: {
    width: '100%',
    marginTop: hp(2),
  },
  featureRow: {
    flexDirection: 'row',
    marginVertical: hp(1),
    flex: 1,
    paddingLeft: wp(2),
    alignItems: 'center',
  },
  checkIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(3),
    marginTop: 2,
  },
  featureDescription: {
    fontFamily: Fonts.JOST,
    flex: 1,
  },
});
export default styles;
