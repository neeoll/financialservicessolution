import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  yearText: {
    fontWeight: '500',
  },
  selectedMonth: {
    width: wp(15),
    height: wp(15),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
   // marginTop: wp(1),
    borderColor: colors.yellowBorder,
    borderWidth: 1
  },
  selectedMonthText: {
    color: colors.WHITE,
    fontWeight: '500',
  },
  month: {
    width: wp(12),
    height: wp(12),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREY_16,
    marginTop: wp(1),
  },
  monthText: {
    color: colors.BLACK,
    fontWeight: '500',
  },
  monthTouchable: {
    
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
    backgroundColor:colors.WHITE
  },
  textStyle: {
    color: colors.BLACK_2,
    fontSize: wp(4),
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  textStyle2: {
    color: colors.GREY_2,
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400'
  },
  checkBox: { borderColor: "#D9D1E0", borderRadius: 4 }
});
