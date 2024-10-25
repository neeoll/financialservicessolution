import {Platform, UIManager, View} from 'react-native';
import React from 'react';
import {RNContainer, RNImage, RNText} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import {navigationTo} from '../../../navigations';
import TextGradient from '../../../components/GradientText';
import {RNHeader} from '../../../components';
import styles from './styles';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function PackageList(props) {
  const packageData = [
    {name: 'Silver Package', percent: 30, price: 1250, saleTax: 185},
    {name: 'Gold Package', percent: 40, price: 1500, saleTax: 285},
    {name: 'Diamond Package', percent: 50, price: 350, saleTax: 385},
    {name: 'Platinum Package', percent: 60, price: 2000, saleTax: 485},
  ];
  const BuyCard = (item, index) => {
    return (
      <View style={styles.buyCardContainer}>
        <View style={styles.buyCardHeader}>
          <TextGradient text={item.name} style={styles.packageName} />
          <View style={styles.arrowContainer}>
            <RNImage
              resizeMode={'contain'}
              source={Images.rightArrow}
              style={styles.arrowImage}
            />
          </View>
        </View>
        <RNText style={styles.packageDescription}>
          {`${item.percent}% Annual Home Renter & Mortgage payment fees waiver up to $${item.price}`}
        </RNText>
        <View style={styles.packageFooter}>
          <View>
            <TextGradient
              text={`$${item.saleTax}+sales tax`}
              style={styles.saleTax}
            />
            <RNText style={styles.serviceFeeText}>Monthly Service Fee</RNText>
          </View>
          <View style={styles.buyButtonContainer}>
            <RNButton
              onPress={() => {
                navigationTo(props.navigation, Screens.PackageDetails, {
                  ...item,
                });
              }}
              textStyle={styles.buyNowText}
              style={styles.buyNowButton}
              round
              title={Strings.buyNow}
            />
          </View>
        </View>
      </View>
    );
  };

  const buyPackages = () => {
    return (
      <View style={styles.buyPackagesContainer}>
        {packageData.map((item, index) => {
          return BuyCard(item, index);
        })}
      </View>
    );
  };

  return (
    <RNContainer hideHorizontalPadding useScroll edges={['top', 'bottom']}>
      <RNHeader title={Strings.profile} />
      {buyPackages()}
    </RNContainer>
  );
}
