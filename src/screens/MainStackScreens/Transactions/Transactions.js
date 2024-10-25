import React from 'react';
import {View, FlatList} from 'react-native';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import styles from './styles';
import {Images, Strings, hp} from '../../../constants';
import RNRoundImage from '../../../components/RNRoundImage';
import commonStyles from '../../../styles/commonStyles';

const deductionsList = [
  {
    title: 'Airbnb',
    image: Images.NetflixLogo,
    price: '30,000.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
  {
    title: 'NetFlix',
    image: Images.NetflixLogo,
    price: '-300.00',
    type: 'Rental',
    time: '9:10 PM',
  },
];
const Transactions = props => {
  const deductions = () => {
    return (
      <FlatList
        data={deductionsList}
        keyExtractor={(item, index) => index}
        renderItem={deductionsItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  };
  const deductionsItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.paddingVertical10,
          {...commonStyles.flexDirectionRowCenter},
        ]}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNRoundImage img={item?.image} />
          <View style={commonStyles.marginLeftWp2}>
            <RNText style={styles.deductionText}>{item?.title}</RNText>
            <RNText style={styles.savedText}>
              {item?.type}
            </RNText>
          </View>
        </View>
        <View style={commonStyles.alignToEnd}>
          <RNText style={styles.deductionText}>$ {item?.price}</RNText>
          <RNText style={styles.savedText}>{item?.time}</RNText>
        </View>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader navigation={props.navigation} title={Strings.transactions} />
      <View style={commonStyles.flexDirectionRowCenter}>
        <TextGradient style={styles.history} text={'History'}></TextGradient>
        
        <View style={commonStyles.flexDirectionRowAlignCenter}>
        <RNText style={styles.allText}>All</RNText>
        <RNImage
          resizeMode={'contain'}
          source={Images.Sorting}
          style={styles.Sorting}></RNImage>
        </View>
      </View>
      <View style={{paddingVertical:hp(1)}}/>
      <RNText style={styles.allText}>15.6.2022</RNText>
      <View style={commonStyles.marginTopHp1}>{deductions()}</View>
    </RNContainer>
  );
};

export default Transactions;
