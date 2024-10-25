import React from 'react';
import {Platform, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {Colors} from '../constants';

const TextGradient = ({
  text,
  colors = [Colors.LN_FIRST, Colors.LN_TWO],
  // colors = Platform.select({
  //   ios: [Colors.LN_FIRST, Colors.LN_TWO],
  //   android: ['#E1AD01', '#F28500'],
  // }),
  style = {},
  start = {x: 0, y: 0},
  end = {x: 0.6, y: 1},
  locations = [0.2, 1],
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, {backgroundColor: 'transparent', color: 'white'}]}>
          {text}
        </Text>
      }>
      <LinearGradient
        // locations={locations}
        colors={colors}
        start={start}
        end={end}>
        <Text style={[style, {opacity: 0, color: 'white'}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default TextGradient;
