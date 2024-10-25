import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Images, Strings, hp, wp} from '../../../constants';
import styles from './styles';
import RNSlider from '../../../components/RNSlider';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import RNButton from '../../../components/RNButton';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import BuyPropertyModal from '../../../components/BuyPropertyModal';
import ConfirmedModal from '../../../components/ConfirmedModal';
import RNTextWithBullets from '../../../components/RNTextWithBullets';
const list = [
  {
    value:
      'GPS Navigation',
  },
  {
    value: 'Hands Free Calling',
  },
  {
    value: 'Premium Sound System',
  },
];
const listSafty = [
  {
    value:
      'Rear View Camera',
  }
];
const listSeat = [
  {
    value:
      'Heated Seats',
  }
];
const listWheel = [
  {
    value:
      'Alloy Wheels',
  }
];
const propertyImg = [Images.car2, Images.car6, Images.car5, Images.car6];
const carImg = [Images.car8, Images.car9, Images.car11, Images.car9];
let colorsBg = ['#F2F2F2', '#F2F2F2'];
const CarDetail = props => {
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const uploadView = () => {
    return (
      <View style={commonStyles.flexDirectionRowCenter}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNText style={[styles.name, {fontWeight: '700'}]}>
            {'2021 Volvo XC40 Recharge'}
          </RNText>
        </View>
        <View style={styles.uploadLikeView}>
          <View style={styles.marginRight3}>
            <RNImage
              resizeMode={'contain'}
              source={Images.upload}
              style={styles.upload}></RNImage>
          </View>
          <View>
            <RNImage
              resizeMode={'contain'}
              source={Images.heart}
              style={styles.upload}></RNImage>
          </View>
        </View>
      </View>
    );
  };
  const starView = () => {
    return (
      <View style={commonStyles.flexDirectionRowAlignCenter}>
        <View style={commonStyles.flexRow}>
          <RNImage
            resizeMode={'contain'}
            source={Images.star}
            style={[styles.star, {marginLeft: 0}]}></RNImage>
          <RNImage
            resizeMode={'contain'}
            source={Images.star}
            style={styles.star}></RNImage>
          <RNImage
            resizeMode={'contain'}
            source={Images.star}
            style={styles.star}></RNImage>
          <RNImage
            resizeMode={'contain'}
            source={Images.star}
            style={styles.star}></RNImage>
          <RNImage
            resizeMode={'contain'}
            source={Images.starHalf}
            style={styles.star}></RNImage>
        </View>
        <View style={commonStyles.marginLeftWp2}>
          <RNText style={styles.name}>{'4.7 (5 reviews)'}</RNText>
        </View>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={{marginLeft: index > 0 ? wp(2) : 0}}>
        <RNImage
          resizeMode={'contain'}
          source={item}
          style={styles.previewImg}></RNImage>
      </View>
    );
  };
  const preview = () => {
    return (
      <View style={commonStyles.marginTopHp2}>
        <RNText style={styles.preview}>{Strings.preview}</RNText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={carImg}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const propertyInfo = () => {
    return (
      <View style={styles.vehicleDetailOuterView}>
        <View style={styles.propertyInfoMainView}>
          <View>
            <RNText style={styles.monthlyRent}>{'Range*'}</RNText>
            <RNText style={styles.callOut}>{'208 miles'}</RNText>
          </View>
          <View>
            <RNText style={styles.monthlyRent}>{'MPGe'}</RNText>
            <RNText style={styles.callOut}>{'85 city, 72 hwy'}</RNText>
          </View>
          <View>
            <RNText style={styles.monthlyRent}>{'Drivetrain'}</RNText>
            <RNText style={styles.callOut}>{'AWD'}</RNText>
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={styles.propertyInfoMainView}>
          <View>
            <RNText style={styles.monthlyRent}>{'Engine'}</RNText>
            <RNText style={styles.callOut}>{'Dual Electric'}</RNText>
          </View>
          <View>
            <RNText style={styles.monthlyRent}>{'Transmission'}</RNText>
            <RNText style={styles.callOut}>{'Single-Speed Fixed'}</RNText>
          </View>
          <View>
            <RNText style={styles.monthlyRent}>{'Fuel'}</RNText>
            <RNText style={styles.callOut}>{'Electric'}</RNText>
          </View>
        </View>
      </View>
    );
  };

  const propertyInfo1 = () => {
    return (
      <View style={styles.vehicleDetailOuterView}>
        <View style={styles.propertyInfoMainView}>
          <View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <RNImage
            resizeMode={'contain'}
            source={Images.music}
            style={styles.music}></RNImage>
            <RNText style={styles.keyfeatureHeader}>{'  Entertainment & Technology'}</RNText>
            </View>
            <RNTextWithBullets textStyleCustom={styles.textStyleCustom} bulletCustomStyle={styles.bulletCustomStyle} data={list} />
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={styles.propertyInfoMainView}>
          <View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <RNImage
            resizeMode={'contain'}
            source={Images.safety}
            style={styles.music}></RNImage>
            <RNText style={styles.keyfeatureHeader}>{'  Safety & Security'}</RNText>
            </View>
            <RNTextWithBullets textStyleCustom={styles.textStyleCustom} bulletCustomStyle={styles.bulletCustomStyle} data={listSafty} />
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={styles.propertyInfoMainView}>
          <View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <RNImage
            resizeMode={'contain'}
            source={Images.seat}
            style={styles.music}></RNImage>
            <RNText style={styles.keyfeatureHeader}>{'  Seating & Interior'}</RNText>
            </View>
            <RNTextWithBullets textStyleCustom={styles.textStyleCustom} bulletCustomStyle={styles.bulletCustomStyle} data={listSeat} />
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={styles.propertyInfoMainView}>
          <View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <RNImage
            resizeMode={'contain'}
            source={Images.wheel}
            style={styles.music}></RNImage>
            <RNText style={styles.keyfeatureHeader}>{'  Wheels & Tires'}</RNText>
            </View>
            <RNTextWithBullets textStyleCustom={styles.textStyleCustom} bulletCustomStyle={styles.bulletCustomStyle} data={listWheel} />
          </View>
        </View>
      </View>
    );
  };

  const buttonView = (props) => {
    return (
      <View style={[commonStyles.flexDirectionRowCenter, {marginTop: hp(2)}]}>
        <RNTransParentBtn
          style={styles.emailBtn}
          title={Strings.email}
          textStyle={styles.emailBtntext}
        />
        <RNTransParentBtn
          onPress={() => {
            setIsPaymentModal(true);
          }}
          style={styles.buyBtn}
          title={ props?.route?.params?.commingFrom == 'profile'  ?  Strings.payNow : Strings.BuyNow}
          textStyle={styles.buyBtnText}
        />
      </View>
    );
  };
  return (
    <RNContainer
      backgroundColor={colors.GREY_11}
      edges={[]}
      hideHorizontalPadding
      useScroll>
      <View>
        <RNSlider navigation={props.navigation} data={propertyImg} />
      </View>
      <View style={styles.padding10}>
        {uploadView()}
        {/* <View style={commonStyles.marginTopHp1}>
          <RNText style={styles.nameBigger}>{'The Brixen'}</RNText>
        </View> */}
        <View>
          <RNText style={styles.address}>
            {'Sport Utility 4D • 25,660 miles'}
          </RNText>
        </View>
        <View style={commonStyles.marginTopHp1}>
          <TextGradient style={styles.nameBigger1} text={'Rating'} />
        </View>
        {starView()}
        {preview()}
        <View style={commonStyles.spacer} />
        <RNText style={styles.vehicleDetail}>{'KEY FEATURES'}</RNText>
        <View style={commonStyles.spacer1} />
        {propertyInfo1()}
        <View style={commonStyles.spacer} />
        <RNText style={styles.vehicleDetail}>{'VEHICLE DETAILS'}</RNText>
        <View style={commonStyles.spacer1} />
        {propertyInfo()}
        <View style={commonStyles.marginTopHp1}>{buttonView(props)}</View>
      </View>
      <BuyPropertyModal
        isVisible={isPaymentModal}
        setIsVisible={setIsPaymentModal}
        onPress={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            setConfirmModal(true);
          }, 1000);
        }}
      />
      <ConfirmedModal
        header={'Thanks - you \n Your Purchase is Confirmed'}
        message={
          'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Pretium nunc'
        }
        isVisible={confirmModal}
        setIsVisible={setConfirmModal}
        onPress={() => {
          setConfirmModal(false);
        }}
      />
    </RNContainer>
  );
};

export default CarDetail;
