import React, {useCallback, useState, useRef, useEffect} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import colors from '../constants/colors';
import RNCardView from './RNCardView';
import {Fonts, Images, Strings, hp, wp} from '../constants';
import {RNHeader, RNImage, RNText} from '.';
import {hitSlopProp} from '../styles/commonStyles';

const screenWidth = Dimensions.get('window').width;

const RNSlider = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef();
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const onScroll = useCallback(event => {
    const ind = event.nativeEvent.contentOffset.x / screenWidth;
    indexRef.current = ind;
    const roundIndex = Math.round(ind);
    setCurrentIndex(roundIndex);
  }, []);

  // for auto scroll
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     flatListRef.current?.scrollToIndex({
  //       animated: true,
  //       index:
  //         (parseInt(currentIndex) + 1) % 19 == props?.data?.length
  //           ? 0
  //           : (parseInt(currentIndex) + 1) % 19,
  //     });
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [currentIndex]);

  const header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: hp(1),
          marginTop: hp(6),
        }}>
        <TouchableOpacity
          hitSlop={hitSlopProp}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <RNImage
            resizeMode={'contain'}
            source={Images.leftArrow}
            style={{width: wp(6), height: wp(6)}}></RNImage>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.POPPINS_BOLD,
            fontSize: wp(4.1),
            fontWeight: '700',
            color: colors.WHITE,
          }}>
          The Pavilion
        </Text>
        <View></View>
      </View>
    );
  };

  const flatListOptimizationProps = {
    initialNumToRender: 5,
    maxToRenderPerBatch: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 5,

    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: screenWidth,
        offset: index * screenWidth,
      }),
      [],
    ),
  };
  const imageView = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          clearInterval(intervalRef.current);
        }}>
        <ImageBackground
          source={item}
          style={{
            resizeMode: 'cover',
            width: screenWidth,
            height: hp(35),
          }}>
          {header()}
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={props?.data}
        renderItem={({item, index}) => {
          return props.type == 'card' ? (
            <RNCardView index={index} cardata={item} paddingVerticalAdd={5} />
          ) : (
            imageView(item)
          );
        }}
        pagingEnabled
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        {props?.data?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: 10,
                backgroundColor:
                  currentIndex === index ? colors.yellowBorder : colors.GREY_5,
                width: 10,
                borderRadius: 5,
                alignSelf: 'center',
                marginHorizontal: 3,
                //marginTop: -30,
              }}
            />
          );
        })}
      </View>
    </>
  );
};

export default RNSlider;
