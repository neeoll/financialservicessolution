import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Fonts, hp, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import EnterMoney from '../../../components/EnterMoney';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';
import {navigationTo} from '../../../navigations';
import {Screen} from 'react-native-screens';
export default function ElectricityEnterPayment({navigation}) {
  const [successModal, setSuccessModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageView = (img, tilte, title1) => {
    return (
      <View style={styles.userInfo1}>
        <View>
          <RNImage
            style={styles.userImage1}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.userInfoText}>
          <RNText numberOfLines={1} style={styles.userName}>
            {tilte}
          </RNText>
          <RNText numberOfLines={1} style={styles.userPhone1}>
            {title1}
          </RNText>
        </View>
      </View>
    );
  };
  return (
    <RNContainer backgroundColor={colors.GREY_11} useScroll edges={['top']}>
      <RNImageBgContainer>
        <RNHeader title={Strings.electricityPay}></RNHeader>
        <View style={commonStyles.spacer2} />
        <EnterMoney
          navigation={navigation}
          title={'Duke Energy'}
          subtitle={'Bill No:- Cpa5572665225'}
          image={'https://randomuser.me/api/portraits/men/46.jpg'}
          subtitle1={'Enter your amount'}
          buttonText="Pay Bill"
          onPress={() => {
            setIsVisible(true);
          }}
        />
        {isVisible && (
          <SuccesPaymentModal
            //  amountTitle
            title={Strings.paySuccess}
            subtitle={'You Pay Your Bill Successfully Done'}
            hideViewReceipt
            amount={'$ 125.50'}
            whereAmountShow={'Bottom'}
            onPressHome={() => {
              setIsVisible(false);
              //navigationTo(navigation, Screen.Home);
            }}
            isVisible={isVisible}
            renderView={imageView(
              'https://randomuser.me/api/portraits/men/46.jpg',
              'Chandan Kashyap',
              'USA State Power Corporation Limited',
            )}></SuccesPaymentModal>
        )}
      </RNImageBgContainer>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  spacer: {
    marginVertical: hp(1),
  },
  userInfo: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderRadius: 45,
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.GREY,
    marginTop: hp(2),
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
  },
  userInfo1: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(15),
  },
  userImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(10),
  },
  userImage1: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  userInfoText: {
    marginLeft: wp(1),
    flex: 1,
    marginLeft: wp(2),
  },
  userName: {
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  userPhone: {
    fontSize: wp(3.5),
    color: colors.GREY_6,
  },
  userPhone1: {
    fontSize: wp(3),
    color: colors.GREY_6,
    fontFamily: Fonts.JOST,
  },
});
