import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import styles from './styles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import {Images, Screens, Strings} from '../../../constants';
import {FlatList, View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import RNButton from '../../../components/RNButton';
import {navigationTo} from '../../../navigations';

const VerifyIdentity = props => {
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader navigation={props.navigation} title={Strings.verifyIdentity} />
      <View style={commonStyles.spacer2} />
      <RNText style={styles.title}>
        {Strings.timeToVerifyYourIdentityWithShortVideoCall}
      </RNText>
      <View style={commonStyles.spacer2} />
      <RNImage
        resizeMode={'cover'}
        source={Images.videoMessage}
        style={styles.videoMessage}></RNImage>
        <RNText style={styles.title1}>
        {'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
      </RNText>
      <View style={styles.btnView}>
        <RNButton
          onPress={() => {
            navigationTo(props.navigation, Screens.TabRoutes);
          }}
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
    </RNContainer>
  );
};

export default VerifyIdentity;
