import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  calendarButton: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    width: wp(6),
    height: wp(6),
  },
  currentMonthText: {
    padding: wp(5),
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  calendarContainer: {
    backgroundColor: colors.WHITE,
    padding: wp(5),
    borderRadius: 15,
  },
  monthTouchable: {
    alignItems: 'center',
    marginRight: wp(5),
  },
  yearText: {
    fontWeight: '500',
  },
  selectedMonth: {
    width: wp(12),
    height: wp(12),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(1),
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
  lineChartContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
    width: wp(85),
  },
  pieChartContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    marginTop: hp(2),
    backgroundColor: colors.lightBlue3,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    paddingTop: wp(5),
    borderRadius: 10,
  },
  pieChartItem: {
    flex: 1,
    alignItems: 'center',
  },
  pieChartTextContainer: {
    alignItems: 'center',
    backgroundColor: colors.YELLOW_2,
    padding: wp(2),
    width: '90%',
    top: -wp(6),
  },
  pieChartTextTitle: {
    color: colors.GREY_4,
    fontWeight: '500',
    fontSize: wp(3),
  },
  pieChartTextValue: {
    color: colors.GREY_5,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(3),
  },
  budgetContainer: {
    backgroundColor: '#F2EFEF',
    marginHorizontal: wp(5),
    padding: wp(5),
    borderRadius: 10,
    marginTop: hp(2),
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetText: {
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  budgetAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(1),
  },
  budgetAmountText: {
    fontSize: wp(4.5),
    fontWeight: '600',
  },
  budgetTotalText: {
    fontSize: wp(4.5),
    fontWeight: '600',
    opacity: 0.5,
  },
  stackIcons: {
    flexDirection: 'row',
  },
  stackIcon: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(-2),
  },
  stackIconImage: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
  },
  dailyBudgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  dailyBudgetIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  dailyBudgetText: {
    fontSize: wp(3),
    marginLeft: wp(1),
    color: colors.GREY_19,
    fontWeight: '500',
  },
  allTransactionsText: {
    fontSize: wp(5),
    marginVertical: hp(2),
    marginHorizontal: wp(5),
    fontWeight: '500',
  },
  transactionsContainer: {
    paddingHorizontal: wp(0),
  },
  transactionsList: {
    paddingBottom: hp(2),
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(5),
    borderRadius: 15,
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
  },
  transactionIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: wp(2),
  },
  transactionTitle: {
    fontWeight: '500',
  },
  transactionDate: {
    color: colors.BLACK_6,
    opacity: 0.8,
    marginTop: hp(1),
  },
  transactionPrice: {
    fontWeight: '500',
    fontSize: wp(4.5),
  },
});
