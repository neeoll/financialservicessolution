import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
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
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationReset, navigationTo} from '../../../navigations';
import RNButton from '../../../components/RNButton';
import Modal from 'react-native-modal';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';

export default function EnterSendMoney({navigation}) {
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
        <RNHeader
          rightComponent={() => (
            <TouchableOpacity
              onPress={() => {
                navigationTo(navigation, Screens.ScanQrCode);
              }}>
              <RNImage source={Images.scanner} style={styles.scannerIcon} />
            </TouchableOpacity>
          )}
          title={Strings.sendMoney}
        />
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <RNImage
              style={styles.userImage}
              source={{
                uri: 'https://randomuser.me/api/portraits/men/46.jpg',
              }}
            />
            <View style={styles.userInfoText}>
              <RNText numberOfLines={1} style={styles.userName}>
                Chandan Kashyapdsadadasda
              </RNText>
              <RNText numberOfLines={1} style={styles.userPhone}>
                089412390984
              </RNText>
            </View>
          </View>
          <View style={styles.spacing} />
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            activeOpacity={0.5}
            style={styles.currencySelector}>
            <RNImage style={styles.currencyImage} source={Images.dollar} />
            <View style={styles.currencyTextContainer}>
              <RNText numberOfLines={1} style={styles.currencyCode}>
                USD
              </RNText>
              <RNText numberOfLines={1} style={styles.currencyAmount}>
                $250.25
              </RNText>
            </View>
            <Image
              resizeMode={'contain'}
              style={styles.dropdownIcon}
              source={Images.dropBottom}
            />
          </TouchableOpacity>
        </View>
        <RNText style={styles.enterAmountText}>
          {Strings.enterYourAmount}
        </RNText>
        <View style={styles.amountContainer}>
          <TextGradient style={styles.amountText} text={`$${amount}`} />
          <View style={styles.divider} />
        </View>
        <View style={styles.numberPadContainer}>
          <View style={styles.numberPadRow}>
            {[1, 2, 3].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => enterDigit(item + '')}
                style={styles.numberPadButton}>
                <RNText style={styles.numberPadButtonText}>{item}</RNText>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberPadRow}>
            {[4, 5, 6].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => enterDigit(item + '')}
                style={styles.numberPadButton}>
                <RNText style={styles.numberPadButtonText}>{item}</RNText>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberPadRow}>
            {[7, 8, 9].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => enterDigit(item + '')}
                style={styles.numberPadButton}>
                <RNText style={styles.numberPadButtonText}>{item}</RNText>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.numberPadRow}>
            <View style={styles.emptyButton} />
            <TouchableOpacity
              onPress={() => enterDigit('0')}
              style={styles.numberPadButton}>
              <RNText style={styles.numberPadButtonText}>{'0'}</RNText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (amount !== '') {
                  const am = amount.slice(0, amount.length - 1);
                  setAmount(am);
                }
              }}
              style={styles.backspaceButton}>
              <RNImage source={Images.backSpace} style={styles.backspaceIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <RNButton
          onPress={() => setSuccessModal(true)}
          title={Strings.sendMoney}
          round
          style={styles.sendButton}
        />
        <View style={{height: bottom}}></View>
      </ImageBackground>
      <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TextGradient
              style={styles.modalHeaderText}
              text={'Change Currency'}
            />
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <RNImage source={Images.closeSquare} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          {[1, 2, 3].map((itm, index) => (
            <React.Fragment key={index}>
              <View style={styles.modalRow}>
                <View style={styles.modalRowContent}>
                  <RNImage source={Images.dollar} style={styles.modalImage} />
                  <RNText style={styles.modalText}>USD</RNText>
                </View>
                <RNText style={styles.modalAmount}>$ 2540.20</RNText>
              </View>
              <View style={styles.modalDivider} />
            </React.Fragment>
          ))}
        </View>
      </Modal>
      <SuccesPaymentModal
        amountTitle
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
    marginTop: hp(2),
    fontSize: wp(5),
    color: colors.GREY_6,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  amountText: {
    textAlign: 'center',
    fontSize: wp(12),
    fontWeight: '600',
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
    fontWeight: '500',
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
    marginTop: hp(3),
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
