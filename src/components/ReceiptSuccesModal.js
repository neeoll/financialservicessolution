import {
  Dimensions,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Fonts, hp, Images, Strings, wp} from '../constants';
import {RNImage, RNText, TextGradient} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../constants/colors';
import Modal from 'react-native-modal';
import {screenHeight, screenWidth} from '../constants/ResponsiveScreens';
import commonStyles from '../styles/commonStyles';

export default function ReceiptSuccesModal({isVisible, onpressClose}) {
  const {top, bottom} = useSafeAreaInsets();
  const renderTile = (label, value) => {
    return (
      <>
        <View style={styles.tileContainer}>
          <RNText>{label}</RNText>
          <RNText style={styles.tileValue}>{value}</RNText>
        </View>
      </>
    );
  };
  const infoContainer = (label, value) => {
    return (
      <View style={styles.tileContainer1}>
        <RNText style={styles.refNum}>{label}</RNText>
        <RNText style={styles.refNum1}>{value}</RNText>
      </View>
    );
  };
  const seperateLine = () => {
    return <View style={styles.seperateLine}></View>;
  };

  return (
    <>
      <Modal
        onSwipeComplete={onpressClose}
        swipeDirection={'down'}
        customBackdrop={
          <TouchableWithoutFeedback
            style={styles.backdropContainer}
            onPress={onpressClose}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
        }
        isVisible={isVisible}
        style={styles.modal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent1}>
            <View style={commonStyles.padding2}>
            <TouchableOpacity onPress={onpressClose}>
              <RNImage
                source={Images.closeIconWithBorder}
                style={styles.closeIcon}></RNImage>
                </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <View style={styles.iconContainer}>
                <RNImage
                  source={Images.successIconReceipt}
                  style={styles.icon}></RNImage>
              </View>

              <View style={styles.headerContainer}>
                <RNText style={styles.headerText}>
                  {Strings.paymentSuccess}
                </RNText>
                <RNText style={styles.headerText1}>
                  {Strings.YourPaymentHasBeenSuccessfullydone}
                </RNText>
                {seperateLine()}
                <View style={commonStyles.alignCenter}>
                  <RNText style={styles.amountText1}>Total Payment</RNText>
                  <RNText style={styles.amountText}>$5000</RNText>
                </View>
              </View>
              <View style={commonStyles.spacer} />
              <View style={styles.tileOuterContainer}>
                {infoContainer('Ref Number', '000085752257')}
                {infoContainer('Payment Time', '25 Feb 2023, 13:22')}
              </View>
              <View style={commonStyles.spacerzeroSeven} />
              <View style={styles.tileOuterContainer}>
                {infoContainer('Payment Method', 'Bank Transfer')}
                {infoContainer('Sender Name', 'Antonio Roberto')}
              </View>
              <View style={commonStyles.spacer} />
              {renderTile('Vehicle Price', '$22,990')}
              {renderTile('Shipping fee', '$00.00')}
              {renderTile('Tax, title, registration', '$1,677')}
              <View style={commonStyles.spacer} />
              {/* description */}
              <View style={styles.dots}>
                {new Array(28).fill('').map((itm, index) => (
                  <View key={index} style={styles.dash} />
                ))}
              </View>
              <View style={styles.descriptionContainer}>
                <View style={commonStyles.spacer} />
                <View style={styles.getReceiptView}>
                  <RNImage
                    source={Images.receiptDownload}
                    style={styles.receiptDownload}></RNImage>
                  <RNText style={styles.descriptionLabel}>
                    Get PDF Receipt
                  </RNText>
                </View>
              </View>
              <View style={commonStyles.spacer} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.GREY_11,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  modalContent1: {
    backgroundColor: colors.GREY_11,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: wp(7),
    paddingBottom: hp(10),
  },
  iconContainer: {
    width: wp(25),
    height: wp(25),
    // backgroundColor: colors.YELLOW_1,
    borderRadius: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -wp(12.5),
  },
  icon: {
    width: wp(25),
    height: wp(25),
  },
  receiptDownload: {
    width: wp(7),
    height: wp(7),
    marginRight: wp(2),
  },
  closeIcon: {
    width: wp(10),
    height: wp(10),
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    color: '#121212',
    fontSize: wp(5.5),
    marginTop: hp(1),
    fontWeight: '600',
  },
  headerText1: {
    color: '#474747',
    fontSize: wp(3.5),
    fontWeight: '400',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  amountTextGradient: {
    fontSize: wp(8),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  amountText: {
    fontSize: wp(6),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '600',
    color: '#121212',
  },
  amountText1: {
    fontWeight: '400',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: '#474747',
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: hp(1.5),
  },
  tileContainer1: {
    borderColor: '#EDEDED',
    borderWidth: 1,
    padding: wp(2),
    borderRadius: 6,
    width: screenWidth / 2.7,
  },
  tileValue: {
    fontWeight: '700',
    fontSize: wp(4),
    color: colors.BLACK,
  },
  seperateLine: {
    height: 1,
    backgroundColor: colors.BLACK,
    marginHorizontal: wp(5),
    opacity: 0.1,
    marginTop: hp(2),
  },
  autoSaveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: hp(1.5),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginRight: wp(1),
    fontWeight: '500',
  },
  descriptionContainer: {
    paddingHorizontal: wp(5),
  },
  descriptionLabel: {
    fontWeight: '600',
    fontSize: wp(4.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#3D3D3D',
    textAlign: 'center',
  },
  descriptionText: {
    fontWeight: '500',
    marginTop: hp(1),
    fontSize: wp(3.5),
  },
  sliderContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  tileOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  refNum: {
    fontWeight: '400',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#707070',
  },
  refNum1: {
    fontWeight: '400',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#121212',
    width: wp(35),
  },
  dot: {
    width: wp(2),
    height: wp(2),
    backgroundColor: colors.GREY_21,
    borderRadius: wp(5),
  },
  dots: {
    flexDirection: 'row',
  },
  dash: {
    width: wp(2),
    height: 1,
    marginHorizontal: 2,
    backgroundColor: colors.blackOpacity20,
    borderRadius: 5,
  },
  getReceiptView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
