import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import styles from './styles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import {Images, Screens, Strings} from '../../../constants';
import {FlatList, View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import RNButton from '../../../components/RNButton';
import { navigationTo } from '../../../navigations';

const list = [
  {
    icon: Images.checkRound,
    cycleType: '+ 91 9987445557',
    desc: 'There are many variations of passages',
  },
  {
    icon: Images.checkRound,
    cycleType: 'Your readily available identity document',
    desc: 'Your identity document will be checked during the identification, so please have it ready and at hand.',
  },
  {
    icon: Images.checkRound,
    cycleType: 'Consent',
    desc: 'I agree to the Dnow terms of Service and have read the Privacy Policy. I give my explicit consent that',
  },
];

const ConsentScreen = props => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNImage
            resizeMode={'contain'}
            source={item?.icon}
            style={styles.icon}
          />
          <View style={commonStyles.marginLeftWp4}>
            <View>
              <RNText style={styles.cycleType}>{item?.cycleType}</RNText>
            </View>
            <View style={commonStyles.marginTopHp1}>
              <RNText style={styles.desc}>{item?.desc}</RNText>
            </View>
          </View>
        </View>
        <View style={commonStyles.border1}/>
      </View>
    );
  };
  const payCycleList = () => {
    return (
      <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  };
  return (
      <RNContainer  adjustTabBarHeight useScroll edges={['top']}>
        <RNHeader navigation={props.navigation} title={Strings.acounts} />
        <View style={commonStyles.spacer2}/>
        {payCycleList()}
        <View style={commonStyles.spacer1}/>
        <View>
        <RNTransParentBtn
          title={Strings.TermsCondition}
          style={styles.flexStart}
          textStyle={styles.reviewTerms1}
          isGradientText
        />
        <RNTransParentBtn
          title={Strings.PrivacyPolicy}
          style={styles.flexStart}
          textStyle={styles.reviewTerms1}
          isGradientText
        />
      </View>
      <View style={styles.btnView}>
        <RNButton
          onPress={()=>{navigationTo(props.navigation,Screens.VerifyIdentity)}}
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
      </RNContainer>
  );
};

export default ConsentScreen;
