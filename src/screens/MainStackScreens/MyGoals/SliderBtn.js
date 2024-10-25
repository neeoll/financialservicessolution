import React, {useRef} from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Images, wp} from '../../../constants';
import colors from '../../../constants/colors';
import {TextGradient} from '../../../components';

const {width} = Dimensions.get('window');
const lockWidth = width * 0.75;
const lockHeight = 60;
const smallgap = 4;
const finalPosition = lockWidth - lockHeight;

export default function SliderBtn({onComplete}) {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const TextGradient2 = new Animated.createAnimatedComponent(TextGradient);
  const translateBtn = pan.x.interpolate({
    inputRange: [0, finalPosition],
    outputRange: [0, finalPosition],
    extrapolate: 'clamp',
  });
  const textOpacity = pan.x.interpolate({
    inputRange: [0, lockWidth / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateText = pan.x.interpolate({
    inputRange: [0, lockWidth / 2],
    outputRange: [0, lockWidth / 4],
    extrapolate: 'clamp',
  });
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, {dx: pan.x}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (g.vx > 2 || g.dx > lockWidth / 2) {
          unlock();
        } else {
          reset();
        }
      },
      onPanResponderTerminate: () => reset(),
    }),
  ).current;
  const reset = () => {
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  const unlock = () => {
    Animated.spring(pan, {
      toValue: {x: finalPosition, y: 0},
      useNativeDriver: true,
      bounciness: 0,
    }).start();
    setTimeout(() => {
      onComplete();
    }, 300);
  };
  return (
    <View style={styles.lockContainer}>
      <TextGradient2
        style={{
          fontSize: wp(5),
          zIndex: -1,
          fontWeight: '500',
          opacity: textOpacity,
          transform: [{translateX: translateText}],
        }}
        text={'Slide to redeem '}></TextGradient2>
      {/* <Animated.Text
          style={[
            styles.txt,
            {opacity: textOpacity, transform: [{translateX: translateText}]},
          ]}>
          {'Slide to redeem'}
        </Animated.Text> */}
      <Animated.View
        style={[styles.bar, {transform: [{translateX: translateBtn}]}]}
        {...panResponder.panHandlers}>
        <LinearGradient
          style={{
            height: lockHeight - smallgap * 2,
            width: lockHeight - smallgap * 2,
            borderRadius: wp(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={[colors.LN_FIRST, colors.LN_TWO]}>
          <Image
            resizeMode="contain"
            source={Images.doubleRightArrow}
            style={{width: wp(5), height: wp(5)}}></Image>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lockContainer: {
    height: lockHeight,
    width: lockWidth,
    borderRadius: lockHeight,
    backgroundColor: '#FFF5D3',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  txt: {
    color: colors.LN_FIRST,
    // letterSpacing: 2,
    fontSize: wp(6),
    // zIndex: -1,
    fontWeight: '500',
  },
  bar: {
    position: 'absolute',
    height: lockHeight - smallgap * 2,
    width: lockHeight - smallgap * 2,
    backgroundColor: '#fff',
    borderRadius: lockHeight,
    left: smallgap,
    elevation: 1,
  },
});
