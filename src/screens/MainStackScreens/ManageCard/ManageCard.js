//import liraries
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import RNCardView from '../../../components/RNCardView';
import styles from './styles';
import {Images, Screens, Strings} from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
const cardList = [
  {
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
  },
  {
    cardTitle: 'Financial Services Solution',
    balance: '00000',
    percent: '14%',
    cardType: 'black',
    expiry: '12/25',
    cardCategoty: 'Platinum Plus',
    userName: 'tyest',
    cardName: 'Visa',
    cardNumber: '**** **** **** 8888',
    cardTypeLogo: Images.masterCardLogo1,
    cardTypeText: 'MasterCard',
  },
];

const ManageCard = props => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push(Screens.ManageCardDetail);
        }}>
        <View
          style={[styles.listBorder, {...commonStyles.flexDirectionRowCenter}]}>
          <View>
            <RNCardView
              index={index}
              cardata={item}
              style={styles.cardHeight}
              isSmallerFont
              paddingVerticalAdd={3}
            />
          </View>
          <View>
            <RNText style={styles.packageName}>{'Silver Package'}</RNText>
            <RNText style={styles.monthlyServiceFee}>
              {'Monthly Service Fee'}
            </RNText>
            <RNText style={styles.cardStatus}>{Strings.cardStatus}</RNText>
            <RNText style={styles.status}>{'Active'}</RNText>
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
  const cardView = () => {
    return (
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <RNContainer edges={['top', 'bottom']}>
      <RNHeader title={Strings.manageCard} />
      <View style={commonStyles.marginTopHp2} />
      <RNText style={styles.selectYourCard}>{Strings.selectYourCard}</RNText>
      <View style={commonStyles.marginTopHp2} />
      {cardView()}
    </RNContainer>
  );
};

export default ManageCard;
