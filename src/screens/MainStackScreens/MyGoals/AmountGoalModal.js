import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../../../constants/colors';
import {Fonts, hp, Images, Strings, wp} from '../../../constants';
import {RNImage, RNText, TextGradient} from '../../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SliderBtn from './SliderBtn';
import {navigationBack} from '../../../navigations';
import RNButton from '../../../components/RNButton';

export default function AmountGoalModal({navigation, route}) {
  const {prevScreen} = route?.params;
  const {top, bottom} = useSafeAreaInsets();

  const renderTile = (label, value) => {
    return (
      <>
        <View style={styles.tileContainer}>
          <RNText>{label}</RNText>
          <RNText style={styles.tileValue}>{value}</RNText>
        </View>
        {seperateLine()}
      </>
    );
  };

  const seperateLine = () => {
    return <View style={styles.seperateLine}></View>;
  };

  return (
    <>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {prevScreen === 'createGoal' ? (
            <View
              style={[styles.iconContainer, {backgroundColor: colors.BLACK}]}>
              <RNImage source={Images.home2} style={styles.icon}></RNImage>
            </View>
          ) : (
            <View style={styles.iconContainer}>
              <RNImage source={Images.home2} style={styles.icon}></RNImage>
            </View>
          )}
          <View style={styles.headerContainer}>
            <RNText style={styles.headerText}>{Strings.amountGoals}</RNText>
            <View style={styles.amountContainer}>
              <TextGradient
                style={styles.amountTextGradient}
                text={'$2345/'}></TextGradient>
              <RNText style={styles.amountText}>$5000</RNText>
            </View>
          </View>
          {renderTile('Goals Name', 'New Apartment')}
          {renderTile('Start Date', 'August 12, 2023')}
          {renderTile('End Date', 'August 12, 2023')}
          {/* set Auto */}
          <View style={styles.autoSaveContainer}>
            <RNText>{'Set Auto-Save Wallet'}</RNText>
            <View style={styles.switchContainer}>
              <RNText style={styles.switchLabel}>Active</RNText>
              <Switch></Switch>
            </View>
          </View>
          {seperateLine()}
          {/* description */}
          <View style={styles.descriptionContainer}>
            <RNText style={styles.descriptionLabel}>Description</RNText>
            <RNText style={styles.descriptionText}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </RNText>
          </View>
          {seperateLine()}
          <View style={styles.sliderContainer}>
            {prevScreen == 'createGoal' ? (
              <RNButton
                onPress={() => navigationBack(navigation)}
                title={Strings.confirm}
                round
                textStyle={{color: colors.WHITE}}
                style={{
                  width: '90%',
                  marginTop: hp(2),
                  alignSelf: 'center',
                }}></RNButton>
            ) : (
              <SliderBtn
                onComplete={() => navigationBack(navigation)}></SliderBtn>
            )}
          </View>
          <View style={{height: bottom + 10}}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.GREY_11,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  iconContainer: {
    width: wp(25),
    height: wp(25),
    backgroundColor: colors.YELLOW_1,
    borderRadius: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -wp(12.5),
  },
  icon: {
    width: wp(12),
    height: wp(12),
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    color: colors.BLACK_1,
    fontSize: wp(5.5),
    marginTop: hp(1),
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
    fontSize: wp(8),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    opacity: 0.5,
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: hp(1.5),
  },
  tileValue: {
    fontWeight: '500',
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
    marginTop: hp(2),
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
});
