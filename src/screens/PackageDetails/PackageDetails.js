import {View} from 'react-native';
import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../components';
import TextGradient from '../../components/GradientText';
import {Images, Screens, StaticData, Strings} from '../../constants';
import RNButton from '../../components/RNButton';
import styles from './style';
import {navigationTo} from '../../navigations';
export default function PackageDetails({route, navigation}) {
  const {name, price, saleTax} = route.params;

  const getFeatureData = val => {
    switch (val) {
      case 'Silver Package':
        return StaticData.silverPackageFeature;
      case 'Gold Package':
        return StaticData.goldPackageFeature;
      case 'Diamond Package':
        return StaticData.diamondPackageFeature;
      case 'Platinum Package':
        return StaticData.platinumPackageFeature;
      default:
        return [];
    }
  };

  return (
    <RNContainer useScroll>
      <RNHeader title={name} />
      <View style={styles.packageContainer}>
        <View style={styles.centerAlign}>
          <TextGradient style={styles.packageName} text={name} />
          <RNText style={styles.saleTax}>{`$${saleTax}.00`}</RNText>
          <RNText style={styles.salesTaxLabel}>+sales tax</RNText>
          <View style={styles.divider} />
          <RNText style={styles.monthlyFee}>Monthly Service Fee</RNText>
          <View style={styles.divider} />
          <RNButton
            onPress={() => {
              navigationTo(navigation, Screens.PaymentPackage);
            }}
            textStyle={styles.buyNowText}
            borderRadius={10}
            style={styles.buyNowButton}
            title={Strings.buyNow}
          />
          <View style={styles.featuresContainer}>
            <RNText style={styles.featuresText}>All features options</RNText>
          </View>
          <View style={styles.separator} />
          <View style={styles.featuresRow}>
            <View style={styles.featureItem}>
              <RNImage source={Images.upGraph} style={styles.featureImage} />
              <RNText style={styles.featureLabel}>Investments</RNText>
            </View>
            <View style={styles.featureItem}>
              <RNImage source={Images.building} style={styles.featureImage} />
              <RNText style={styles.featureLabel}>Claims</RNText>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.featuresList}>
            {getFeatureData(name).map(itm => (
              <View style={styles.featureRow} key={itm}>
                <RNImage
                  resizeMode="contain"
                  source={Images.checkRound}
                  style={styles.checkIcon}
                />
                <RNText style={styles.featureDescription}>{itm}</RNText>
              </View>
            ))}
          </View>
        </View>
      </View>
    </RNContainer>
  );
}
