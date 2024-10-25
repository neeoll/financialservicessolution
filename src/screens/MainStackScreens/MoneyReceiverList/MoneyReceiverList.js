import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
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

export default function MoneyReceiverList({navigation}) {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <RNContainer edges={[]} style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={[styles.imageBackground, {paddingTop: top}]}>
        <RNHeader title={Strings.receiveMoney} />

        <TextGradient
          style={styles.requestMoneyText}
          text={Strings.rqMnyFrAny}
        />
        <RNText style={styles.receiveMoneyMsg}>
          {Strings.receiveMoneyMsg}
        </RNText>
        <RNText style={styles.searchPeopleText}>{Strings.searchPeople}</RNText>
        <RNSearchBar
          leftComponent={() => null}
          rightComponent={() => (
            <Image source={Images.search2} style={styles.searchIcon} />
          )}
          inputProps={{placeholder: 'Name,Phone'}}
          containerStyle={styles.searchBar}
        />
        <RNText style={styles.contactsCountText}>0/22</RNText>

        <View style={styles.contactsList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={new Array(10).fill('')}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigationTo(navigation, Screens.EnterReceiveMoney)
                  }
                  style={styles.contactItem}>
                  <RNImage
                    style={styles.contactImage}
                    source={{
                      uri: `https://randomuser.me/api/portraits/men/${
                        index + 1
                      }.jpg`,
                    }}
                  />
                  <View style={styles.contactInfo}>
                    <RNText style={styles.contactName}>Brooklyn Simmons</RNText>
                    <RNText style={styles.contactNumber}>+1 9988776655</RNText>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={{height: bottom}} />
        </View>
      </ImageBackground>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    width: wp(6),
    height: wp(6),
    tintColor: colors.GREY_2,
  },
  container: {
    backgroundColor: colors.GREY_11,
  },
  imageBackground: {
    flex: 1,
  },
  searchBar: {
    marginTop: hp(1),
    borderRadius: 10,
    paddingRight: wp(5),
    paddingLeft: 0,
  },
  requestMoneyText: {
    fontSize: wp(5),
    fontWeight: '500',
    marginTop: hp(5),
  },
  receiveMoneyMsg: {
    color: colors.GREY_13,
    marginTop: hp(0.5),
  },
  searchPeopleText: {
    fontSize: wp(5),
    marginTop: hp(2),
    color: colors.GREY_3,
  },
  contactsCountText: {
    alignSelf: 'flex-end',
    marginTop: 5,
    color: colors.GREY_13,
  },
  contactsList: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  contactImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(18),
  },
  contactInfo: {
    marginLeft: wp(2),
    justifyContent: 'center',
  },
  contactName: {
    color: colors.GREY_3,
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  contactNumber: {
    color: colors.GREY_13,
    fontSize: wp(4),
  },
});
