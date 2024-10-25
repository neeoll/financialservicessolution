import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import CustomLineChart from './CustomLineChart';
import LinearGradient from 'react-native-linear-gradient';
import CustomPieChart from './CustomPieChart';
import styles from './styles';
import {navigationTo} from '../../../navigations';
export default function AnalysisData({navigation}) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const arrayPieChart = [
    {color: colors.LIGHT_GREEN_2, value: 70, title: 'Income'},
    {color: colors.PINK_2, value: 80, title: 'Outcome'},
    {color: colors.LIGHT_GREEN_3, value: 60, title: 'Savings'},
  ];
  const stackData = [
    {image: Images.dollar2, color: '#A88FF1'},
    {image: Images.trolly, color: '#F18F8F'},
    {image: Images.heart2, color: '#F1CA8F'},
    {image: Images.wallet, color: '#CDEAA9'},
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const transactionData = [
    {
      title: 'Food Shopping',
      date: 'July 16',
      price: '-$400',
      color: colors.GREY_5,
      bgColor: colors.PINK_2,
      icon: Images.trolly,
    },
    {
      title: 'Salary Payment',
      date: 'July 15',
      price: '+$8000',
      color: colors.LIGHT_GREEN_4,
      bgColor: colors.PURPLE_3,
      icon: Images.dollar2,
    },
    {
      title: 'Health Expenses',
      date: 'July 14',
      price: '+$370.00',
      color: colors.GREY_5,
      bgColor: colors.YELLOW_3,
      icon: Images.heart2,
    },
    {
      title: 'Freelance Payment',
      date: 'July 10',
      price: '+$1,200',
      color: colors.LIGHT_GREEN_4,
      bgColor: colors.LIGHT_GREEN_2,
      icon: Images.wallet,
    },
    {
      title: 'House Bills',
      date: 'July 9',
      price: '+$1,200',
      color: colors.GREY_5,
      bgColor: colors.PURPLE_4,
      icon: Images.home2,
    },
  ];

  const renderMonth = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setCurrentMonth(index)}
        style={styles.monthTouchable}>
        <RNText style={styles.yearText}>2023</RNText>
        {index == currentMonth ? (
          <LinearGradient
            colors={[colors.LN_FIRST, colors.LN_TWO]}
            style={styles.selectedMonth}>
            <RNText style={styles.selectedMonthText}>{months[index]}</RNText>
          </LinearGradient>
        ) : (
          <View style={styles.month}>
            <RNText style={styles.monthText}>{months[index]}</RNText>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderTransaction = ({item}) => {
    return (
      <View style={[styles.transaction, {backgroundColor: colors.PURPLE_2}]}>
        <View style={[styles.transactionIcon, {backgroundColor: item.bgColor}]}>
          <Image source={item.icon} style={styles.transactionImage}></Image>
        </View>
        <View style={styles.transactionDetails}>
          <RNText style={styles.transactionTitle}>{item.title}</RNText>
          <RNText style={styles.transactionDate}>{item.date}</RNText>
        </View>
        <RNText style={[styles.transactionPrice, {color: item.color}]}>
          {item.price}
        </RNText>
      </View>
    );
  };

  return (
    <RNContainer
      useScroll
      hideHorizontalPadding
      backgroundColor={colors.GREY_11}>
      <>
        <RNHeader
          containerStyle={styles.header}
          rightComponent={() => (
            <TouchableOpacity style={styles.calendarButton}>
              <RNImage
                style={styles.calendarIcon}
                source={Images.Calendar3}></RNImage>
            </TouchableOpacity>
          )}
          title={'Data'}></RNHeader>
        <TextGradient
          text={Strings.currentMonth}
          style={styles.currentMonthText}></TextGradient>
        <View style={styles.calendarContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={new Array(12).fill('')}
            renderItem={renderMonth}></FlatList>
        </View>
        <CustomLineChart
          containerStyle={styles.lineChartContainer}></CustomLineChart>
        <View style={styles.pieChartContainer}>
          {arrayPieChart.map((itm, index) => {
            return (
              <View style={styles.pieChartItem} key={index}>
                <CustomPieChart
                  color={itm.color}
                  value={itm.value}></CustomPieChart>
                <View style={styles.pieChartTextContainer}>
                  <RNText style={styles.pieChartTextTitle}>{itm.title}</RNText>
                  <RNText style={styles.pieChartTextValue}>$ 22,600.00</RNText>
                </View>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigationTo(navigation, Screens.MonthlyBudget);
          }}
          style={styles.budgetContainer}>
          <View style={styles.budgetHeader}>
            <View>
              <TextGradient
                style={styles.budgetText}
                text={'Monthly Budget'}></TextGradient>
              <View style={styles.budgetAmount}>
                <TextGradient
                  style={styles.budgetAmountText}
                  text={'$14500/'}></TextGradient>
                <RNText style={styles.budgetTotalText}>$253,00</RNText>
              </View>
            </View>
            <View style={styles.stackIcons}>
              {stackData.map((itm, indx) => (
                <View
                  style={[styles.stackIcon, {backgroundColor: itm.color}]}
                  key={indx}>
                  <Image
                    source={itm.image}
                    style={styles.stackIconImage}></Image>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.dailyBudgetContainer}>
            <Image
              source={Images.roundTopArrow}
              style={styles.dailyBudgetIcon}></Image>
            <RNText style={styles.dailyBudgetText}>
              Daily budget was ($26.45 - 45.33), Saved $340
            </RNText>
          </View>
        </TouchableOpacity>
        <TextGradient
          style={styles.allTransactionsText}
          text={'All Transactions'}></TextGradient>
      </>
      <View style={styles.transactionsContainer}>
        <FlatList
          contentContainerStyle={styles.transactionsList}
          data={transactionData}
          renderItem={renderTransaction}></FlatList>
      </View>
    </RNContainer>
  );
}
