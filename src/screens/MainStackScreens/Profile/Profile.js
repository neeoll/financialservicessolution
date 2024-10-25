import React from 'react';
import {RNContainer, RNImage, RNText} from '../../../components';
import RNProfileHeader from '../../../components/RNProfileHeader';
import commonStyles from '../../../styles/commonStyles';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import {FlatList, TouchableOpacity, View} from 'react-native';
import RNRoundImage from '../../../components/RNRoundImage';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import {navigationTo} from '../../../navigations';

const option = [
  {
    LeftIcon: Images.lock,
    name: Strings.changePassword,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.payments,
    name: Strings.payment,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.subscriptionPackage,
    name: Strings.subscriptionPackages,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.manageCard,
    name: Strings.manageCard,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.claim,
    name: Strings.claim,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.payCycle,
    name: Strings.payCycle,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.propertyHome,
    name: Strings.property,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.payments,
    name: Strings.autoPayment,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.payments,
    name: Strings.subscriptionPayments,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.payments,
    name: Strings.billPay,
    rightIcon: Images.arowRight,
  },
];
const moreOption = [
  {
    LeftIcon: Images.transactions,
    name: Strings.transactions,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.roundUp,
    name: Strings.roundsUp,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.termsAndCondition,
    name: Strings.termsAndConditions,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.legalDoc,
    name: Strings.legaldocuments,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.questionMark,
    name: Strings.helpSupport,
    rightIcon: Images.arowRight,
  },
  {
    LeftIcon: Images.refferal,
    name: Strings.referral,
    rightIcon: Images.arowRight,
  },
];

const Profile = props => {
  const profileHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigationTo(props.navigation, Screens.UpdateProfile);
        }}>
        <View style={styles.profileView}>
          <View>
            <RNRoundImage size={15} issShowEdit />
          </View>
          <View style={styles.userNameView}>
            <RNText style={styles.userName}>{'jennie hooks'}</RNText>
            <RNText style={styles.mobileNumber}>{'+1 888-888-8888'}</RNText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const navigation = index => {
    if (index == 0) {
      navigationTo(props.navigation, Screens.ChangePassword);
    } else if (index == 1) {
      props.navigation.push(Screens.Card, {headerType: 'back'});
    } else if (index == 2) {
      props.navigation.push(Screens.Packages);
    } else if (index == 3) {
      props.navigation.push(Screens.ManageCard);
    } else if (index == 4) {
      props.navigation.push(Screens.Claim);
    } else if (index == 5) {
      props.navigation.push(Screens.payCycle);
    } else if (index == 6) {
      props.navigation.push(Screens.Property);
    } else if (index == 7) {
      props.navigation.push(Screens.CarDetail, {commingFrom: 'profile'});
    } else if (index == 8) {
      props.navigation.push(Screens.BillPayProfile, {type: 'subscription'});
    } else if (index == 9) {
      props.navigation.push(Screens.BillPayProfile, {type: 'billPay'});
    } else {
    }
  };
  const navigationMoreOptions = index => {
    if (index == 0) {
      navigationTo(props.navigation, Screens.Transactions);
    } else if (index == 1) {
      props.navigation.push(Screens.RoundUp);
    } else if (index == 2) {
      props.navigation.push(Screens.PrivacyPolicy);
    } else if (index == 3) {
      props.navigation.push(Screens.Document);
    } else if (index == 4) {
      props.navigation.push(Screens.HelpSupport);
    } else if (index == 5) {
      props.navigation.push(Screens.Referral);
    } else {
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation(index);
        }}>
        <View
          style={[
            styles.listMainView,
            {...commonStyles.flexDirectionRowCenter},
          ]}>
          <View style={commonStyles.flexDirectionRowAlignCenter}>
            <View>
              <RNImage
                source={item?.LeftIcon}
                style={styles.leftIcon}
                resizeMode={'contain'}></RNImage>
            </View>
            <View>
              <RNText style={styles.name}>{item?.name}</RNText>
            </View>
          </View>
          <View>
            <RNImage source={item?.rightIcon} style={styles.leftIcon}></RNImage>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const acounts = () => {
    return (
      <View style={styles.acounts}>
        <RNText style={styles.acountsText}>{Strings.acounts}</RNText>
        <FlatList
          data={option}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const renderItemMoreOptions = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigationMoreOptions(index);
        }}>
        <View
          style={[
            styles.listMainView,
            {...commonStyles.flexDirectionRowCenter},
          ]}>
          <View style={commonStyles.flexDirectionRowAlignCenter}>
            <View>
              <RNImage
                source={item?.LeftIcon}
                style={styles.leftIcon}
                resizeMode={'contain'}></RNImage>
            </View>
            <View>
              <RNText style={styles.name}>{item?.name}</RNText>
            </View>
          </View>
          <View>
            <RNImage source={item?.rightIcon} style={styles.leftIcon}></RNImage>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const moreOptions = () => {
    return (
      <View style={styles.acounts}>
        <RNText style={styles.acountsText}>{Strings.moreOptions}</RNText>
        <FlatList
          data={moreOption}
          renderItem={renderItemMoreOptions}
          keyExtractor={(item, index) => index.toString()}
        />
        <RNTransParentBtn
          leftIcon={Images.logout}
          title={Strings.logout}
          textStyle={styles.logoutText}
        />
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      {profileHeader()}
      {acounts()}
      {moreOptions()}
    </RNContainer>
  );
};

export default Profile;
