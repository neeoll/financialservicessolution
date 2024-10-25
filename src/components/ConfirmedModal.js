import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Images, Strings, wp} from '../constants';
import RNText from './RNText';
import RNButton from './RNButton';
import {RNImage} from '.';
import {BlurView} from '@react-native-community/blur';

export default function ConfirmedModal({isVisible, setIsVisible, onPress, header,message}) {
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
      <BlurView
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
        blurType={'light'}
        blurAmount={20}
        reducedTransparencyFallbackColor="transparent"></BlurView>
        <View style={styles.modalContent}>
          <RNImage
            resizeMode={'contain'}
            source={Images.confirmedTick}
            style={styles.confirmedTick}></RNImage>
          <RNText style={styles.titleText}>
            {header}
          </RNText>
          <RNText style={styles.titleText1}>
            {
              message
            }
          </RNText>
          <RNButton
            onPress={() => {
              setIsVisible(false);
            }}
            textStyle={styles.buyNowText}
            style={styles.buyNowButton}
            round
            title={Strings.done}
          />
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
  },
  modal: {
    margin: 0,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: wp(2),
  },
  closeButtonText: {
    fontFamily: Fonts.POPPINS,
    color: colors.redColor,
  },
  titleText: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
    fontSize: wp(6),
    color: '#181725',
    fontWeight: '400',
  },
  titleText1: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
    fontSize: wp(4),
    color: '#7C7C7C',
    fontWeight: '300',
  },
  confirmedTick: {
    height: hp(30),
    width: wp(30),
  },
  buyNowText: {
    fontSize: wp(5),
    color: colors.WHITE,
    fontWeight: '500',
  },
  buyNowButton: {
    width: '90%',
    height: hp(6),
    marginTop: hp(3),
  },
});
