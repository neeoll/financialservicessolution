import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  RNCheckBox,
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import RNButton from '../../../components/RNButton';
import {navigationTo} from '../../../navigations';

const legaldocuments = [
  {
    name: 'Terms and conditions',
  },
  {
    name: 'Pricelist',
  },
  {
    name: 'Terms and condition partner bank',
  },
  {
    name: 'Other condition partner Bank',
  },
  {
    name: 'Special condition: cash deposits',
  },
];
const Policy = [
  {
    name: 'Data Privacy policy platform',
  },
  {
    name: 'Data Protection policy partner bank',
  },
];
export default function OpenYourAccount({navigation}) {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={commonStyles.flexDirectionRowCenter}>
          <RNText style={styles.itemText}>{item?.name}</RNText>
          <RNImage
            resizeMode={'contain'}
            source={Images.carbonDocument}
            style={styles.carbonDocument}></RNImage>
        </View>
        <View style={commonStyles.border} />
      </View>
    );
  };
  const list = list => {
    return (
      <View style={styles.listBg}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
        />
      </View>
    );
  };
  const listHeader = header => {
    return (
      <View>
        <View style={commonStyles.spacer} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <RNText style={styles.legaldocuments}>{header}</RNText>
          <View>
            <RNCheckBox />
          </View>
        </View>
        <View style={commonStyles.spacer} />
        <RNText style={styles.subtitle}>
          {
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          }
        </RNText>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top', 'bottom']}>
      <RNHeader title={Strings.openYourAccount}></RNHeader>
      {listHeader(Strings.legaldocuments)}
      <View style={commonStyles.spacer} />
      <View>{list(legaldocuments)}</View>
      {listHeader(Strings.PrivacyPolicy)}
      <View style={commonStyles.spacer} />
      <View>{list(Policy)}</View>
      <View style={commonStyles.spacer} />
      <View>
        <RNButton
          onPress={() => {
            navigationTo(navigation, Screens.VerifyMail);
          }}
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
