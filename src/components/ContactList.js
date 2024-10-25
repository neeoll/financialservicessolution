import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RNImage, RNSearchBar, RNText} from '../components';
import {Fonts, hp, Strings, wp} from '../constants';
import colors from '../constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextGradient from '../components/GradientText';

export default function ContactList({navigation, isShowRecentContact,onPress}) {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.imageBackground]}>
      <RNSearchBar containerStyle={styles.searchBar}></RNSearchBar>
      {isShowRecentContact && (
        <View>
          <TextGradient
            style={[styles.textGradient, {marginVertical: hp(2)}]}
            text={Strings.recent}></TextGradient>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={new Array(10).fill('')}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <RNImage
                      style={styles.recentImage}
                      source={{
                        uri: `https://randomuser.me/api/portraits/men/${
                          index + 1
                        }.jpg`,
                      }}></RNImage>
                  </View>
                );
              }}></FlatList>
          </View>
        </View>
      )}

      <TextGradient
        style={[styles.textGradient, styles.yourContacts]}
        text={Strings.yourContacts}></TextGradient>
      <View style={styles.contactsList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={new Array(10).fill('')}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={onPress}>
              <View style={styles.contactItem}>
                <RNImage
                  style={styles.contactImage}
                  source={{
                    uri: `https://randomuser.me/api/portraits/men/${
                      index + 1
                    }.jpg`,
                  }}></RNImage>
                <View style={styles.contactInfo}>
                  <RNText style={styles.contactName}>Brooklyn Simmons</RNText>
                  <RNText style={styles.contactNumber}>+1 9988776655</RNText>
                </View>
              </View>
              </TouchableOpacity>
            );
          }}></FlatList>
        <View style={{height: bottom}}></View>
      </View>
    </View>
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
  textGradient: {
    fontSize: wp(5),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  recentImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(18),
    marginRight: wp(2),
  },
  yourContacts: {
    marginTop: hp(2),
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
