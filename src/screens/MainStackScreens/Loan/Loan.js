//import liraries
import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import RNProfileHeader from '../../../components/RNProfileHeader';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import styles from './styles';
import {Images, Strings, wp} from '../../../constants';
import TextGradient from '../../../components/GradientText';
import commonStyles from '../../../styles/commonStyles';
import RNButton from '../../../components/RNButton';
import colors from '../../../constants/colors';
import Modal from 'react-native-modal';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';
import {string} from 'prop-types';

const silverPackageFeature = [
  {
    name: 'Monthly Investment Services',
    date: '25 Jan 24 08:30pm',
    btnText: 'Active+',
  },
  {
    name: 'Virtual Wallet Account',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: 'Virtual & Physical Debit Card',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Home Renter & Mortgage payment fees waiver up to $1,250.00',
    date: '$1,250.00',
    claimFund: 'Direct Your Account Fund',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Automotive Note Payment fees waiver',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Home Financing up to $1,250.00 on apartments and residential homes',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Home eviction fees waiver coverage',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Automotive financing up to $1,250.00',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Water Utility fees waiver',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: '30% Annual Electric Utility fees waiver',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
  {
    name: 'Car Rental Financing Services',
    date: 'Claim Your Service',
    btnText: 'Claim fund',
  },
];
const Loan = props => {
  const isShowBackBtn = props?.route?.params?.isShowBackBtn;
  const [isVisible, setIsVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const getColor = val => {
    if (val == 'Active+') {
      return colors.greenColor;
    } else if (val == 'Claim fund') {
      return colors.darkGrey;
    } else {
      return colors.yellowTheme;
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.buyCardContainer}>
        <View>
          <View style={styles.buyCardHeader}>
            <RNImage
              resizeMode={'contain'}
              source={Images.checkRound}
              style={styles.arrowImage}
            />
            <RNText style={styles.packageDescription}>{item?.name}</RNText>
          </View>
          <View style={styles.packageFooter}>
            <View>
              <TextGradient
                text={item?.date}
                style={
                  item?.btnText == 'Claim fund' ? styles.date1 : styles.date
                }
              />
              <RNText style={styles.claimFind}>{item?.claimFund}</RNText>
            </View>
          </View>
        </View>
        <View>
          {item?.btnText == 'Claim fund' ? (
            <RNButton
              onPress={() => {
                setIsVisible(true);
              }}
              textStyle={styles.buyNowText}
              style={styles.buyNowButton}
              round
              title={item?.btnText}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.listBtn, {borderColor: getColor(item?.btnText)}]}>
              <RNText
                style={[
                  styles.buyNowText,
                  {color: getColor(item?.btnText), fontSize: wp(3.6)},
                ]}>
                {item?.btnText}
              </RNText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const offers = () => {
    return (
      <FlatList
        data={silverPackageFeature}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  const confirmationModal = () => {
    return (
      <Modal
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection={'down'}
        customBackdrop={
          <TouchableWithoutFeedback
            style={styles.backdropContainer}
            onPress={() => {
              setIsVisible(false);
            }}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
        }
        isVisible={isVisible}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.topBorder} />
          <View style={commonStyles.spacer} />
          <RNImage source={Images.claimIcon} style={styles.claimIcon}></RNImage>
          <View style={commonStyles.spacer} />
          <RNText style={styles.areYouSureYouWanttoClaimThisRequest}>
            {Strings.areYouSureYouWanttoClaimThisRequest}
          </RNText>
          <View style={commonStyles.spacer} />
          <View style={commonStyles.flexRow}>
            <RNTransParentBtn
              style={styles.cancelbtn}
              title={Strings.cancel}
              textStyle={styles.cancelText}
            />
            <RNTransParentBtn
              onPress={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setSuccessModal(true);
                }, 500);
              }}
              style={styles.yesDoItbtn}
              title={Strings.yesDoIt}
              textStyle={styles.yesDoItbtnText}
            />
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      {/* <RNProfileHeader navigation={props.navigation} /> */}
      { isShowBackBtn ?  <RNHeader title={Strings.claim}></RNHeader> : 
       <RNProfileHeader navigation={props.navigation} />}
      <View style={commonStyles.marginTopHp2}>
        <RNText style={styles.currentPackage}>{Strings.currentPackage}</RNText>
        <TextGradient style={styles.package} text={'Silver Package'} />
      </View>
      {offers()}
      {confirmationModal()}
      <SuccesPaymentModal
        title={Strings.fundDepositSuccessfully}
        subtitle={Strings.moneyhasbeenSuccessfullyDeposieYourFundPayment}
        amount={'$1,250.00'}
        hideViewReceipt
        onPressHome={() => {
          setSuccessModal(false);
        }}
        isVisible={successModal}
        setIsVisible={setSuccessModal}></SuccesPaymentModal>
    </RNContainer>
  );
};

export default Loan;
