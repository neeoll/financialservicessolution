import React, {useEffect, useState} from 'react';
import {
  PaymentModal,
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  SuccessModal,
} from '../../../components';
import styles from './styles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import {Images, Strings} from '../../../constants';
import {FlatList, TouchableOpacity, View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import {navigationTo} from '../../../navigations';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';

const list = [
  {
    icon: Images.payments,
    cycleType: 'GoWireles',
  },
];

const list1 = [
  {
    icon: Images.payments,
    cycleType: 'Unlimited Express Flights',
  },
  {
    icon: Images.payments,
    cycleType: 'Multi Billionaires Barbershop',
  },
];

const BillPayProfile = props => {
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [buySuccessModal, setBuySuccessModal] = useState(false);
  const type = props?.route?.params?.type;
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsPaymentModal(true);
        }}>
        <View
          style={[
            {...commonStyles.flexDirectionRowCenter},
          ]}>
          <View style={commonStyles.flexDirectionRowAlignCenter}>
            <RNImage
              resizeMode={'contain'}
              source={item?.icon}
              style={styles.icon}
            />
            <View style={commonStyles.marginLeftWp4}>
              <View>
                <RNText style={styles.cycleType}>{item?.cycleType}</RNText>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const payCycleList = () => {
    return (
      <View style={styles.marginTopAdd}>
      <FlatList
        data={type == 'subscription'? list1 : list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  };
  return (
    <RNImageBgContainer>
      <RNContainer>
        <RNHeader navigation={props.navigation} title={type == 'billPay' ? Strings.billPay : Strings.subscriptionPayments} />
        {payCycleList()}

        <PaymentModal
          isVisible={isPaymentModal}
          setIsVisible={setIsPaymentModal}
          onPress={() => {
            setIsPaymentModal(false);
            setTimeout(() => {
              setBuySuccessModal(true);
            }, 1000);
          }}></PaymentModal>
        <SuccesPaymentModal
          hideViewReceipt
          title={'Payment Succesfull'}
          subtitle={'Your payment done succesfully'}
          onPressHome={() => {
            setBuySuccessModal(false);
          }}
          isVisible={buySuccessModal}
          setIsVisible={setBuySuccessModal}></SuccesPaymentModal>
      </RNContainer>
    </RNImageBgContainer>
  );
};

export default BillPayProfile;
