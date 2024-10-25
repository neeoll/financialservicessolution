import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Images, wp} from '../constants';
import TextGradient from './GradientText';
import RNText from './RNText';
import RNImage from './RNImage';

export default function AddressListModal({isVisible, setIsVisible}) {
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
        <TextGradient
          style={styles.addAddressText}
          text={'+ Add Address'}></TextGradient>
        <View style={styles.horizontalLine}></View>
        <View style={styles.addressContainer}>
          <RNImage
            source={Images.homeWithMen}
            style={styles.addressImage}></RNImage>
          <View style={styles.addressTextContainer}>
            <RNText style={styles.addressTitle}>Home</RNText>
            <RNText style={styles.addressDetails}>
              4955 Steubenville Pi Suite
            </RNText>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.addressContainer}>
          <RNImage
            source={Images.suitcase}
            style={styles.addressImage}></RNImage>
          <View style={styles.addressTextContainer}>
            <RNText style={styles.addressTitle}>Other</RNText>
            <RNText style={styles.addressDetails}>
              4489 Kerry Way, Sector 33, Canada
            </RNText>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.addressContainer}>
          <RNImage source={Images.home} style={styles.addressImage}></RNImage>
          <View style={styles.addressTextContainer}>
            <RNText style={styles.addressTitle}>Home</RNText>
            <RNText style={styles.addressDetails}>
              18 Davidson St, Miles End, QLD 4596
            </RNText>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.bottomSpacing}></View>
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 0,
  },
  addAddressText: {
    fontFamily: Fonts.JOST,
    fontSize: wp(5),
    paddingHorizontal: wp(5),
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.GREY_10,
    marginVertical: hp(2),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  addressImage: {
    width: wp(7),
    height: wp(7),
  },
  addressTextContainer: {
    marginLeft: wp(4),
  },
  addressTitle: {
    fontFamily: Fonts.JOST,
    fontWeight: '500',
    fontSize: wp(5),
  },
  addressDetails: {
    fontFamily: Fonts.JOST,
    fontWeight: '400',
    fontSize: wp(4),
    color: colors.GREY_6,
  },
  bottomSpacing: {
    height: hp(5),
  },
});
