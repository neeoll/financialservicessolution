import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import RNImage from './RNImage';
import {hp, Images, Strings, wp} from '../constants';
import colors from '../constants/colors';

export default function RNSearchBar({
  containerStyle,
  square,
  leftComponent,
  inputProps,
  rightComponent,
  placeholder = Strings.searchBeneficiary
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftComponent ? (
        leftComponent()
      ) : (
        <RNImage source={Images.search2} style={styles.searchIcon} />
      )}
      <TextInput
        placeholderTextColor={colors.GREY_12}
        placeholder={placeholder}
        style={styles.textInput}
        {...inputProps}
      />
      {rightComponent ? rightComponent() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.GREY,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 25,
  },
  searchIcon: {
    width: wp(6),
    height: wp(6),
  },
  textInput: {
    flex: 1,
    padding: 0,
    marginLeft: wp(3),
    color: colors.BLACK,
    fontSize: wp(4.5),
  },
});
