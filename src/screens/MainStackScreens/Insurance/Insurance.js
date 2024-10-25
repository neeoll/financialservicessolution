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
import {Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationTo} from '../../../navigations';
import RNTransParentBtn from '../../../components/RNTransParentBtn';

export default function Insurance({navigation}) {
  const [currentMonth, setCurrentMonth] = useState(0);

  const transactionData = [
    {
      title: 'Comprehensive',
      title1: 'Ferrari F40',
      title2: '5NOF 222',
      price: '+$1,200',
      color: colors.GREY_5,
      bgColor: colors.GREY_11,
      icon: Images.carLogo,
      type: 'track',
      btnText: Strings.active,
      btnBgColor: colors.lightGreen,
    },
    {
      title: 'Comprehensive',
      title1: 'Ferrari F40',
      title2: '5NOF 222',
      price: '+$1,200',
      color: colors.GREY_5,
      bgColor: '#F6F5F1',
      icon: Images.trackClaim,
      type: 'claim',
      claimId: 'Claim #C12548574625232',
      claimMessage: 'Repair Ongoing at Workshop',
      btnText: Strings.trackClaim,
      btnBgColor: colors.greenColor,
    },
    {
      title: 'Third Party',
      title1: 'Ducati 300cc',
      title2: '5NOF 222',
      price: '+$1,200',
      color: colors.GREY_5,
      bgColor: colors.GREY_11,
      icon: Images.motoLogo,
      type: 'track',
      btnText: Strings.active,
      btnBgColor: colors.lightGreen,
    },
  ];
  const services = [
    {
      image: Images.autoInsurance,
      name: 'Auto Insurance',
    },
    {
      image: Images.insurancePolicy,
      name: 'Insurance Policy',
    },
    {
      image: Images.healthInsurance,
      name: 'Health Insurance',
    },
    {
      image: Images.dentalIsurance,
      name: 'Dental Insurance',
    },
    {
      image: Images.visionInsurance,
      name: 'Vision Insurance',
    },
    {
      image: Images.homeInsurance,
      name: 'Home Insurance',
    },
    // {
    //   image: Images.autoInsurance,
    //   name: 'Legal Insurance',
    // },{
    //   image: Images.autoInsurance,
    //   name: 'Hair&Beauty Insurance',
    // },
  ];

  const renderTransaction = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>{
        navigationTo(navigation,Screens.InsuranceDetail)
      }}>
      <View style={[styles.transaction, {backgroundColor: item?.bgColor}]}>
        <View style={[styles.transactionIcon, {backgroundColor: item.bgColor}]}>
          <Image source={item.icon} style={styles.transactionImage}></Image>
        </View>
        {item?.type == 'track' ? (
          <View style={styles.transactionDetails}>
            <TextGradient
              style={styles.transactionTitle}
              text={item.title}></TextGradient>
            {/* <RNText style={styles.transactionTitle}>{item.title}</RNText> */}
            <RNText style={styles.transactionDate}>{item.title1}</RNText>
            <RNText style={styles.title2}>{item.title2}</RNText>
          </View>
        ) : (
          <View style={styles.transactionDetails}>
            <RNText style={styles.claimId}>{item.claimId}</RNText>
            <TextGradient
              style={styles.claimMessage}
              text={item.claimMessage}></TextGradient>
          </View>
        )}
        <View style={commonStyles.flexDirectionRowCenter}>
          <RNTransParentBtn
            onPress={() => {}}
            style={[
              styles.btnText,
              {
                backgroundColor: item?.btnBgColor,
                borderRadius: item?.type == 'track' ? 15 : 5,
              },
            ]}
            title={item?.btnText}
            textStyle={[
              styles.textStyle,
              {color: item?.type == 'track' ? colors.greenColor : colors.WHITE},
            ]}
          />
          <Image source={Images.leftArrow} style={styles.arrow}></Image>
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  const goToNavigation = index => {
    navigationTo(navigation, Screens.HealthInsurance,{commmigFrom: 'insurance',  navigateTo: index});
    // if (index == 0) {
    //   navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'auto'});
    // } else if (index == 1) {
    //   navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'life'});
    // } else if (index == 2) {
    //   navigationTo(navigation, Screens.HealthInsurance);
    // } else if (index == 3) {
    //   navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'dental'});
    //  } else if (index == 7) {
    //   navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'hair'});
    //  } else if (index == 6) {
    //   navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'legal'});
    //  }      
    // else {
    // }
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
    <RNContainer
      useScroll
      hideHorizontalPadding
      backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <View style={{paddingHorizontal: wp(5)}}>
          <>
            <RNHeader
              containerStyle={styles.header}
              title={Strings.insurance}></RNHeader>
            <View style={commonStyles.spacer2} />
            <RNSearchBar
              placeholder={'Search'}
              containerStyle={styles.searchBar}></RNSearchBar>
          </>
          <View style={commonStyles.spacer1Point5} />
          <View style={styles.serviceListOuterView}>
            <RNText style={styles.serviceText}>
              {Strings.insuranceServices}
            </RNText>
            <FlatList
              numColumns={3}
              data={services}
              renderItem={renderServices}></FlatList>
          </View>

          <View style={commonStyles.spacer} />
          <RNText style={styles.allTransactionsText}>
            {Strings.myPolicies}
          </RNText>
        </View>
        <View style={styles.transactionsContainer}>
          <FlatList
            data={transactionData}
            renderItem={renderTransaction}></FlatList>
        </View>
      </ImageBackground>
    </RNContainer>
  );
}
