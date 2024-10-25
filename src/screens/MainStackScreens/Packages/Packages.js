import React from 'react';
import {View} from 'react-native';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import styles from './styles';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import TextGradient from '../../../components/GradientText';
import commonStyles from '../../../styles/commonStyles';
import {navigationTo} from '../../../navigations';
import RNButton from '../../../components/RNButton';

const Packages = props => {
  const activatedPackage = () => {
    return (
      <View style={styles.mainView}>
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNTransParentBtn
              style={styles.expireBtn}
              title={Strings.expiresIn7Days}
              textStyle={styles.expireBtnText}
            />
          </View>
          <View>
            <TextGradient
              text={'Silver Package'}
              style={styles.packageName}></TextGradient>
          </View>
        </View>
        <View style={styles.packageFooter}>
          <View>
            <TextGradient text={`$${185}+sales tax`} style={styles.saleTax} />
            <RNText style={styles.serviceFeeText}>Monthly Service Fee</RNText>
          </View>
          <View>
            <RNText style={styles.date}>{'28 Feb 2023 05:20pm'}</RNText>
          </View>
        </View>
        <View>
          <RNTransParentBtn
            style={styles.upgradePlan}
            title={Strings.upgradePlan}
            textStyle={styles.upgradePlanText}
            onPress={() => {
              navigationTo(props.navigation, Screens.PackageList);
            }}
          />
        </View>
      </View>
    );
  };

  const epiredList = (item, index) => {
    return (
      <View style={styles.buyCardContainer}>
        <View style={styles.buyCardHeader}>
          <TextGradient text={'Silver Package'} style={styles.packageName} />
          <View>
            <RNText style={styles.date}>{'28 Feb 2023 05:20pm'}</RNText>
          </View>
        </View>
        <RNText style={styles.packageDescription}>
          {`${30}% Annual Home Renter & Mortgage payment fees waiver up to $${1250}`}
        </RNText>
        <View style={styles.packageFooter}>
          <View>
            <TextGradient text={`$${185.0}+sales tax`} style={styles.saleTax} />
            <RNText style={styles.serviceFeeText}>Monthly Service Fee</RNText>
          </View>
          <View style={styles.buyButtonContainer}>
            <RNTransParentBtn
              style={styles.expireBtn}
              title={'Expired'}
              textStyle={styles.expireBtnText}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <RNContainer useScroll edges={['top']}>
      <RNHeader title={Strings.Packages} />
      {activatedPackage(props.navigation)}
      {epiredList()}
    </RNContainer>
  );
};

export default Packages;
