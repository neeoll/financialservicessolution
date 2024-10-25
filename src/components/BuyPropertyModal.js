import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Strings, wp} from '../constants';
import TextGradient from './GradientText';
import RNText from './RNText';
import RNButton from './RNButton';
import RNTransParentBtn from './RNTransParentBtn';
import commonStyles from '../styles/commonStyles';

export default function BuyPropertyModal({isVisible, setIsVisible, onPress}) {
  const payOnce = () => {
    return (
      <View style={styles.mainView}>
        <View style={commonStyles.flexDirectionRow}>
          <View
          // style={styles.rnTransParentBtn}
          >
            <RNTransParentBtn
              style={styles.claimBtn}
              title={'Pay Once'}
              textStyle={styles.payOnce}
            />
          </View>
          <View style={[commonStyles.alignToEnd, {marginRight: 10}]}>
            <TextGradient style={styles.titleText} text={'$ 60,535'} />
            <RNText style={styles.freeSiteVisit}>
              {Strings.freeSiteVisit}
            </RNText>
          </View>
        </View>
        <View style={styles.divider} />
        <View>
          <View
            style={[
              commonStyles.flexDirectionRowCenter,
              {paddingHorizontal: wp(2)},
            ]}>
            <RNText style={styles.vehiclePrice}>{Strings.vehiclePrice}</RNText>
            <RNText style={styles.vehiclePriceValue}>{'$22,990'}</RNText>
          </View>
          <View
            style={[
              commonStyles.flexDirectionRowCenter,
              {paddingHorizontal: wp(2),paddingVertical: wp(2)}
            ]}>
            <RNText style={styles.vehiclePrice}>{Strings.shippingfee}</RNText>
            <RNText style={styles.vehiclePriceValue}>{'$00.00'}</RNText>
          </View>
          <View
            style={[
              commonStyles.flexDirectionRowCenter,
              {paddingHorizontal: wp(2)},
            ]}>
            <RNText style={styles.vehiclePrice}>
              {Strings.TaxtitleRegistration}
            </RNText>
            <RNText style={styles.vehiclePriceValue}>{'$1,677'}</RNText>
          </View>
        </View>
        <View style={styles.divider} />
        <View
          style={[
            commonStyles.flexDirectionRowCenter,
            {paddingHorizontal: wp(2)},
          ]}>
          <RNText style={styles.vehiclePriceValue}>
            {Strings.totalPurchasePrice}
          </RNText>
          <RNText style={styles.vehiclePriceValue}>{'$22,990'}</RNText>
        </View>
        <View style={styles.divider} />
        {/* Payment btn */}
        <RNButton
          onPress={onPress}
          style={styles.paymentButton}
          title={Strings.BuyNow}
          textStyle={{color: colors.WHITE, fontSize: wp(4)}}
          round></RNButton>
      </View>
    );
  };
  const payMonthly = () => {
    return (
      <View style={[styles.mainView, {marginTop: hp(2)}]}>
        <View style={commonStyles.flexDirectionRow}>
          <View
          // style={styles.rnTransParentBtn}
          >
            <RNTransParentBtn
              style={styles.claimBtn}
              title={'Pay Monthly'}
              textStyle={styles.payOnce}
            />
          </View>
          <View style={[commonStyles.alignToEnd, {marginRight: 10}]}>
            <TextGradient style={styles.titleText} text={'$ 625 - $ 1000'} />
            <RNText style={styles.freeSiteVisit}>{'This Is Estimate'}</RNText>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={commonStyles.alignCenter}>
          <RNText style={styles.creditScore}>
            {'GetPersonalized down/monthly'}
          </RNText>
          <RNText style={styles.creditScore}>
            {'payment within 2 Minutes,and no impact'}
          </RNText>
          <RNText style={styles.creditScore}>{'to your credit score.'}</RNText>
        </View>
        <View style={styles.divider} />
        {/* Payment btn */}
        <RNButton
          onPress={onPress}
          style={styles.paymentButton}
          title={Strings.BuyNow}
          textStyle={{color: colors.WHITE, fontSize: wp(4)}}
          round></RNButton>
      </View>
    );
  };

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
          <RNText style={styles.titleText}>{Strings.priceDetails}</RNText>
          <RNText style={styles.closeButtonText}>X</RNText>
        </TouchableOpacity>

        <View style={styles.divider} />
        {payOnce()}
        {payMonthly()}
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
    alignSelf: 'center',
    fontSize: wp(5.2),
    color: colors.BLACK,
    fontWeight: '700',
  },
  divider: {
    width: '98%',
    height: 1,
    backgroundColor: colors.GREY_8,
    alignSelf: 'center',
    marginVertical: hp(1.5),
  },
  buyNowButton: {
    width: wp(18),
    height: hp(3.5),
  },
  buyCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listBtn: {
    borderRadius: 15,
    backgroundColor: colors.greenColor,
    paddingHorizontal: wp(4),
  },
  claimBtn: {
    backgroundColor: '#F9F0C7',
    paddingHorizontal: wp(4),
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor: colors.yellowBorder,
  },
  mainView: {
    borderWidth: 1,
    borderColor: colors.yellowBorder,
    borderRadius: 10,
  },
  rnTransParentBtn: {
    position: 'absolute',
  },
  price: {},
  payOnce: {
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '600',
    color: colors.BLACK_2,
  },
  freeSiteVisit: {
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '400',
    color: colors.GREY_4,
  },
  vehiclePrice: {
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '400',
    color: colors.BLACK,
  },
  vehiclePriceValue: {
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '700',
    color: colors.BLACK,
  },
  paymentButton: {
    marginBottom: hp(3),
    paddingHorizontal: wp(4),
    height: hp(5),
  },
  creditScore: {
    fontSize: wp(4.1),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontWeight: '600',
    color: colors.GREY_5,
  },
});
