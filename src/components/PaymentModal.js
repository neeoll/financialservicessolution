import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  Switch,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Images, Strings, wp} from '../constants';
import TextGradient from './GradientText';
import RNText from './RNText';
import RNImage from './RNImage';
import RNButton from './RNButton';

export default function PaymentModal({isVisible, setIsVisible, onPress}) {
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
        {/* cross btn */}
        <TouchableOpacity
          onPress={() => setIsVisible(false)}
          style={styles.closeButton}>
          <RNText style={styles.closeButtonText}>X</RNText>
        </TouchableOpacity>
        <RNText style={styles.titleText}>Add your payment methods</RNText>
        <View style={styles.divider} />
        {/* Paypal */}
        <View style={styles.paypalContainer}>
          <RNImage
            source={Images.paypalLogo}
            style={styles.paymentLogo}></RNImage>
          <View style={styles.paypalTextContainer}>
            <RNText style={styles.paymentMethodText}>Paypal</RNText>
            <RNText style={styles.paymentMethodDetailText}>
              Enter email Paypal
            </RNText>
          </View>
          <Image
            resizeMode={'contain'}
            tintColor={colors.lightBlue3}
            source={Images.rightArrow}
            style={styles.arrowIcon}></Image>
        </View>
        <View style={styles.divider} />
        {/* master card */}
        <View style={styles.masterCardContainer}>
          <RNImage
            source={Images.masterCardLogo}
            style={styles.paymentLogo}></RNImage>
          <View style={styles.masterCardTextContainer}>
            <RNText style={styles.paymentMethodText}>MasterCard</RNText>
            <RNText style={styles.paymentMethodDetailText}>
              Enter information on the card
            </RNText>
          </View>
        </View>
        {/* card field */}
        <View style={styles.cardFieldContainer}>
          <RNImage
            source={Images.creditCard}
            style={styles.paymentLogo}></RNImage>
          <View style={styles.cardNumberContainer}>
            <RNText style={styles.cardNumberText}>
              3999 - 1234 - 5678 - 0000
            </RNText>
          </View>
          <Image
            resizeMode={'contain'}
            source={Images.checkRound}
            style={styles.checkIcon}></Image>
        </View>
        {/* MM/YY CVV */}
        <View style={styles.expiryAndCvvContainer}>
          <View style={styles.expiryContainer}>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor={colors.lightBlue2}
                placeholder={'MM/YY'}
                style={styles.inputText}></TextInput>
            </View>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.cvvContainer}>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor={colors.lightBlue2}
                placeholder={'CVV'}
                style={styles.inputText}></TextInput>
            </View>
          </View>
        </View>
        {/* card holder name */}
        <View style={styles.cardHolderNameContainer}>
          <RNImage source={Images.profile} style={styles.profileIcon}></RNImage>
          <TextInput
            placeholderTextColor={colors.lightBlue2}
            placeholder={'Card Holder Name'}
            style={styles.inputText}></TextInput>
        </View>
        {/* save card */}
        <View style={styles.saveCardContainer}>
          <RNText style={styles.saveCardText}>
            Save card data for future payments
          </RNText>
          <View>
            <Switch
              trackColor={{false: '#767577', true: colors.lightBlue}}
              thumbColor={true ? colors.WHITE : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={val => {}}
              value={true}
            />
          </View>
        </View>
        {/* Payment btn */}
        <RNButton
          onPress={onPress}
          style={styles.paymentButton}
          title={Strings.done}
          round></RNButton>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdropContainer: {
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'black',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: hp(5),
  },
  closeButton: {
    width: wp(7),
    height: wp(7),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: wp(3),
  },
  closeButtonText: {
    fontFamily: Fonts.POPPINS,
    color: colors.WHITE,
  },
  titleText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    alignSelf: 'center',
    fontSize: wp(4),
    color: colors.GREY_5,
  },
  divider: {
    width: '98%',
    height: 1,
    backgroundColor: colors.GREY_8,
    alignSelf: 'center',
    marginVertical: hp(1.5),
  },
  paypalContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    marginHorizontal: wp(3),
    alignItems: 'center',
  },
  paymentLogo: {
    width: wp(10),
    height: wp(10),
  },
  paypalTextContainer: {
    flex: 1,
    paddingLeft: wp(2),
  },
  paymentMethodText: {
    fontFamily: Fonts.JOST,
  },
  paymentMethodDetailText: {
    color: colors.lightBlue2,
    fontFamily: Fonts.JOST,
  },
  arrowIcon: {
    width: wp(5),
    height: wp(5),
  },
  masterCardContainer: {
    flexDirection: 'row',
    paddingVertical: hp(2),
    paddingLeft: wp(3),
  },
  masterCardTextContainer: {
    paddingLeft: wp(2),
  },
  cardFieldContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    marginHorizontal: wp(3),
    alignItems: 'center',
  },
  cardNumberContainer: {
    flex: 1,
    paddingLeft: wp(2),
  },
  cardNumberText: {
    fontFamily: Fonts.JOST,
  },
  checkIcon: {
    width: wp(5),
    height: wp(5),
  },
  expiryAndCvvContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(4),
    width: '100%',
    flexDirection: 'row',
  },
  expiryContainer: {
    flex: 1,
  },
  cvvContainer: {
    flex: 1,
  },
  inputField: {
    backgroundColor: colors.lightBlue,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(2),
    paddingVertical: hp(2),
    borderRadius: 15,
  },
  inputText: {
    padding: 0,
    flex: 1,
    fontSize: wp(4),
    paddingLeft: wp(2),
  },
  spacer: {
    width: wp(2),
  },
  cardHolderNameContainer: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(2),
    paddingVertical: hp(2),
    borderRadius: 15,
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  profileIcon: {
    width: wp(5),
    height: wp(5),
  },
  saveCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
    alignItems: 'center',
  },
  saveCardText: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_5,
  },
  paymentButton: {
    marginTop: hp(2),
  },
});
