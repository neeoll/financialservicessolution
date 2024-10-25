import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {Fonts, hp, Images, wp} from '../constants';
import RNText from './RNText';
import RNImage from './RNImage';
import TextGradient from './GradientText';
import Modal from 'react-native-modal';

export default function SuccessModal({isVisible, setIsVisible, onPressHome,header,subHeader}) {
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
        <RNImage source={Images.checkRound} style={styles.checkIcon} />
        <View style={styles.textContainer}>
          <RNText style={styles.text}>You Buy</RNText>
          <TextGradient style={styles.text} text={header} />
          <RNText style={styles.text}>Successfully</RNText>
        </View>
        {/* <RNText style={styles.text}>Buy</RNText> */}
        <RNText style={styles.description}>
          {subHeader}
        </RNText>
        <TouchableOpacity onPress={onPressHome} style={styles.homeButton}>
          <TextGradient style={styles.text} text={'Home'} />
        </TouchableOpacity>
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
    margin: 20,
    justifyContent: 'center',
  },
  modalContent: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    paddingBottom: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(5),
  },
  checkIcon: {
    width: wp(12),
    height: wp(12),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.JOST,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  description: {
    fontFamily: Fonts.JOST,
    textAlign: 'center',
    color: colors.lightBlue2,
  },
  homeButton: {
    marginTop: hp(2),
  },
});
