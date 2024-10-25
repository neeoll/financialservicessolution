//import liraries
import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import RNCardView from '../../../components/RNCardView';
import {Images, Strings} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import styles from './styles';
import RNTextWithBullets from '../../../components/RNTextWithBullets';

const cardDetail = {
  cardTitle: 'Financial Services Solution',
  balance: '00000',
  percent: '14%',
  cardType: 'yellow',
  expiry: '12/25',
  cardCategoty: 'Platinum Plus',
  userName: 'tyest',
  cardName: 'Visa',
  cardNumber: '**** **** **** 8888',
  cardTypeLogo: Images.masterCardLogo1,
  cardTypeText: 'MasterCard',
};
const list = [
  {
    value:
      'It is a long established fact that a reader will be distracted by the readable',
  },
  {
    value: 'Lorem Ipsum comes from sections 1.10.32 ',
  },
  {
    value: 'Lorem Ipsum comes from sections 1.10.32 ',
  },
];

const ManageCardDetail = props => {
  const [lock, setLock] = useState(false);
  const lockView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLock(!lock);
        }}>
        <View style={styles.lockAndUnlockView}>
          <View>
            <RNImage
              source={Images.lockIcon}
              style={styles.lock}
              resizeMode={'contain'}></RNImage>
          </View>
          <View>
            <RNText style={styles.lockAndUnlockCard}>
              {Strings.lockAndUnlockCard}
            </RNText>
            <RNText style={styles.controlYourCardUsageToKeepYourAccountSecure}>
              {Strings.controlYourCardUsageToKeepYourAccountSecure}
            </RNText>
          </View>
          <View>
            <RNImage
              source={Images.leftArrow}
              style={styles.rightArrow}></RNImage>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const unlockView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLock(!lock);
        }}>
        <View>
          <View style={styles.unlockView}>
            <View style={commonStyles.flexDirectionRowAlignCenter}>
              <RNImage
                source={Images.Lockgreen}
                style={styles.lock}
                resizeMode={'contain'}></RNImage>
              <RNText style={styles.unlock}>{Strings.unlocked}</RNText>
            </View>
            <View style={commonStyles.flexDirectionRowAlignCenter}>
              {/* <RNImage source={Images.toggleDisable} style={styles.toggleEnable} resizeMode={'contain'}></RNImage> */}
              <RNImage
                source={Images.toggleEnable}
                style={styles.toggleEnable}
                resizeMode={'contain'}></RNImage>
            </View>
          </View>
          <View style={styles.marginTop2}>
            <RNText style={styles.whenYourCardisLockedYouWillNotBeAbleTo}>
              {Strings.whenYourCardisLockedYouWillNotBeAbleTo}
            </RNText>
            <RNTextWithBullets data={list} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <RNContainer edges={['top', 'bottom']}>
      <RNHeader title={Strings.manageCard} />
      <View style={styles.headerSet}>
        <RNText style={styles.selectYourCard}>{'Silver Package'}</RNText>
        <RNText style={styles.monthlyServiceFee}>
          {'Monthly Service Fee'}
        </RNText>
      </View>
      <View style={commonStyles.marginTopHp2} />
      <RNCardView
        cardata={cardDetail}
        style={styles.cardHeight}
        paddingVerticalAdd={3}
      />
      {lock ? unlockView() : lockView()}
    </RNContainer>
  );
};

export default ManageCardDetail;
