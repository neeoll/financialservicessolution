import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Images, Strings, wp} from '../constants';
import RNImage from './RNImage';
import TextGradient from './GradientText';
import RNText from './RNText';
import RNButton from './RNButton';

export default function SuccesPaymentModal({
  isVisible,
  setIsVisible,
  onPressHome,
  hideViewReceipt,
  title,
  subtitle,
  amountTitle,
  amount,
  whereAmountShow = 'Top', // posible value Top | Bottom just for set amount position
  renderView,
}) {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={Images.successSendBg}>
          <View style={styles.modalContent}>
            <RNImage
              source={Images.paymentSuccess}
              style={styles.paymentSuccessImage}
            />
            <TextGradient
              style={styles.sendRequestSuccessText}
              text={title ? title : Strings.sendRequestSuccess}
            />
            <RNText style={styles.requestMoneyMsg}>
              {subtitle ? subtitle : Strings.requestMoneyMsg}
            </RNText>
            {renderView ? renderView : null}
            {amountTitle && (
              <TextGradient
                style={styles.reqAmtSendText}
                text={Strings.reqAmtSend}
              />
            )}
            {whereAmountShow == 'Top' && (
              <RNText style={styles.amountText}>
                {amount ? amount : '$ 125.50'}
              </RNText>
            )}
            <View style={styles.dotsContainer}>
              <View style={[styles.dot, {marginLeft: wp(-2.5)}]} />
              <View style={styles.dots}>
                {new Array(15).fill('').map((itm, index) => (
                  <View key={index} style={styles.dash} />
                ))}
              </View>
              <View style={[styles.dot, {marginRight: wp(-2.5)}]} />
            </View>
            {whereAmountShow == 'Bottom' && (
              <RNText style={styles.amountText}>
                {amount ? amount : '$ 125.50'}
              </RNText>
            )}
            {!hideViewReceipt ? (
              <View style={styles.viewReceiptContainer}>
                <Image
                  resizeMode="contain"
                  source={Images.bill}
                  style={styles.billImage}
                />
                <TextGradient
                  style={styles.viewReceiptText}
                  text={Strings.viewReceipt}
                />
              </View>
            ) : null}
            <View style={styles.doneButtonContainer}>
              <RNButton onPress={onPressHome} title={Strings.done} round />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: wp(5),
  },
  modalContent: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  paymentSuccessImage: {
    width: wp(40),
    height: wp(40),
    marginTop: -wp(25),
  },
  sendRequestSuccessText: {
    fontSize: wp(6),
    marginTop: hp(3),
  },
  requestMoneyMsg: {
    color: colors.GREY_13,
    width: '95%',
    textAlign: 'center',
    marginTop: hp(2),
  },
  reqAmtSendText: {
    fontSize: wp(5),
    marginTop: hp(2),
  },
  amountText: {
    width: '90%',
    textAlign: 'center',
    marginTop: hp(1),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(6),
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  dot: {
    width: wp(5),
    height: wp(5),
    backgroundColor: colors.BLACK,
    borderRadius: wp(5),
  },
  dots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dash: {
    width: wp(3),
    height: 4,
    backgroundColor: colors.GREY_14,
    borderRadius: 5,
  },
  viewReceiptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
  billImage: {
    width: wp(5),
    height: wp(5),
  },
  viewReceiptText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  doneButtonContainer: {
    width: '90%',
    marginVertical: hp(2),
  },
});
0;
