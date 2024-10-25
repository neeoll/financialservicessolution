import React from 'react';
import {RNContainer, RNHeader, RNImage, RNText} from '../../../components';
import styles from './styles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import {Images, Strings} from '../../../constants';
import {FlatList, View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';

const list = [
  {
    icon: Images.dailyImage,
    cycleType: 'Daily',
    desc: 'There are many variations of passages',
    toggle: true,
  },
  {
    icon: Images.basedWeekly,
    cycleType: 'Based weekly',
    desc: 'Contrary to popular belief, Lorem Ipsum is not.',
    toggle: false,
  },
  {
    icon: Images.basedWeekly,
    cycleType: 'Bi Weekly',
    desc: 'Contrary to popular belief, Lorem Ipsum is not.',
    toggle: false,
  },
];

const PayCycle = props => {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={[styles.marginTopAdd, {...commonStyles.flexDirectionRowCenter}]}>
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
            <View>
              <RNText style={styles.desc}>{item?.desc}</RNText>
            </View>
          </View>
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
  const payCycleList = () => {
    return (
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <RNImageBgContainer>
      <RNContainer>
        <RNHeader navigation={props.navigation} title={Strings.payCycle} />
        {payCycleList()}
      </RNContainer>
    </RNImageBgContainer>
  );
};

export default PayCycle;
