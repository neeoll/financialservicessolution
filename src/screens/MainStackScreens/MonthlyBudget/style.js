import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  budgetContainer: {
    backgroundColor: colors.PURPLE_2,
    padding: wp(5),
    borderRadius: 15,
    marginTop: hp(2),
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthText: {
    fontWeight: '500',
  },
  monthRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrowImage: {
    width: wp(4),
    height: wp(4),
    tintColor: colors.BLACK,
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
    marginLeft: wp(2),
  },
  pieChartContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
  },
  pieChartText: {
    fontFamily: Fonts.POPPINS_EXTRABOLD,
    fontSize: wp(4),
  },
  pieChartDetailsContainer: {
    marginLeft: wp(2),
    flex: 1,
  },
  pieChartDetailsText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(6),
  },
  pieChartDetailsLeftContainer: {
    borderColor: colors.GREY_4,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(2),
    alignSelf: 'flex-start',
    paddingHorizontal: wp(3),
  },
  pieChartDetailsLeftText: {
    color: colors.GREY_4,
  },
  pieChartLegendContainer: {
    marginLeft: wp(2),
  },
  pieChartLegendItem: {
    flexDirection: 'row',
  },
  pieChartLegendItemMargin: {
    marginTop: wp(4),
  },
  pieChartLegendColor: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(5),
    marginRight: wp(2),
  },
  pieChartLegendGradient: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(5),
    marginRight: wp(2),
  },
  separator: {
    height: 0.5,
    backgroundColor: colors.BLACK_6,
    marginVertical: hp(2),
    opacity: 0.3,
  },
  totalBudgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalBudgetText: {
    fontWeight: '600',
    color: colors.GREY_5,
  },
  totalBudgetAmount: {
    fontWeight: '500',
    color: colors.BLACK_6,
    opacity: 0.7,
  },
  incomeContainer: {
    backgroundColor: colors.lightBlue,
    padding: wp(5),
    borderRadius: 10,
    marginTop: hp(2),
  },
  incomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incomeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incomeIconContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incomeIcon: {
    width: wp(5),
    height: wp(5),
  },
  incomeTitle: {
    color: colors.BLACK_1,
    fontWeight: '500',
    marginLeft: wp(4),
  },
  incomeAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  incomeAmount: {
    color: colors.LIGHT_GREEN_5,
    fontWeight: '600',
    fontSize: wp(4.5),
  },
  penIcon: {
    width: wp(4),
    height: wp(4),
    marginLeft: wp(2),
    resizeMode: 'contain',
  },
  incomeBarContainer: {
    backgroundColor: colors.GREY_21,
    height: 8,
    borderRadius: 5,
    marginTop: hp(2),
  },
  incomeBar: {
    width: '70%',
    height: 8,
    borderRadius: 5,
  },
  totalExpensesContainer: {
    borderRadius: 10,
    marginTop: hp(2),
    flexDirection: 'row',
    padding: wp(5),
    backgroundColor: colors.WHITE,
  },
  totalExpensesDetails: {
    flex: 1,
  },
  totalExpensesTitle: {
    fontSize: wp(5),
  },
  totalExpensesAmount: {
    fontSize: wp(9),
    fontWeight: '500',
  },
  totalExpensesChangeContainer: {
    backgroundColor: colors.GREY_5,
    alignSelf: 'flex-start',
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderRadius: 5,
    marginTop: hp(2),
  },
  totalExpensesChange: {
    fontWeight: '600',
    fontSize: wp(3),
  },
  totalExpensesGraph: {
    width: wp(25),
    height: '100%',
    resizeMode: 'contain',
  },
  allExpensesTitle: {
    color: colors.GREY_5,
    fontSize: wp(5),
    fontWeight: '600',
    marginVertical: hp(2),
  },
  expenseItemContainer: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  expenseIconContainer: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseIcon: {
    width: wp(6),
    height: wp(6),
  },
  expenseDetailsContainer: {
    marginLeft: wp(2),
    flex: 1,
  },
  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseTitle: {
    color: colors.BLACK_1,
    fontWeight: '500',
    fontSize: wp(4),
  },
  expenseAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseAmount: {
    color: colors.BLACK_1,
    fontWeight: '500',
    fontSize: wp(4),
  },
  expensePenIcon: {
    width: wp(4),
    height: wp(4),
    marginLeft: wp(2),
    resizeMode: 'contain',
    tintColor: colors.BLACK_1,
  },
  expenseLoaderBackground: {
    height: 8,
    borderRadius: 5,
    marginTop: hp(1.5),
  },
  expenseLoaderForeground: {
    width: '70%',
    height: 8,
    borderRadius: 5,
  },
  expenseLoaderText: {
    color: colors.BLACK_2,
    fontWeight: '500',
    fontSize: wp(4.5),
    marginTop: hp(1.5),
  },
  addButton: {
    width: wp(50),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
