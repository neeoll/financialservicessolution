import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNSearchBar,
  RNText,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextGradient from '../../../components/GradientText';
import {navigationTo} from '../../../navigations';
import ContactList from '../../../components/ContactList';

export default function PhoneRecharge({navigation}) {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <RNContainer edges={[]} style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={[styles.imageBackground, {paddingTop: top}]}>
        <RNHeader
          title={Strings.phoneRechage}></RNHeader>
        <ContactList onPress={()=>{
          navigationTo(navigation,Screens.PhoneRechargePlan)
        }}/>
      </ImageBackground>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GREY_11,
  },
  imageBackground: {
    flex: 1,
  },
  scannerIcon: {
    width: wp(12),
    height: wp(12),
  },
  searchBar: {
    marginTop: hp(3),
  },
});
