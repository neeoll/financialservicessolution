import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationBack, navigationTo} from '../../../navigations';
import colors from '../../../constants/colors';
import RNButton from '../../../components/RNButton';

export default function CreateMyGoals({navigation}) {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <RNContainer
      useScroll
      backgroundColor={colors.GREY_11}
      edges={[]}
      hideHorizontalPadding>
      <ImageBackground source={Images.myGoalsHeaderBg} style={{width: '100%'}}>
        <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
        {/* insets */}
        <View style={{height: top}}></View>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            alignItems: 'center',
            paddingVertical: hp(1),
          }}>
          <TouchableOpacity
            onPress={() => navigationBack(navigation)}
            style={{height: wp(8), width: wp(8), justifyContent: 'center'}}>
            <RNImage
              source={Images.leftArrow}
              style={{height: wp(6), width: wp(6)}}></RNImage>
          </TouchableOpacity>
          <RNText
            style={{fontFamily: Fonts.POPPINS_SEMI_BOLD, fontSize: wp(5)}}>
            {Strings.myGoals}
          </RNText>
          <View style={{height: wp(8), width: wp(8)}}></View>
        </View>
        {/* edit image*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: hp(3),
          }}>
          <View
            style={{
              width: wp(20),
              height: wp(20),
              borderRadius: wp(20),
              backgroundColor: colors.BLACK,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 4,
              borderColor: colors.WHITE,
              marginLeft: -wp(2.5),
            }}>
            <RNImage
              source={Images.umbrella}
              style={{width: wp(8), height: wp(8)}}></RNImage>
            <View
              style={{
                width: wp(6),
                height: wp(6),
                backgroundColor: colors.GREY_15,
                borderRadius: wp(8),
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: -wp(2),
                bottom: wp(2),
              }}>
              <Image
                source={Images.editPen}
                style={{
                  width: wp(4),
                  height: wp(4),
                  tintColor: colors.WHITE,
                }}></Image>
            </View>
          </View>
        </View>
        {/* Holdiay text */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: hp(2),
          }}>
          <RNText
            style={{
              alignSelf: 'center',
              fontFamily: Fonts.POPPINS_SEMI_BOLD,
              fontSize: wp(4.5),
              marginRight: wp(1),
            }}>
            Holidays In Maldives
          </RNText>
          <Image
            source={Images.editPen}
            style={{
              width: wp(5),
              height: wp(5),
              tintColor: colors.BLACK_6,
            }}></Image>
        </View>
      </ImageBackground>

      <View style={{flex: 1, paddingHorizontal: wp(5)}}>
        <View style={{alignItems: 'center'}}>
          <RNText
            style={{fontSize: wp(5), fontWeight: '500', marginTop: hp(2)}}>
            Set amount Goals
          </RNText>
          <RNText style={{fontSize: wp(3.5), opacity: 0.7}}>
            How much would you like to saving?
          </RNText>
          <TextGradient
            style={{
              marginTop: hp(2),
              fontSize: wp(9),
              fontFamily: Fonts.POPPINS_SEMI_BOLD,
            }}
            text={'$ 10,000.00'}></TextGradient>
        </View>
        <View
          style={{
            height: 0.5,
            marginTop: hp(2),
            backgroundColor: colors.BLACK,
            opacity: 0.2,
          }}></View>
        <View style={{marginTop: hp(2)}}>
          <RNText style={{marginBottom: hp(1)}}>Goal Start Date</RNText>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.WHITE,
              padding: wp(4),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <TextInput
              style={{flex: 1, padding: 0}}
              placeholderTextColor={colors.GREY_2}
              placeholder={'August 12, 2023'}></TextInput>
            <Image
              source={Images.Calendar2}
              style={{width: wp(5), height: wp(5)}}></Image>
          </View>
        </View>
        <View style={{marginTop: hp(2)}}>
          <RNText style={{marginBottom: hp(1)}}>Goal End Date</RNText>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.WHITE,
              padding: wp(4),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <TextInput
              style={{flex: 1, padding: 0}}
              placeholderTextColor={colors.GREY_2}
              placeholder={'August 12, 2023'}></TextInput>
            <Image
              source={Images.Calendar2}
              style={{width: wp(5), height: wp(5)}}></Image>
          </View>
        </View>
        <View style={{marginTop: hp(2)}}>
          <RNText style={{marginBottom: hp(1)}}>Description</RNText>
          <View
            style={{
              backgroundColor: colors.WHITE,
              padding: wp(4),
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.GREY,
              height: hp(10),
            }}>
            <TextInput
              text
              multiline={true}
              style={{flex: 1, padding: 0, textAlignVertical: 'top'}}
              placeholderTextColor={colors.GREY_2}
              placeholder={'Description'}></TextInput>
          </View>
        </View>
      </View>
      <RNButton
        onPress={() =>
          navigationTo(navigation, Screens.AmountGoalModal, {
            prevScreen: 'createGoal',
          })
        }
        title={Strings.continue}
        round
        style={{
          width: '90%',
          marginTop: hp(2),
          alignSelf: 'center',
          marginBottom: bottom + 10,
        }}></RNButton>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
