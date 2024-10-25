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
import ReceiptSuccesModal from '../../../components/ReceiptSuccesModal';

export default function Receipts({navigation}) {
  const [successModal, setSuccessModal] = useState(false);

  const transactionData = [
    {
      title: 'Auto Marketplace',
      date: '2021 Volvo XC40',
      price: '$ 1,000,000',
      color: colors.greenColor,
      bgColor: colors.PINK_2,
      icon: Images.successTick,
    },
    {
      title: 'Auto Marketplace',
      date: '2021 Volvo XC40 ',
      price: '$ 1,000,000',
      color: colors.greenColor,
      bgColor: colors.PURPLE_3,
      icon: Images.successTick,
    },
    {
      title: 'Auto Marketplace',
      date: '2021 Volvo XC40 ',
      price: '$ 1,000,000',
      color: colors.greenColor,
      bgColor: colors.YELLOW_3,
      icon: Images.successTick,
    },
    {
      title: 'Auto Marketplace',
      date: '2021 Volvo XC40 ',
      price: '$ 1,000,000',
      color: colors.greenColor,
      bgColor: colors.LIGHT_GREEN_2,
      icon: Images.successTick,
    },
    {
      title: 'Auto Marketplace',
      date: '2021 Volvo XC40 ',
      price: '$ 1,000,000',
      color: colors.greenColor,
      bgColor: colors.PURPLE_4,
      icon: Images.successTick,
    },
  ];

  const renderTransaction = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>{setSuccessModal(true)}}>
      <View style={[styles.transaction, {backgroundColor: colors.PURPLE_2}]}>
        <View>
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
      </TouchableOpacity>
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
            title={Strings.digitalRecipts}></RNHeader>
          <View style={commonStyles.spacer2} />
          <RNSearchBar
            placeholder={'Search'}
            containerStyle={styles.searchBar}></RNSearchBar>
        </>
        <View style={commonStyles.spacer} />

        <View style={commonStyles.flexDirectionRowCenter}>
          <RNText style={styles.transactionTitle}>
            {Strings.AllPaymentsRecipts}
          </RNText>
          <View style={commonStyles.flexRow}>
            <Image source={Images.filterIcon} style={styles.filterIcon}></Image>
            <TextGradient
              style={styles.Fillter}
              text={'Fillter'}></TextGradient>
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={styles.transactionsContainer}>
          <FlatList
            contentContainerStyle={styles.transactionsList}
            data={transactionData}
            renderItem={renderTransaction}></FlatList>
        </View>
        <ReceiptSuccesModal
         isVisible={successModal}
         onpressClose={()=>{
          setSuccessModal(false)
        }}
        />
      </ImageBackground>
    </RNContainer>
  );
}
