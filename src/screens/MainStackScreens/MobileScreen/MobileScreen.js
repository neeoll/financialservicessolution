import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNCountryInput,
  RNHeader,
  RNText,
  RNTextInput,
} from '../../../components';
import commonStyles from '../../../styles/commonStyles';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import {Dropdown} from 'react-native-element-dropdown';
import {navigationTo} from '../../../navigations';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const kycDoc = [
  {
    key: 'phoneNumber',
    label: 'Phone Number',
    value: '',
    countryCode: 'IN',
    countryNumber: '91',
  },
];
const kycDoc1 = [
  {
    key: 'Country',
    label: 'Country',
    value: '',
    mainTitle: '',
  },
  {
    key: 'City',
    label: 'City',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Zip Code',
    label: 'Zip Code',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Apartment no etc.',
    label: 'Apartment no etc.',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Street and house number',
    label: 'Street and house number',
    value: '',
    mainTitle: '',
  },
];
export default function MobileScreen({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [step, setStep] = useState(false);
  const [inputState, setInputState] = useState(kycDoc);
  const renderInput = (itm, index) => {
    if (itm.key === 'phoneNumber') {
      return (
        <RNCountryInput
          labelStyle={styles.labelStyle}
          style={styles.textInput}
          selectedCountry={itm.countryCode}
          countryNumber={itm.countryNumber}
          onSelectCountry={data => {
            console.log(data);
            setInputState(
              inputState.map(itmx =>
                itmx.key === 'phoneNumber'
                  ? {
                      ...itmx,
                      countryCode: data.cca2,
                      countryNumber: data.callingCode[0],
                    }
                  : itmx,
              ),
            );
          }}
          label={itm.label}
          placeholder={itm.label}
        />
      );
    }
    if (itm?.key == 'dropdown') {
      return (
        <View>
          <RNText style={styles.lableDropdown}>{itm?.label}</RNText>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Option' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderRightIcon={() => (
              <Image
                resizeMode="contain"
                source={Images.dropBottom}
                style={styles.dropdownIcon}
              />
            )}
          />
        </View>
      );
    }
    return (
      <View>
        <View style={commonStyles.spacer1} />
        <RNTextInput
          secureTextEntry={itm.secure}
          containerStyle={styles.emailInputContainer}
          label={itm.label}
          placeholder={itm.label}
          labelStyle={styles.labelStyle}
          style={styles.textInput}
        />
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top', 'bottom']}>
      <RNHeader title={Strings.mobileNumber}></RNHeader>
      <View style={commonStyles.spacer2} />
      <RNText style={styles.header}>
        {step ? 'Other Detail' : 'What is your mobile Number'}
      </RNText>
      <View style={commonStyles.spacer} />
      {inputState.map((itm, index) => renderInput(itm, index))}
      <View style={commonStyles.spacer} />
      <View style={styles.btnView}>
        <RNButton
          onPress={() => {
            setStep(true);
            if (step) {
              navigationTo(navigation, Screens.ConsentScreen);
              //setInputState(kycDoc);
            } else {
              setInputState(kycDoc1);
            }
          }}
          activeOpacity={0.5}
          title={step ? Strings.submit : Strings.next}
          textStyle={styles.textStyle}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
