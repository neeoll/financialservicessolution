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
import {string} from 'prop-types';
import { navigationTo } from '../../../navigations';

export default function VerifyMail({navigation}) {
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
  const title = () => {
    return (
      <View style={commonStyles.alignCenter}>
        <RNText style={styles.openMail}>{Strings.OpenOourMailApp}</RNText>
        <View style={commonStyles.spacer} />
        <RNText style={styles.subtitle}>
          {
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but.'
          }
        </RNText>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top',]}>
      <RNHeader title={Strings.verifyYourEmail}></RNHeader>
      <View style={[commonStyles.alignCenter,{marginVertical: hp(5)}]}>
        <RNImage source={Images.mailGif} style={styles.mailGif}></RNImage>
      </View>
      {title()}
      <View style={commonStyles.spacer} />
      <View style={styles.btnView}>
        <RNButton
          onPress={()=>{navigationTo(navigation,Screens.AccountConfirmation)}}
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
