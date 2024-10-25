import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { screenHeight, } from '../constants/ResponsiveScreens';
import ModalHeader from './ModalHeader';
import colors from '../constants/colors';
import { Images, wp } from '../constants';
import commonStyles from '../styles/commonStyles';
import { RNText } from '.';
import RNRoundImage from './RNRoundImage';

const changeCurrency = [
  {
    icon: Images.usd,
    name: 'USD',
    amount: '2525.00'
  },
  {
    icon: Images.ngn,
    name: 'NGN',
    amount: '2525.00'
  },
  {
    icon: Images.myr,
    name: 'MYR',
    amount: '2525.00'
  }
]
export default ChangeCurrenyModal = props => {

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <View style={commonStyles.flexDirectionRowAlignCenter}>
          <RNRoundImage size={6} img={item?.icon} />
          <View>
            <RNText style={[styles.name,{...commonStyles.marginLeftWp2}]}> {item?.name}</RNText>
          </View>
        </View>
        <View>
          <RNText style={styles.name}>{item?.amount}</RNText>
        </View>
      </View>
    )
  }
  return (
    <Modal
      isVisible={props.open}>
      <View style={styles.mainView}>
        <ModalHeader
          header={props.header}
          OnCancel={() => props.OnCancel()}
        />
        <View>
          <FlatList
            data={changeCurrency}
            keyExtractor={(item, index) => index}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Modal>

  );
};
const styles = StyleSheet.create({
  mainView: {
    height: screenHeight / 4,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.GREY,
    padding: 10
  },
  listItem: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
    borderBottomColor: colors.GREY_10,
    borderBottomWidth: 2
  },
  name: {
    color: colors.BLACK,
    fontSize: wp(3.5),
  }
});
