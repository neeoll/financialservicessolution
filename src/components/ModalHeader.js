import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Images, wp} from '../constants';
import {RNImage, RNText} from '.';
import commonStyles from '../styles/commonStyles';
import TextGradient from './GradientText';

export default ModalHeader = props => {
  return (
    <View style={[commonStyles.flexDirectionRow]}>
      <TextGradient style={styles.headerText} text={props.header} />
      <TouchableOpacity onPress={() => props.OnCancel()}>
        <RNImage
          source={Images.closeSquare}
          style={styles.closeSquare}></RNImage>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  closeSquare: {
    width: wp(7),
    height: wp(7),
  },
  headerText: {
    fontSize: wp(4),
  },
});
