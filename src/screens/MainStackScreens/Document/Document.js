import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Images, Strings} from '../../../constants';
import styles from './styles';
import {View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';

const upoadDocument = (title, subTitle) => {
  return (
    <View style={commonStyles.alignCenter}>
      <TextGradient style={styles.uploadIdPhoto} text={title}></TextGradient>
      <RNText style={styles.uploadIdFront}>{subTitle}</RNText>
      <RNImage
        resizeMode={'contain'}
        source={Images.uploadDoc}
        style={styles.uploadDoc}></RNImage>
    </View>
  );
};
const Document = props => {
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader navigation={props.navigation} title={Strings.Documents} />
      <View style={styles.spacer} />
      {upoadDocument(Strings.uploadIdPhoto, Strings.positionTheFront)}
      <View style={styles.border} />
      {upoadDocument(
        Strings.frontOfDriversLicense,
        Strings.positionTheFrontOfYourLicenseInTheFrame,
      )}
      {upoadDocument(
        Strings.backOfDriversLicense,
        Strings.positionTheBackOfYourLicenseInTheFrame,
      )}
    </RNContainer>
  );
};

export default Document;
