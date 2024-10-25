import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
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
    width: '80%',
    height: hp(5),
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
});
export default styles;
