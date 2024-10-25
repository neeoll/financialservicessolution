import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  PanResponder,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {RNContainer, RNImage, RNText, TextGradient} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationBack, navigationTo} from '../../../navigations';
import colors from '../../../constants/colors';
import RNButton from '../../../components/RNButton';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import SliderBtn from './SliderBtn';

export default function MyGoals({navigation}) {
  const {top, bottom} = useSafeAreaInsets();

  const [isVisible, setIsVisible] = useState(false);
  const stackImg = [
    {color: '#FFC243', img: Images.home2},
    {color: '#1B4399', img: Images.car},
    {color: '#C2F3A6', img: Images.umbrella},
  ];
  const listData = [
    {
      title: 'Building Agency',
      subTitle: '365 Days Left',
      price1: '2.345',
      price2: '5000',
      icon: Images.home2,
      color: colors.YELLOW_1,
    },
    {
      title: 'New Car',
      subTitle: '365 Days Left',
      price1: '2.345',
      price2: '5000',
      icon: Images.car,
      color: colors.PINK_1,
    },
    {
      title: 'Buy Book',
      subTitle: '365 Days Left',
      price1: '2.345',
      price2: '5000',
      icon: Images.book,
      color: colors.BLUE_2,
    },
    {
      title: 'New Camera',
      subTitle: '365 Days Left',
      price1: '2.345',
      price2: '5000',
      icon: Images.camera,
      color: colors.PURPLE,
    },
  ];

  const renderCard = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // setIsVisible(true);
          navigationTo(navigation, Screens.AmountGoalModal);
        }}
        style={styles.cardContainer}>
        <View style={[styles.cardIconContainer, {backgroundColor: item.color}]}>
          <RNImage source={item.icon} style={styles.cardIcon}></RNImage>
        </View>
        <View style={styles.cardTextContainer}>
          <RNText style={styles.cardTitle}>{item.title}</RNText>
          <RNText style={styles.cardSubTitle}>{item.subTitle}</RNText>
        </View>
        <View style={styles.cardAmountContainer}>
          <RNText style={styles.cardAmount}>
            {`$${item.price1}/`}
            <RNText style={styles.cardAmountGray}>{`$${item.price2}`}</RNText>
          </RNText>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <RNContainer
      backgroundColor={colors.GREY_11}
      edges={[]}
      hideHorizontalPadding>
      <ImageBackground source={Images.myGoalsHeaderBg} style={styles.headerBg}>
        <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
        {/* insets */}
        <View style={{height: top}}></View>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigationBack(navigation)}
            style={styles.headerBackButton}>
            <RNImage
              source={Images.leftArrow}
              style={styles.headerBackIcon}></RNImage>
          </TouchableOpacity>
          <RNText style={styles.headerTitle}>{Strings.myGoals}</RNText>
          <View style={styles.headerPlaceholder}></View>
        </View>
        {/* home car */}
        <View style={styles.stackImgContainer}>
          {stackImg.map((itm, index) => {
            return (
              <View
                key={`#goalim${index}`}
                style={[
                  styles.stackImgItem,
                  {
                    backgroundColor: itm.color,
                    marginLeft: index === 0 ? 0 : -wp(2.5),
                  },
                ]}>
                <RNImage source={itm.img} style={styles.stackImgIcon}></RNImage>
              </View>
            );
          })}
        </View>
        {/* saved text */}
        <RNText style={styles.savedText}>We saved $ 200 today</RNText>
        {/* Add text*/}
        <RNText style={styles.addText}>
          Adde $100 to Get New Car,$50 to Building Agency,$50 To Buy Book
        </RNText>
      </ImageBackground>
      {/* List */}
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 10}}
          data={listData}
          renderItem={({item, index}) => renderCard(item, index)}></FlatList>
      </View>

      <RNButton
        onPress={() => navigationTo(navigation, Screens.CreateMyGoals)}
        title={'+Add New'}
        round
        style={styles.addButton}></RNButton>
      <View style={{height: bottom + 10}}></View>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  headerBackButton: {
    height: wp(8),
    width: wp(8),
    justifyContent: 'center',
  },
  headerBackIcon: {
    height: wp(6),
    width: wp(6),
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(5),
  },
  headerPlaceholder: {
    height: wp(8),
    width: wp(8),
  },
  stackImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  stackImgItem: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.WHITE,
  },
  stackImgIcon: {
    width: wp(8),
    height: wp(8),
  },
  savedText: {
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginTop: hp(2),
    fontSize: wp(5.5),
  },
  addText: {
    alignSelf: 'center',
    marginTop: hp(1),
    fontSize: wp(3.5),
    textAlign: 'center',
    width: '85%',
    color: colors.BLACK_6,
    marginBottom: hp(2),
    opacity: 0.7,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    backgroundColor: colors.WHITE,
    paddingHorizontal: wp(3),
    paddingVertical: wp(5),
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardIconContainer: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(8),
  },
  cardIcon: {
    width: wp(5),
    height: wp(5),
  },
  cardTextContainer: {
    marginLeft: wp(4),
  },
  cardTitle: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  cardSubTitle: {
    opacity: 0.6,
    fontSize: wp(3.5),
  },
  cardAmountContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  cardAmount: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(4),
  },
  cardAmountGray: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(4),
    color: colors.GREY_12,
  },
  progressBar: {
    height: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: colors.GREY_12,
    marginTop: 8,
  },
  progress: {
    height: 5,
    borderRadius: 5,
    width: '60%',
    backgroundColor: '#FFC243',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  addButton: {
    width: '50%',
    marginTop: hp(2),
    alignSelf: 'center',
  },
});
