import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNContainer, RNHeader, RNText, TextGradient} from '../../../components';
import {Fonts, hp, Images, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import {PieChart} from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';
import RNButton from '../../../components/RNButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './style';
const pieData = [
  {value: 70, color: 'orange'},
  {value: 30, color: colors.GREY_18},
];

export default function MonthlyBudget({}) {
  const {bottom} = useSafeAreaInsets();
  const expensesData = [
    {
      title: 'Food',
      icon: Images.restaurant,
      bgIcon: colors.LIGHT_GREEN_6,
      title2: '$600 left',
      title3: '$750 of $1365',
      loaderColor1: '#32D74B',
      loaderColor2: '#A8D2AF',
    },
    {
      title: 'Shopping',
      icon: Images.trolly,
      bgIcon: colors.LN_FIRST,
      title2: '$400 left',
      title3: '$750 of $1365',
      loaderColor1: colors.LN_FIRST,
      loaderColor2: '#C6B0E7',
    },
    {
      title: 'Restaurants & Cafes',
      icon: Images.coffee,
      bgIcon: '#FF9F0A',
      title2: '$300 left',
      title3: '$750 of $1365',
      loaderColor1: '#FF9F0A',
      loaderColor2: '#E4D3B9',
    },
    {
      title: 'Health',
      icon: Images.medicine,
      bgIcon: '#64D2FF',
      title2: '$200 left',
      title3: '$750 of $1365',
      loaderColor1: '#64D2FF',
      loaderColor2: '#B7DAE9',
    },
  ];

  const pieChart = () => {
    return (
      <View>
        <PieChart
          donut
          innerRadius={wp(6)}
          radius={wp(8)}
          innerCircleColor={colors.GREY_11}
          data={pieData}
          centerLabelComponent={() => {
            return <TextGradient text={'70%'} style={styles.pieChartText} />;
          }}
        />
      </View>
    );
  };

  return (
    <>
      <RNContainer useScroll backgroundColor={colors.GREY_11}>
        <RNHeader title={Strings.data} />
        <View style={styles.budgetContainer}>
          {/* Month */}
          <View style={styles.monthContainer}>
            <RNText style={styles.monthText}>August Budget</RNText>
            <View style={styles.monthRightContainer}>
              <RNText>August</RNText>
              <Image
                source={Images.rightArrow}
                style={styles.rightArrowImage}
              />
            </View>
          </View>
          {/* pie chart container */}
          <View style={styles.pieChartContainer}>
            {pieChart()}
            <View style={styles.pieChartDetailsContainer}>
              <RNText style={styles.pieChartDetailsText}>$1,589</RNText>
              <View style={styles.pieChartDetailsLeftContainer}>
                <RNText style={styles.pieChartDetailsLeftText}>Left</RNText>
              </View>
            </View>
            <View style={styles.pieChartLegendContainer}>
              <View style={styles.pieChartLegendItem}>
                <View
                  style={[
                    styles.pieChartLegendColor,
                    {backgroundColor: colors.GREY_18},
                  ]}
                />
                <RNText>%47 Shopping</RNText>
              </View>
              <View
                style={[
                  styles.pieChartLegendItem,
                  styles.pieChartLegendItemMargin,
                ]}>
                <LinearGradient
                  colors={[colors.LN_FIRST, colors.LN_TWO]}
                  style={styles.pieChartLegendGradient}
                />
                <RNText>%28 Bills</RNText>
              </View>
            </View>
          </View>
          {/* separator */}
          <View style={styles.separator} />
          {/* Total budget */}
          <View style={styles.totalBudgetContainer}>
            <RNText style={styles.totalBudgetText}>Total Budget:</RNText>
            <RNText style={styles.totalBudgetAmount}>
              $782 of $2,569 Spend
            </RNText>
          </View>
        </View>
        {/* Income */}
        <View style={styles.incomeContainer}>
          <View style={styles.incomeHeader}>
            <View style={styles.incomeTitleContainer}>
              <LinearGradient
                colors={[colors.LN_FIRST, colors.LN_TWO]}
                style={styles.incomeIconContainer}>
                <Image source={Images.downArrow} style={styles.incomeIcon} />
              </LinearGradient>
              <RNText style={styles.incomeTitle}>Income</RNText>
            </View>

            <View style={styles.incomeAmountContainer}>
              <RNText style={styles.incomeAmount}>$23,000</RNText>
              <Image source={Images.pen} style={styles.penIcon} />
            </View>
          </View>
          <View style={styles.incomeBarContainer}>
            <LinearGradient
              colors={[colors.LN_FIRST, colors.LN_TWO]}
              style={styles.incomeBar}
            />
          </View>
        </View>
        {/* total expenses */}
        <ImageBackground
          resizeMode="stretch"
          source={Images.dataBg1}
          style={styles.totalExpensesContainer}>
          <View style={styles.totalExpensesDetails}>
            <RNText style={styles.totalExpensesTitle}>Total expenses</RNText>
            <RNText style={styles.totalExpensesAmount}>$29,100.50</RNText>
            <View style={styles.totalExpensesChangeContainer}>
              <TextGradient
                text={'+0.25%'}
                style={styles.totalExpensesChange}
              />
            </View>
          </View>
          <Image source={Images.graph} style={styles.totalExpensesGraph} />
        </ImageBackground>
        {/* all expenses */}
        <RNText style={styles.allExpensesTitle}>All Expenses</RNText>

        {expensesData.map((itm, index) => {
          return (
            <ImageBackground
              key={index}
              borderRadius={10}
              source={Images.dataBg2}
              style={styles.expenseItemContainer}>
              <View
                style={[
                  styles.expenseIconContainer,
                  {backgroundColor: itm.bgIcon},
                ]}>
                <Image source={itm.icon} style={styles.expenseIcon} />
              </View>
              <View style={styles.expenseDetailsContainer}>
                <View style={styles.expenseHeader}>
                  <View style={styles.expenseTitleContainer}>
                    <RNText style={styles.expenseTitle}>{itm.title}</RNText>
                  </View>

                  <View style={styles.expenseAmountContainer}>
                    <RNText style={styles.expenseAmount}>{itm.title2}</RNText>
                    <Image source={Images.pen} style={styles.expensePenIcon} />
                  </View>
                </View>
                <View
                  style={[
                    styles.expenseLoaderBackground,
                    {backgroundColor: itm.loaderColor2},
                  ]}>
                  <View
                    style={[
                      styles.expenseLoaderForeground,
                      {backgroundColor: itm.loaderColor1},
                    ]}
                  />
                </View>
                <RNText style={styles.expenseLoaderText}>$750 of $1365</RNText>
              </View>
            </ImageBackground>
          );
        })}
        <View style={{height: bottom * 2}}></View>
      </RNContainer>
      <RNButton
        style={[styles.addButton, {marginBottom: bottom}]}
        title={'+ Add New'}
        round
      />
    </>
  );
}
