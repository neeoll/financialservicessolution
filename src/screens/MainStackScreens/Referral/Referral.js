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
import RNButton from '../../../components/RNButton';
import RNTransParentBtn from '../../../components/RNTransParentBtn';

const Referral = props => {
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader navigation={props.navigation} title={Strings.referral} />
      <View style={styles.spacer} />
      <View style={commonStyles.alignCenter}>
        <TextGradient style={styles.referralPrice} text={'$59'} />
        <RNText style={styles.ContactsperActivation}>
          {Strings.ContactsperActivation}
        </RNText>
        <View style={styles.spacer} />
        <RNText style={styles.inviteFriend}>{Strings.inviteFriend}</RNText>
        <RNImage
          resizeMode={'contain'}
          source={Images.referralImage}
          style={styles.refImage}></RNImage>
        <RNText style={styles.message}>
          {
            'Share your unique referral code which is your Financial Services Solution ID, or share links with as many people as you’d like and start earning your lifetime commissions from their transactions.'
          }
        </RNText>

        <View style={commonStyles.marginTopHp3}>
          <RNButton
            onPress={() => {
              //navigationReset(navigation, Screens.TabRoutes);
            }}
            style={styles.inviteAFriendbtn}
            activeOpacity={0.5}
            title={Strings.inviteAFriend}
            textStyle={styles.inviteAFriend}
            round></RNButton>
          <View style={styles.spacer} />
          <RNTransParentBtn
            style={styles.copyMyReferalLink}
            title={Strings.copyMyReferalLink}
            textStyle={styles.title}
            isGradientText
          />
        </View>
      </View>
    </RNContainer>
  );
};

export default Referral;
