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

const propertyImg = [
  Images.dummyImg,
  Images.dummyImg,
  Images.dummyImg,
  Images.dummyImg,
];
let colorsBg = ['#F2F2F2', '#F2F2F2'];
const PropertyDetail = props => {
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const uploadView = () => {
    return (
      <View style={commonStyles.flexDirectionRowCenter}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNText style={styles.name}>{'Illinois / Chicago /'}</RNText>
          <TextGradient style={styles.name1} text={'The Brixen'} />
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
          source={Images.dummyImg}
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
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const propertyInfo = () => {
    return (
      <View style={styles.propertyInfoMainView}>
        <View>
          <RNText style={styles.monthlyRent}>{Strings.monthlyRent}</RNText>
          <RNText style={styles.callOut}>{'Call for Rent'}</RNText>
        </View>
        <View style={styles.borderSet} />
        <View>
          <RNText style={styles.monthlyRent}>{Strings.bedrooms}</RNText>
          <RNText style={styles.callOut}>{'2 bd'}</RNText>
        </View>
        <View style={styles.borderSet} />
        <View>
          <RNText style={styles.monthlyRent}>{Strings.bathrooms}</RNText>
          <RNText style={styles.callOut}>{'2 ba'}</RNText>
        </View>
        <View style={styles.borderSet} />
        <View>
          <RNText style={styles.monthlyRent}>{Strings.squareFeet}</RNText>
          <RNText style={styles.callOut}>{'1,191 - 1,233 sq ft'}</RNText>
        </View>
      </View>
    );
  };
  const moveInView = () => {
    return (
      <View style={styles.moveInMainView}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNText style={styles.moveInSpecial}>{Strings.moveInSpecial}</RNText>
          <RNImage
            resizeMode={'contain'}
            source={Images.discountIcon}
            style={styles.discountIcon}></RNImage>
        </View>
        <View>
          <RNText style={styles.discountDesc}>
            {
              'UP TO 1.5 MONTHS FREE! Receive up to 1.5 months free if moving in within 30 days of your application! Additionally, apply within 48 hours of your tour, and your application and admin fees will be waived!  *Contact the office for more details.  Terms and restrictions may apply.'
            }
          </RNText>
        </View>
      </View>
    );
  };
  const tabView = () => {
    return (
      <View style={styles.tabViewMain}>
        <RNButton
          //onPress={onPress}
          style={styles.tabBtn}
          textStyle={styles.textStyle}
          title={'All'}
          borderRadius={5}></RNButton>
        <RNButton
          style={styles.tabBtn}
          textStyle={styles.textStyle}
          title={'Studio'}
          colors={colorsBg}
          isGradientText
          borderRadius={5}></RNButton>
        <RNButton
          style={styles.tabBtn}
          textStyle={styles.textStyle}
          title={'1 Bed'}
          colors={colorsBg}
          isGradientText
          borderRadius={5}></RNButton>
        <RNButton
          style={styles.tabBtn}
          textStyle={styles.textStyle}
          title={'2 Bed'}
          isGradientText
          colors={colorsBg}
          borderRadius={5}></RNButton>
        <RNButton
          style={styles.tabBtn}
          textStyle={styles.textStyle}
          title={'3 Bed'}
          isGradientText
          colors={colorsBg}
          borderRadius={5}></RNButton>
      </View>
    );
  };
  const tabdesc = () => {
    return (
      <View>
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={styles.studio}>{'STUDIO SIX'}</RNText>
            <RNText style={styles.studioPrice}>{'$1,545 – $4,515'}</RNText>
            <RNText style={styles.studioPriceThin}>
              {'Studio, 1 bath, 471 sq ft'}
            </RNText>
            <RNTransParentBtn
              style={styles.tourThisFloorPlan}
              title={Strings.tourThisFloorPlan}
              textStyle={styles.tourThisFloorPlanText}
            />
          </View>
          <View>
            <RNImage
              resizeMode={'contain'}
              source={Images.floorPlan}
              style={styles.floorPlan}></RNImage>
          </View>
        </View>
      </View>
    );
  };
  const buttonView = () => {
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
          title={Strings.buy}
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
        <View style={commonStyles.marginTopHp1}>
          <RNText style={styles.nameBigger}>{'The Brixen'}</RNText>
        </View>
        <View>
          <RNText style={styles.address}>
            {'2817-2851 N Natoma Ave, Chicago, IL 60634'}
          </RNText>
        </View>
        <View style={commonStyles.marginTopHp1}>
          <TextGradient style={styles.nameBigger1} text={'Montclare'} />
        </View>
        {starView()}
        {preview()}
        {propertyInfo()}
        {moveInView()}
        <View style={commonStyles.marginTopHp1}>
          <RNText style={styles.pricingFloor}>
            {Strings.pricingFloorPlans}
          </RNText>
          {tabView()}
          {tabdesc()}
          {buttonView()}
        </View>
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

export default PropertyDetail;
