import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNSearchBar,
  RNText,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import {navigationTo} from '../../../navigations';

const list = [
  {
    icon: Images.dukeEnergy,
    cycleType: 'Duke Energy',
    desc: 'USA State Power Corporation Limited',
  },
  {
    icon: Images.weEnergy,
    cycleType: 'We Energies',
    desc: 'USA State Power Corporation Limited',
  },
  {
    icon: Images.dukeEnergy,
    cycleType: 'Duke Energy',
    desc: 'USA State Power Corporation Limited',
  },
  {
    icon: Images.weEnergy,
    cycleType: 'We Energies',
    desc: 'USA State Power Corporation Limited',
  },
];
export default function ElectricityPay({navigation}) {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigationTo(navigation, Screens.ElectricityPayDetail);
        }}>
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
              <View>
                <RNText style={styles.desc}>{item?.desc}</RNText>
              </View>
            </View>
          </View>
          <View style={commonStyles.border} />
        </View>
      </TouchableOpacity>
    );
  };
  const energy = () => {
    return (
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <RNContainer backgroundColor={colors.GREY_11} useScroll edges={['top']}>
      <RNImageBgContainer>
        <RNHeader title={Strings.electricityPay}></RNHeader>
        <RNSearchBar
          placeholder={'Search Electricity Bill Board Name'}
          containerStyle={styles.searchBar}></RNSearchBar>
        <View style={styles.spacer} />
        {energy()}
      </RNImageBgContainer>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: hp(3),
  },
  spacer: {
    marginVertical: hp(1),
  },
  icon: {
    height: hp(6),
    width: wp(10),
  },
  cycleType: {
    fontFamily: Fonts.JOST,
    color: colors.BLACK,
    fontWeight: '500',
  },
  toggleEnable: {
    height: hp(5),
    width: wp(10),
  },
  desc: {
    fontFamily: Fonts.JOST,
    color: colors.GREY_4,
    fontWeight: '400',
    fontSize: wp(3.2),
  },
  marginTopAdd: {
    marginTop: hp(2),
  },
});
