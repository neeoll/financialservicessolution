import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import {Fonts, hp, Images, Strings, wp} from '../constants';
import TextGradient from './GradientText';
import RNText from './RNText';
import RNButton from './RNButton';
import RNTransParentBtn from './RNTransParentBtn';
import commonStyles from '../styles/commonStyles';
import {RNImage, RNTextInput} from '.';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-element-dropdown';
import { screenHeight, screenWidth } from '../constants/ResponsiveScreens';

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
export default function FilterMarketPlace({isVisible, setIsVisible, onPress}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const item1 = (name, isGradient = true) => {
    return (
          <View style={styles.unSelected1}>
            <RNText style={styles.titleText3}>{name}</RNText>
          </View>
    );
  };
  const item = (name, isGradient = true) => {
    return (
      <TouchableOpacity onPress={() => {}} style={{marginLeft: -15}}>
        {isGradient ? (
          <LinearGradient
            colors={[colors.LN_FIRST, colors.LN_TWO]}
            style={styles.type}>
            <RNText style={styles.titleText2}>{name}</RNText>
          </LinearGradient>
        ) : (
          <View style={styles.unSelected}>
            <RNText style={styles.titleText3}>{name}</RNText>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const propertyType = (img, name) => {
    return (
      <View style={commonStyles.alignCenter}>
        <RNImage source={img} style={styles.propertyImg}></RNImage>
        <RNText style={styles.houses}>{name}</RNText>
      </View>
    );
  };
  const dropdown = () => {
    return (
      <View>
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
  };

  return (
    <Modal
      onSwipeComplete={() => setIsVisible(false)}
     // swipeDirection={'down'}
      customBackdrop={
        <TouchableWithoutFeedback
          style={styles.backdropContainer}
          onPress={() => {
            setIsVisible(false);
          }}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      }
      isVisible={isVisible}
      style={styles.modal}>
       
      <View style={styles.modalContent}>
        <ScrollView>
        <View>
        {/* cross btn */}
        <View style={commonStyles.flexDirectionRowCenter}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.closeButton}>
            <RNText style={styles.closeButtonText}>X </RNText>
            <RNText style={styles.titleText}>{Strings.filter}</RNText>
          </TouchableOpacity>
          <RNText style={styles.titleText1}>{Strings.clearAll}</RNText>
        </View>
        <View style={styles.divider} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <RNTextInput
            labelStyle={styles.labelStyle}
            containerStyle={styles.containerStyle}
            label={Strings.price}
            placeholder={Strings.minRent}></RNTextInput>
          <View style={{marginTop: hp(4)}}>
            <View style={styles.dividerLineSmall} />
          </View>
          <RNTextInput
            labelStyle={styles.labelStyle}
            containerStyle={styles.containerStyle}
             label={'.'}
            placeholder={Strings.maxRent}></RNTextInput>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.labelStyle}>
            {Strings.beds}
            <Text style={styles.selectRange}>
              {' '}
              Select two tiles for min/max range
            </Text>
          </RNText>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {item('Any', true)}
            {item('Studio+', false)}
            {item('1+', false)}
            {item('2+', false)}
            {item('3+', false)}
            {item('4+', false)}
          </View>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.labelStyle}>{Strings.baths}</RNText>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {item('Any', true)}
            {item('Studio+', false)}
            {item('1+', false)}
            {item('2+', false)}
            {item('3+', false)}
            {item('4+', false)}
          </View>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.labelStyle}>{'Home Type'}</RNText>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {propertyType(Images.houses, Strings.houses)}
            {propertyType(Images.townhome, Strings.townhomes)}
            {propertyType(Images.condos, Strings.condos)}
            {propertyType(Images.apartment, Strings.apartment)}
          </View>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.labelStyle}>{'Specialty Housing'}</RNText>
          <View style={commonStyles.spacer1} />
          {dropdown()}
        </View>
        <View style={commonStyles.spacer} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={[styles.labelStyle,{marginTop:3}]}>{'Specialty Housing'}</RNText>
            <View style={commonStyles.spacer1} />
            {dropdown()}
          </View>
          <View style={styles.dividerLineSmall1} />
          <RNTextInput
            labelStyle={styles.labelStyle}
            containerStyle={styles.containerStyle}
            label={'Move-in Date'}
            placeholder={'18/02/2023'}></RNTextInput>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.labelStyle}>{'Pet Policy'}</RNText>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {item1('In Unit Washer & Dryer', true)}
            {item1('Air Conditioning', false)}
          </View>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {item1('Utillties Included', true)}
            {item1('Dishwasher', false)}
          </View>
          <View style={commonStyles.spacer1} />
          <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
            {item1('Garage', true)}
            {item1('Parking', false)}
          </View>
          
        </View>
        </View>
        </ScrollView>
      </View>
    </Modal>
   
  );
}

const styles = StyleSheet.create({
  backdropContainer: {
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'black',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: hp(5),
    maxHeight: screenHeight/1.2
  },
  closeButton: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: wp(2),
  },
  closeButtonText: {
    fontFamily: Fonts.POPPINS,
    color: colors.redColor,
  },
  titleText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    alignSelf: 'center',
    fontSize: wp(4.5),
    color: colors.BLACK,
    fontWeight: '600',
  },
  titleText1: {
    fontFamily: Fonts.POPPINS_REGULAR,
    alignSelf: 'center',
    fontSize: wp(4.5),
    color: '#F2994A',
    fontWeight: '700',
  },
  divider: {
    width: '98%',
    height: 1,
    backgroundColor: colors.GREY_8,
    alignSelf: 'center',
    marginVertical: hp(1.5),
  },
  labelStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(4.5),
    color: colors.BLACK,
    fontWeight: '500',
  },
  containerStyle: {
    flex: 1,
  },
  dividerLineSmall: {
    width: 40,
    height: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 15,
  },
  dividerLineSmall1: {
    width: 40,
  },
  selectRange: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: colors.GREY_3,
    fontWeight: '400',
  },
  type: {
    height: hp(5),
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    marginHorizontal: 5,
  },
  titleText2: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: colors.WHITE,
    fontWeight: '700',
  },
  titleText3: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: '#D9D9D9',
    fontWeight: '500',
    textAlign:'center'
  },
  unSelected: {
    height: hp(5),
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  unSelected1: {
    height: hp(5),
    width: screenWidth/2.2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  propertyImg: {
    width: wp(12),
    height: wp(12),
  },
  houses: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: 'rgba(47, 57, 78, 0.8)',
    fontWeight: '600',
  },
  dropdownIcon: {
    width: wp(4),
    height: wp(4),
  },
  lableDropdown: {
    fontSize: wp(4),
    fontWeight: '400',
    color: colors.GREY_3,
    fontFamily: Fonts.POPPINS_REGULAR,
    marginVertical: hp(1),
  },
  dropdown: {
    height: hp(6),
    borderColor: colors.GREY,
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: wp(3.5),
    color: colors.GREY_2,
    fontWeight: '400',
  },
});
