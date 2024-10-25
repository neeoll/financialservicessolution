import {Image, Switch, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNCountryInput,
  RNHeader,
  RNImage,
  RNText,
  RNTextInput,
} from '../../../components';
import commonStyles from '../../../styles/commonStyles';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import {Dropdown} from 'react-native-element-dropdown';
import {navigationTo} from '../../../navigations';
import colors from '../../../constants/colors';

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
const kycDoc1 = [
  {
    key: 'Full Name',
    label: 'Full Name',
    value: '',
    mainTitle: '',
  },
  {
    key: 'dropdown',
    label: 'Bank Name',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Account Number',
    label: 'Account Number',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Re-Account Number',
    label: 'Re-Account Number',
    value: '',
    mainTitle: '',
  },
  {
    key: 'Routing Number',
    label: 'Routing Number',
    value: '',
    mainTitle: '',
  },
];
export default function AddBankAccount({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [inputState, setInputState] = useState(kycDoc1);
  const renderInput = (itm, index) => {
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
      <RNHeader title={Strings.bankAccount}></RNHeader>
      <View style={commonStyles.spacer}/>
      <View style={commonStyles.alignCenter}>
        <RNImage
          resizeMode={'cover'}
          source={Images.bankLogo}
          style={styles.addCardLogo}></RNImage>
      </View>
      {inputState.map((itm, index) => renderInput(itm, index))}
      {/* save card */}
      <View style={styles.saveCardContainer}>
          <RNText style={styles.saveCardText}>
          Save Bank info
          </RNText>
          <View>
            <Switch
              trackColor={{false: '#767577', true: colors.lightBlue}}
              thumbColor={true ? colors.WHITE : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={val => {}}
              value={true}
            />
          </View>
        </View>
      <View style={commonStyles.spacer} />
      <View style={styles.btnView}>
        <RNButton
          onPress={() => {
          }}
          activeOpacity={0.5}
          title={Strings.done}
          textStyle={styles.textStyle}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
