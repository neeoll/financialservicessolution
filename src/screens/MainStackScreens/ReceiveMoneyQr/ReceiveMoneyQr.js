import {
  Image,
  ImageBackground,
  StyleSheet,
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationTo} from '../../../navigations';
import RNButton from '../../../components/RNButton';
import Modal from 'react-native-modal';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';

export default function ReceiveMoneyQr({navigation}) {
  const {top, bottom} = useSafeAreaInsets();
  const [amount, setAmount] = useState('1000');
  const [isVisible, setIsVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const enterDigit = val => {
    if (amount.length <= 9) {
      setAmount(amount + val);
    }
  };
  return (
    <RNContainer useScroll edges={[]} style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={[styles.imageBackground, {paddingTop: top}]}>
        <RNHeader title={Strings.qrCode} />
        <TextGradient
          style={styles.requestMoneyText}
          text={Strings.rqMnyFrAny}
        />
        <RNText style={styles.receiveMoneyMsg}>
          {Strings.receiveMoneyMsg}
        </RNText>
        <TextGradient style={styles.amountText} text={Strings.requestAmount} />
        <RNText style={styles.enterAmountText}>{'$100,00'}</RNText>
        <RNImage
          source={Images.qrcode}
          style={{
            width: wp(95),
            height: wp(85),
            alignSelf: 'center',
            marginTop: hp(3.5),
          }}></RNImage>

        <RNButton
          icon={() => (
            <Image
              source={Images.sendBtn}
              style={{
                width: wp(5),
                height: wp(5),
                resizeMode: 'contain',
                marginLeft: wp(1),
              }}></Image>
          )}
          onPress={() => setSuccessModal(true)}
          title={Strings.sendMoney}
          round
          style={styles.sendButton}
        />
      </ImageBackground>
      <SuccesPaymentModal
        amountTitle
        hideViewReceipt
        onPressHome={() => {
          setIsVisible(false);
          navigationTo(navigation, Screens.Home);
        }}
        isVisible={successModal}
        setIsVisible={setSuccessModal}></SuccesPaymentModal>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  requestMoneyText: {
    fontSize: wp(4.5),
    fontWeight: '500',
    marginTop: hp(5),
  },
  receiveMoneyMsg: {
    color: colors.GREY_13,
    marginTop: hp(0.5),
  },
  container: {
    backgroundColor: colors.GREY_11,
  },
  imageBackground: {
    flex: 1,
  },
  scannerIcon: {
    width: wp(12),
    height: wp(12),
  },
  userInfoContainer: {
    marginTop: hp(6),
    flexDirection: 'row',
  },
  userInfo: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderRadius: 35,
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.GREY,
    flex: 0.6,
  },
  userImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  userInfoText: {
    marginLeft: wp(1),
    maxWidth: wp(33),
  },
  userName: {
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  userPhone: {
    fontSize: wp(3),
    color: colors.GREY_6,
  },
  spacing: {
    width: wp(2),
  },
  currencySelector: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderRadius: 35,
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.GREY,
    alignItems: 'center',
    width: wp(35),
    flex: 0.4,
  },
  currencyImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  currencyTextContainer: {
    marginLeft: wp(1),
    flex: 1,
  },
  currencyCode: {
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  currencyAmount: {
    fontSize: wp(3),
    color: colors.GREY_6,
  },
  dropdownIcon: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(10),
  },
  enterAmountText: {
    textAlign: 'center',
    marginTop: hp(1),
    fontSize: wp(6),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: colors.BLACK_5,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  amountText: {
    textAlign: 'center',
    fontSize: wp(6),
    fontWeight: '600',
    marginTop: hp(5),
  },
  divider: {
    width: 2,
    height: '100%',
    backgroundColor: colors.LN_FIRST,
  },
  numberPadContainer: {
    paddingHorizontal: wp(6),
  },
  numberPadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  numberPadButton: {
    borderWidth: 1,
    borderColor: colors.GREY_7,
    width: wp(18),
    height: wp(18),
    borderRadius: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberPadButtonText: {
    fontSize: wp(7),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 4,
  },
  emptyButton: {
    borderWidth: 1,
    borderColor: colors.GREY_11,
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18),
  },
  backspaceButton: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backspaceIcon: {
    width: wp(10),
    height: wp(10),
  },
  sendButton: {
    marginTop: hp(5),
    width: wp(60),
    alignSelf: 'center',
  },
  modal: {
    margin: 0,
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    paddingBottom: hp(2),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  modalHeaderText: {
    fontSize: wp(5),
    fontWeight: '600',
  },
  closeIcon: {
    width: wp(8),
    height: wp(8),
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  modalRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalImage: {
    width: wp(8),
    height: wp(8),
  },
  modalText: {
    marginLeft: wp(2),
    fontWeight: '500',
  },
  modalAmount: {
    fontWeight: '500',
  },
  modalDivider: {
    width: '90%',
    height: 1,
    backgroundColor: colors.GREY_12,
    alignSelf: 'center',
    marginTop: hp(1),
  },
});
