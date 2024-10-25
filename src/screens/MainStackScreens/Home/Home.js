import React, { useEffect, useState } from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {RNContainer, RNImage, RNText} from '../../../components';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import RNRoundImage from '../../../components/RNRoundImage';
import commonStyles from '../../../styles/commonStyles';
import RNSlider from '../../../components/RNSlider';
import RNButton from '../../../components/RNButton';
import RNProfileHeader from '../../../components/RNProfileHeader';
import {navigationTo} from '../../../navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAPI } from '../../../api';
const cardList = [
  {
    cardTitle: 'Current Balance',
    balance: '00000',
    percent: '14%',
    cardType: 'balance',
    expiry: '',
    cardCategoty: '',
    userName: '',
    cardName: '',
    cardNumber: '',
    cardTypeLogo: Images.masterCardLogo,
    cardTypeText: '',
  },
  {
    cardTitle: 'Financial Services Solution',
    balance: '00000',
    percent: '14%',
    cardType: 'black',
    expiry: '12/25',
    cardCategoty: 'Platinum Plus',
    userName: 'tyest',
    cardName: 'Visa',
    cardNumber: '**** **** **** 8888',
    cardTypeLogo: Images.masterCardLogo1,
    cardTypeText: 'MasterCard',
  },
];

const deductionsList = [
  {
    title: 'Airbnb',
    image: Images.NetflixLogo,
    price: '30,000.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
];
const futureList = [
  {
    title: 'Savings',
    subtitle: 'Speed up your direct deposits',
    image: Images.futureImage,
    linkImg: Images.rightArrowWithBg,
    price: '640 $',
    bgColor: '#F8D33D',
  },
  {
    title: 'Savings',
    subtitle: 'Speed up your direct deposits',
    image: Images.futureImage,
    linkImg: Images.rightArrowWithBg,
    price: '640 $',
    bgColor: '#D7E5FF',
  },
];
const Home = props => {
  const [userData, setUserData] = useState()
  
  useEffect(() => {
    const getUserData = async () => {
      const auth = await AsyncStorage.getItem("auth")
      authAPI.user(auth)
      .then(response => {
        if (response.ok) return response.json()
        throw new Error("Something went wrong")
      })
      .then(json => {
        setUserData(json.user)
      })
      .catch(error => {
        console.error(error)
      })
    }
    getUserData()
  }, [])

  const servicesList = [
    {
      name: 'Send',
      image: Images.send,
      onPress: () => navigationTo(props.navigation, Screens.MoneySenderList),
    },
    {
      name: 'Receive',
      image: Images.receive,
      onPress: () => navigationTo(props.navigation, Screens.MoneyReceiverList),
    },
    {
      name: 'Bill Pay',
      image: Images.billPay,
      //onPress: () => navigationTo(props.navigation, Screens.ElectricityPay),
      //onPress: () => navigationTo(props.navigation, Screens.PhoneRecharge),
      onPress: () => navigationTo(props.navigation, Screens.BillPay),
    },
    {
      name: 'Goals',
      image: Images.goals,
      onPress: () => navigationTo(props.navigation, Screens.MyGoals),
    },
    {
      name: 'Data',
      image: Images.dataImg,
      onPress: () => navigationTo(props.navigation, Screens.AnalysisData),
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={item?.onPress}
        style={commonStyles.alignCenter}>
        <RNImage
          source={item?.image}
          style={styles.serviceImage}
          resizeMode="cover"></RNImage>
        <RNText style={styles.serviceText}>{item?.name}</RNText>
      </TouchableOpacity>
    );
  };
  const services = () => {
    return (
      <View style={commonStyles.marginTopHp2}>
        <FlatList
          horizontal
          data={servicesList}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const spendViewRender = () => {
    return (
      <View
        style={[styles.addpadding2, {...commonStyles.flexDirectionRowCenter}]}>
        <View style={styles.spendContainer}>
          <View style={styles.savedView}>
            <RNImage source={Images.savedImg} style={styles.savedImg}></RNImage>
            <RNText style={styles.savedText}> {' Saved'}</RNText>
          </View>
          <View style={commonStyles.marginTopHp1}>
            <RNText style={styles.priceText}>$ {'2000.00'}</RNText>
          </View>
        </View>
        <View style={styles.spendContainer}>
          <View style={styles.savedView}>
            <RNImage source={Images.spendImg} style={styles.savedImg}></RNImage>
            <RNText style={styles.savedText}> {' Spend'}</RNText>
          </View>
          <View style={commonStyles.marginTopHp1}>
            <RNText style={styles.priceText}>$ {'-2000.00'}</RNText>
          </View>
        </View>
      </View>
    );
  };
  const listHeader = () => {
    return (
      <View style={commonStyles.flexDirectionRow}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNImage
            source={Images.leftArrow}
            style={styles.bootomArrow}></RNImage>
          <RNText style={styles.dateText}> {'7 Apr,2024'}</RNText>
        </View>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNImage source={Images.Search} style={styles.searchIcon}></RNImage>
          <RNImage
            source={Images.Calendar}
            style={[
              styles.searchIcon,
              {...commonStyles.marginLeftWp2},
            ]}></RNImage>
        </View>
      </View>
    );
  };
  const deductions = () => {
    return (
      <FlatList
        data={deductionsList}
        keyExtractor={(item, index) => index}
        renderItem={deductionsItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  };
  const deductionsItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.paddingVertical10,
          {...commonStyles.flexDirectionRowCenter},
        ]}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNRoundImage img={item?.image} />
          <View style={commonStyles.marginLeftWp2}>
            <RNText style={styles.deductionText}> {item?.title}</RNText>
            <RNText style={[styles.savedText, {...commonStyles.fontSizeWp3}]}>
              {' '}
              {item?.type}
            </RNText>
          </View>
        </View>
        <View style={commonStyles.alignToEnd}>
          <RNText style={styles.deductionText}>$ {item?.price}</RNText>
          <RNText style={styles.savedText}>{item?.time}</RNText>
        </View>
      </View>
    );
  };
  const futureView = () => {
    return (
      <FlatList
        horizontal
        data={futureList}
        keyExtractor={(item, index) => index}
        renderItem={futureViewItem}
      />
    );
  };
  const futureViewItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{marginLeft: index > 0 ? 15 : 1}}
        onPress={() => {}}>
        <View style={[styles.futureViewItem, {backgroundColor: item?.bgColor}]}>
          <View>
            <RNText style={styles.futureSavingText}>
              $ {item?.title} {item?.price}
            </RNText>
            <RNText style={styles.futureSubTitle}>{item?.subtitle}</RNText>
          </View>
          <View style={commonStyles.flexDirectionRowSpaceAround}>
            <RNImage source={item?.linkImg} style={styles.searchIcon}></RNImage>
            <RNImage source={item?.image} style={styles.futureImg}></RNImage>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const unlockAccount = () => {
    return (
      <View style={styles.unlockMainView}>
        <RNText style={styles.unloackHeaderText}>
          {Strings.unlockYourSustainableCardAccount}
        </RNText>
        <View style={commonStyles.marginTopHp1}>
          <View style={styles.flexDirectionRowAlignCenter}>
            <RNImage source={Images.treeIcon} style={styles.savedImg}></RNImage>
            <RNText style={styles.unlockText}>
              {Strings.saveTheClimateWithEachEuro}
            </RNText>
          </View>
          <View style={styles.flexDirectionRowAlignCenter}>
            <RNImage source={Images.moneyBag} style={styles.savedImg}></RNImage>
            <RNText style={styles.unlockText}>
              {Strings.saveMoneyInSubCard}
            </RNText>
          </View>
          <View style={styles.flexDirectionRowAlignCenter}>
            <RNImage source={Images.cardBack} style={styles.savedImg}></RNImage>
            <RNText style={styles.unlockText}>
              {Strings.payWithAbeautifulCard}
            </RNText>
          </View>
        </View>
        <View>
          <RNButton
           onPress={()=>navigationTo(props.navigation,Screens.KycDocuments)}
            activeOpacity={0.5}
            title={Strings.unlockDebitCard}
            style={styles.unlockDebitCard}
            borderRadius={10}
            textStyle={styles.unlockDebitCardtextStyle}></RNButton>
        </View>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNProfileHeader user={userData} navigation={props.navigation} />
      <View style={styles.sliderView}>
        <RNSlider data={cardList} type={'card'} />
      </View>
      {services()}
      {spendViewRender()}
      <View style={commonStyles.marginTopHp3}>{listHeader()}</View>
      <View style={commonStyles.marginTopHp1}>{deductions()}</View>
      <RNText style={styles.futureText}>{Strings.future}</RNText>
      <View style={commonStyles.marginTopHp1}>{futureView()}</View>
      {unlockAccount()}
    </RNContainer>
  );
};

export default Home;
