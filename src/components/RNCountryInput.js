import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RNText from './RNText';
import {Fonts, hp, Images, wp} from '../constants';
import colors from '../constants/colors';
import CountryPicker from 'react-native-country-picker-modal';

export default function RNCountryInput({
  labelStyle,
  label,
  style,
  containerStyle,
  onSelectCountry,
  selectedCountry,
  countryNumber,
  ...restProps
}) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <RNText style={[styles.label,{...labelStyle}]}>{label}</RNText>
      <View style={styles.inputWrapper}>
        <CountryPicker
          onClose={() => setVisible(false)}
          visible={visible}
          countryCode={selectedCountry ?? 'IN'}
          withFilter
          withCallingCode
          onSelect={country => onSelectCountry(country)}
        />
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.countryPicker}>
          <RNText style={styles.countryNumber}>
            {countryNumber ? `+${countryNumber}` : ''}
          </RNText>
          <Image
            resizeMode="contain"
            source={Images.dropBottom}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
        <TextInput
          {...restProps}
          style={[styles.textInput, style]}
          placeholderTextColor={colors.GREY_2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(1),
  },
  label: {
    fontSize: wp(5),
    marginBottom: hp(0.5),
    color: colors.GREY_3,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.GREY,
    borderRadius: 5,
    paddingHorizontal: wp(2),
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryNumber: {
    fontSize: wp(5),
    marginRight: wp(1),
  },
  dropdownIcon: {
    width: wp(3),
    height: wp(3),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  textInput: {
    fontSize: wp(5),
    padding: 0,
    height: hp(6),
    flex: 1,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});
