import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import styles from './styles';
import {Images, Strings} from '../../../constants';
import {View} from 'react-native';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import commonStyles from '../../../styles/commonStyles';

const RoundUp = props => {
  const togleView = name => {
    return (
      <View style={commonStyles.flexDirectionRowCenter}>
        <View>
          <RNText style={styles.name}>{name}</RNText>
        </View>
        <View>
          <View>
            <RNImage
              source={Images.toggleDisable}
              style={styles.toggleEnable1}
              resizeMode={'contain'}></RNImage>
          </View>
          <View>
            <RNImage
              source={Images.toggleEnable}
              style={styles.toggleEnable}
              resizeMode={'contain'}></RNImage>
          </View>
        </View>
      </View>
    );
  };

  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader navigation={props.navigation} title={Strings.roundsUp} />
      <View style={styles.cashoutView}>
        <TextGradient style={styles.cashoutPrice} text={'$120.20'} />
        <RNTransParentBtn
          style={styles.cashOutBtn}
          title={Strings.cashOut}
          textStyle={styles.cashoutText}
          isGradientText
        />
      </View>
     
      <View style={commonStyles.marginTopHp3}>
      <View style={styles.divider} />
      {togleView(Strings.addToMySpendings)}
      <View style={styles.divider} />
      {togleView(Strings.AddToMyGoal)}
      </View>
    </RNContainer>
  );
};

export default RoundUp;
