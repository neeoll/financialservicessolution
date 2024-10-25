import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import colors from '../../../constants/colors';
import {hp, Images, Screens, Strings, wp} from '../../../constants';
import TextGradient from '../../../components/GradientText';
import {navigationTo} from '../../../navigations';

export default function ScanQrCode({navigation}) {
  return (
    <RNContainer backgroundColor={colors.GREY_11}>
      <RNHeader title={Strings.scanQrCode}></RNHeader>
      <RNImage source={Images.scanQrCode} style={styles.qrCodeImage} />
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => {
            navigationTo(navigation, Screens.EnterSendMoney);
          }}>
          <TextGradient text={Strings.scanQrCode} style={styles.textGradient} />
        </TouchableOpacity>
        <RNText style={styles.scanQrMessage}>{Strings.scanQrMsg}</RNText>
      </View>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  qrCodeImage: {
    width: wp(80),
    height: wp(80),
    alignSelf: 'center',
    marginTop: hp(10),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: hp(20),
  },
  textGradient: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  scanQrMessage: {
    textAlign: 'center',
    color: colors.GREY_13,
  },
});
