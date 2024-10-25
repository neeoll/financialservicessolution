import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import RNImage from './RNImage';
import {Fonts, Images, Strings, wp} from '../constants';
import commonStyles from '../styles/commonStyles';
import {RNText} from '.';
import RNRoundImage from './RNRoundImage';
import colors from '../constants/colors';

export default function RNProfileHeader({navigation}) {
  return (
    <View
      style={[
        commonStyles.flexDirectionRow,
        {paddingTop: Platform.select({ios: 0, android: 10})},
      ]}>
      <View style={styles.profileView}>
        <RNRoundImage size={13} />
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={styles.welcomeText}>{Strings.welcomeBack}</RNText>
          <RNText style={styles.userName}>{'jennie hooks'}</RNText>
        </View>
      </View>
      <View>
        <RNImage
          source={Images.notificationBell}
          style={styles.notificationBell}></RNImage>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileView: {
    flexDirection: 'row',
  },
  userName: {
    fontFamily: Fonts.POPPINS,
    fontWeight: '500',
    ...commonStyles.fontSizeWp4,
    color: '#191B1E',
  },
  notificationBell: {
    width: wp(10),
    height: wp(10),
  },
  welcomeText: {
    ...commonStyles.fontSizeWp3,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: '#272727',
    fontWeight: '500',
  },
});
