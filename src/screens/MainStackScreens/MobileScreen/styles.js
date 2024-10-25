import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  header: {
    color: '#342929',
    fontSize: wp(4.5),
    fontWeight: '600',
    fontFamily: Fonts.POPPINS_REGULAR
  },
  mainTitle: {
    fontSize: wp(5),
    fontWeight: '500',
    marginTop: hp(2),
  },
  labelStyle: {
    fontSize: wp(4),
    fontWeight: '400',
    color: colors.GREY_3,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  textInput: {
    fontSize: wp(3.5),
    fontWeight: '400',
    color: colors.GREY_2,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  declineBtn: {
    borderColor: colors.redColor,
    borderWidth: 1,
    borderRadius: hp(3.5),
    height: hp(6),
  },
  title: {
    color: colors.redColor,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },

  dropdown: {
    height: hp(6.5),
    borderColor: colors.GREY,
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: wp(3.5),
  },
  placeholderStyle: {
    fontSize: wp(3.5),
    color: colors.GREY_2,
    fontWeight: '400',
  },
  selectedTextStyle: {
    fontSize: wp(4),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdownIcon: {
    width: wp(4),
    height: wp(4),
  },
  lableDropdown: {
    fontSize: wp(4),
    fontWeight: '400',
    color: colors.GREY_3,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginVertical: hp(1),
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end'  }
});
export default styles;
