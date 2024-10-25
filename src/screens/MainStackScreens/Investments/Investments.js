import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  PaymentModal,
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  SuccessModal,
  TextGradient,
} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationReset, navigationTo} from '../../../navigations';
import {string} from 'prop-types';

const list = [
  {
    image: Images.img1,
    sharePrice: '$0',
    amountRaised: '$0',
  },
  {
    image: Images.img2,
    sharePrice: '$0',
    amountRaised: '$0',
  },
  {
    image: Images.img3,
    sharePrice: '$0',
    amountRaised: '$0',
  },
  {
    image: Images.img4,
    sharePrice: '$0',
    amountRaised: '$0',
  },
];
export default function Investments({navigation}) {
  const renderInvestments = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigationTo(navigation,Screens.InvestmentDetail)
        }}>
        <View style={styles.mainView}>
          <RNImage source={item?.image} style={styles.listImg}></RNImage>
          <View style={commonStyles.flexDirectionRowCenter}>
            <View style={commonStyles.padding2}>
              <TextGradient
                style={styles.sharePrice}
                text={item?.sharePrice}></TextGradient>
              <RNText style={styles.sharePriceText}>
                {Strings.sharePrice}
              </RNText>
            </View>
            <View style={commonStyles.padding2}>
              <TextGradient
                style={styles.sharePrice}
                text={item?.amountRaised}></TextGradient>
              <RNText style={styles.sharePriceText}>
                {Strings.amountRaised}
              </RNText>
            </View>
          </View>
        </View>
        <View style={commonStyles.spacer} />
      </TouchableOpacity>
    );
  };
  return (
    <RNContainer useScroll backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <RNHeader
          containerStyle={styles.header}
          title={Strings.investment}></RNHeader>
        <View style={commonStyles.spacer2} />
        <FlatList
          data={list}
          renderItem={renderInvestments}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
    </RNContainer>
  );
}
