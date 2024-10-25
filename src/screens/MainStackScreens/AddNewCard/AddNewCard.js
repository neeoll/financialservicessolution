import React, {useState} from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import {Images, Strings} from '../../../constants';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {Image, TextInput, View} from 'react-native';
import colors from '../../../constants/colors';
import {Dropdown} from 'react-native-element-dropdown';
import RNButton from '../../../components/RNButton';
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
export default function AddNewCard({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <RNContainer
      backgroundColor={colors.GREY_11}
      adjustTabBarHeight
      useScroll
      edges={['top']}>
      <RNHeader title={Strings.AddNewCard}></RNHeader>
      <View style={commonStyles.alignCenter}>
        <RNImage
          resizeMode={'contain'}
          source={Images.addCardLogo}
          style={styles.addCardLogo}></RNImage>
      </View>
      {/* card holder name */}
      <RNText style={styles.textboxTitle}>Cardholder Name</RNText>
      <View style={commonStyles.spacer1} />
      <View style={styles.cardHolderNameContainer}>
        <TextInput
          placeholderTextColor={colors.placeholderColor}
          placeholder={'Card Holder Name'}
          style={styles.inputText}></TextInput>
      </View>
      <View style={commonStyles.spacer} />
      {/* card field */}
      <RNText style={styles.textboxTitle}>Card Number</RNText>
      <View style={commonStyles.spacer1} />
      <View style={styles.cardHolderNameContainer}>
        <TextInput
          placeholderTextColor={colors.placeholderColor}
          placeholder={'XXXX XXXX XXXX XXXX'}
          style={styles.inputText}></TextInput>
      </View>
      <View style={commonStyles.spacer} />
      <RNText style={styles.textboxTitle}>Card Type</RNText>
      <View style={commonStyles.spacer1} />
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
        placeholder={!isFocus ? 'Choose one' : '...'}
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
      {/* MM/YY CVV */}
      <View style={commonStyles.spacer} />
      <View style={styles.expiryAndCvvContainer}>
        <View style={commonStyles.flex1}>
          <RNText style={styles.textboxTitle}>Card Number</RNText>
          <View style={styles.cardHolderNameContainer1}>
            <TextInput
              placeholderTextColor={colors.placeholderColor}
              placeholder={'MM/YY'}
              style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={commonStyles.flex1}>
          <RNText style={styles.textboxTitle}>Card Number</RNText>
          <View style={styles.cardHolderNameContainer1}>
            <TextInput
              placeholderTextColor={colors.placeholderColor}
              placeholder={'XXX'}
              style={styles.inputText}></TextInput>
          </View>
        </View>
      </View>
      <View style={commonStyles.spacer2} />
      <View style={styles.btnView}>
        <RNButton
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
