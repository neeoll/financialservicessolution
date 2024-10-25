import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  selectMember: {
    color: colors.GREY_4,
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '300',
  },
  self: {
    color: colors.GREY_5,
    fontSize: wp(4.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '500',
  },
  subheader: {
    backgroundColor: colors.GREY_10,
    paddingHorizontal: wp(7),
    paddingVertical: wp(1),
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
  listfooter: {},
  outerpadding: {
    borderColor: colors.blackOpacity12,
    borderWidth: 0.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textwidth: {
    width: wp(50),
  }
});
