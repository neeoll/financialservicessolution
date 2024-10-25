import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import {Images, Strings} from '../../../constants';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import RNButton from '../../../components/RNButton';

const PrivacyPolicy = props => {
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader
        navigation={props.navigation}
        title={Strings.PrivacyPolicy}
        rightComponent={() => (
          <TouchableOpacity>
            <RNImage
              style={styles.flag}
              source={Images.flag}
              resizeMode={'contain'}></RNImage>
          </TouchableOpacity>
        )}
      />
      <View style={styles.spacer} />
      <View style={commonStyles.alignCenter}>
        <RNText style={styles.reviewTerms}>
          {'Review Terms & Conditions'}
        </RNText>
        <View style={styles.spacer} />
        <RNText style={styles.reviewTerms1}>
          {
            'Your privacy is important to us. It is Brainstormings policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.'
          }
        </RNText>
        <View style={styles.spacer} />
        <RNText style={styles.reviewTerms1}>
          {
            'We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used'
          }
        </RNText>
        <View style={styles.spacer} />
        <RNText style={styles.reviewTerms1}>
          {
            'We only retain collected information for as long as necessary to provide you with your requested service.'
          }
        </RNText>
        <View style={styles.spacer} />
      </View>
      <View>
        <RNTransParentBtn
          title={Strings.TermsCondition}
          textStyle={styles.reviewTerms1}
          isGradientText
        />
        <RNTransParentBtn
          title={Strings.PrivacyPolicy}
          textStyle={styles.reviewTerms1}
          isGradientText
        />
      </View>
      <View style={styles.spacer} />
      <View>
        <RNButton
          onPress={() => {
            //navigationReset(navigation, Screens.TabRoutes);
          }}
          activeOpacity={0.5}
          title={Strings.iHaveAgreeWthThis}
          textStyle={styles.textStyle}
          round></RNButton>
        <View style={styles.spacer} />
        <RNTransParentBtn
          style={styles.declineBtn}
          title={Strings.decline}
          textStyle={styles.title}
        />
      </View>
    </RNContainer>
  );
};

export default PrivacyPolicy;
