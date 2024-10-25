import {Image, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNCountryInput,
  RNHeader,
  RNText,
  RNTextInput,
  TextGradient,
} from '../../../components';
import commonStyles from '../../../styles/commonStyles';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import {Dropdown} from 'react-native-element-dropdown';
import {string} from 'prop-types';
import { navigationTo } from '../../../navigations';

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
    key: 'dropdown',
    label: 'Citizenship',
    value: '',
    mainTitle: 'Details',
  },
  {
    key: 'dropdown',
    label: 'Country',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Occupation',
    label: 'Occupation',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Birthday',
    label: 'Birthday',
    value: '',
    countryCode: 'IN',
    countryNumber: '91',
    mainTitle: 'Birth Information',
  },
  {
    key: 'Place of Birth',
    label: 'Place of Birth',
    value: '',
    mainTitle: '',
  },
  {
    key: 'dropdown',
    label: 'Gender',
    value: '',
    mainTitle: '',
  },
];
const kycDoc1 = [
  {
    key: 'dropdown',
    label: 'Country',
    value: '',
    mainTitle: 'Details',
  },
  {
    key: 'dropdown',
    label: 'Are you liable in US',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Tax-ID optional',
    label: 'Tax-ID optional',
    value: '',
    countryCode: 'IN',
    countryNumber: '91',
    mainTitle: '',
  },
  {
    key: 'Code',
    label: 'Code',
    value: '',
    mainTitle: 'invitation Code',
  },
];
export default function KycDocuments({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [step, setStep] = useState(false);
  const [inputState, setInputState] = useState(kycDoc);
  const renderInput = (itm, index) => {
    if (itm?.key == 'dropdown') {
      return (
        <View>
          {itm?.mainTitle && (
            <TextGradient
              style={styles.mainTitle}
              text={itm?.mainTitle}></TextGradient>
          )}
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
        {itm?.mainTitle && (
          <TextGradient
            style={styles.mainTitle}
            text={itm?.mainTitle}></TextGradient>
        )}
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
      <RNHeader title={Strings.kycDocument}></RNHeader>
      <View style={commonStyles.spacer} />
      <RNText style={styles.LetUsknowYourPlaceOfResidenceAndMainOccupation}>
        {step
          ? Strings.letUsknowInWhichCountryAreYouSubjectToTax
          : Strings.LetUsknowYourPlaceOfResidenceAndMainOccupation}
      </RNText>
      {inputState.map((itm, index) => renderInput(itm, index))}
      <View style={commonStyles.spacer} />
      <View>
        <RNButton
          onPress={() => {
            setStep(true);
            if (step) {
              navigationTo(navigation, Screens.OpenYourAccount);
              //setInputState(kycDoc);
            } else {
              setInputState(kycDoc1);
            }
          }}
          activeOpacity={0.5}
          title={step ? Strings.submit : Strings.next}
          textStyle={styles.textStyle}
          round></RNButton>
        <View style={commonStyles.spacer} />
        <RNTransParentBtn
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.declineBtn}
          title={Strings.cancel}
          textStyle={styles.title}
        />
      </View>
    </RNContainer>
  );
}
