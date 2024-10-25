import {
  FlatList,
  Image,
  ImageBackground,
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
  RNSearchBar,
  RNText,
  TextGradient,
} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationTo} from '../../../navigations';

export default function BillPay({navigation}) {
  const [currentMonth, setCurrentMonth] = useState(0);

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
  const services = [
    {
      image: Images.electicityIcon,
      name: 'Electricity',
    },
    {
      image: Images.internetIcon,
      name: 'Internet',
    },
    {
      image: Images.phoneIcon1,
      name: 'Phone',
    },
    {
      image: Images.insuranceIcon,
      name: 'Insurance',
    },
    {
      image: Images.investmentIcon,
      name: 'Investments',
    },
    {
      image: Images.receiptIcon,
      name: 'Recipts',
    },
    {
      image: Images.claimIcon1,
      name: 'Claim',
    },
    {
      image: Images.marketPlaceIcon,
      name: 'Marketplace',
    },
    {
      image: Images.marketPlaceIcon,
      name: 'Subscriptions',
    },
  ];

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
  const goToNavigation = index => {
    if (index == 0) {
      navigationTo(navigation, Screens.ElectricityPay);
    } else if (index == 1) {
      //navigationTo(navigation,Screens.ElectricityPay)
    } else if (index == 2) {
      navigationTo(navigation, Screens.PhoneRecharge);
    } else if (index == 3) {
      navigationTo(navigation, Screens.Insurance);
    }else if (index == 4) {
      navigationTo(navigation, Screens.Investments);
    }else if (index == 5) {
      navigationTo(navigation, Screens.Receipts);
    }else if (index == 6) {
      //navigationTo(navigation, Screens.Loan);
      navigation.push(Screens.Loans,{isShowBackBtn: true})
    }else if (index == 7) {
      //navigationTo(navigation, Screens.Loan);
      navigation.push(Screens.MarketPlace)
    }else if (index == 8) {
      navigation.push(Screens.Subscription)
    }
    
     else {
    }
  };
  const renderServices = ({item, index}) => {
    return (
      <View style={styles.serviceView}>
        <TouchableOpacity
          style={commonStyles.alignCenter}
          onPress={() => goToNavigation(index)}>
          <Image source={item.image} style={styles.serviceIcon}></Image>
          <RNText style={styles.serviceName}>{item.name}</RNText>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <RNContainer useScroll backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <>
          <RNHeader
            containerStyle={styles.header}
            title={Strings.billPay}></RNHeader>
          <View style={commonStyles.spacer2} />
          <RNSearchBar
            placeholder={'Search'}
            containerStyle={styles.searchBar}></RNSearchBar>
        </>
        <View style={commonStyles.spacer1Point5} />
        <View style={styles.serviceListOuterView}>
          <RNText style={styles.serviceText}>{Strings.services}</RNText>
          <FlatList
            numColumns={4}
            data={services}
            renderItem={renderServices}></FlatList>
        </View>
        <View style={commonStyles.spacer} />
        <TextGradient
          style={styles.allTransactionsText}
          text={'All Transactions'}></TextGradient>
        <View style={styles.transactionsContainer}>
          <FlatList
            contentContainerStyle={styles.transactionsList}
            data={transactionData}
            renderItem={renderTransaction}></FlatList>
        </View>
      </ImageBackground>
    </RNContainer>
  );
}
