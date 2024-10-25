//import liraries
import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import styles from './styles';
import {Images, Strings} from '../../../constants';
import TextGradient from '../../../components/GradientText';
import RNButton from '../../../components/RNButton';
import colors from '../../../constants/colors';
import RNTransParentBtn from '../../../components/RNTransParentBtn';

const silverPackageFeature = [
  {
    name: '30% Annual Home Renter & Mortgage payment fees waiver up to $1,250.00',
    date: '$1,250.00',
    claimFund: 'Direct Your Account Fund',
    btnText: 'Received',
    claimSelected: 'Claim Selected',
  },
];
const Claim = props => {
  const getColor = val => {
    if (val == 'Active+') {
      return colors.greenColor;
    } else if (val == 'Claim fund') {
      return colors.darkGrey;
    } else {
      return colors.yellowTheme;
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainView}>
        <View style={styles.rnTransParentBtn}>
          <RNTransParentBtn
            style={styles.claimBtn}
            title={item?.claimSelected}
            textStyle={styles.claimSelectedText}
            isGradientText
          />
        </View>
        <View style={styles.buyCardContainer}>
          <View style={styles.buyCardHeader}>
            <RNImage
              resizeMode={'contain'}
              source={Images.checkRound}
              style={styles.arrowImage}
            />
            <RNText style={styles.packageDescription}>{item?.name}</RNText>
          </View>
          <View style={styles.packageFooter}>
            <View>
              <TextGradient text={item?.date} style={styles.date1} />
              <RNText style={styles.claimFind}>{item?.claimFund}</RNText>
            </View>
            <RNTransParentBtn
              style={styles.listBtn}
              title={item?.btnText}
              textStyle={styles.package}
            />
          </View>
        </View>
      </View>
    );
  };

  const offers = () => {
    return (
      <FlatList
        data={silverPackageFeature}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <RNContainer adjustTabBarHeight edges={['top']}>
      <RNHeader title={Strings.claim} />
      {offers()}
    </RNContainer>
  );
};

export default Claim;
