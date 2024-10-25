import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts, hp, wp} from '../constants';
import TextGradient from '../components/GradientText';
import {BlurView} from '@react-native-community/blur';

function MyCustomTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Platform.OS == 'android' ? 50 : 80,
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: Platform.OS == 'ios' ? null : Colors.yellowBg,
        // opacity: Platform.OS == 'android' ? 0.8 : 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0,
        // elevation: 0,
      }}>
      {/* {Platform.OS == 'ios' && ( */}
        <BlurView
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          blurType={'light'}
          blurAmount={10}
          reducedTransparencyFallbackColor="transparent"
        />
      {/* )} */}
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const tabBarIconActive = options.tabBarIcon.icon;
        const tabBarIconInActive = options.tabBarIcon.icon2;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate({name: route.name, merge: true});
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Platform.OS == 'android' ? 0 : -15, // adjust for set tab images
            }}>
            <TabIcon
              isFocused={isFocused}
              tabIcon={tabBarIconActive}
              tabIcon2={tabBarIconInActive}
              index={state.index}
              label={label}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({isFocused, tabIcon, tabIcon2, label, index}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        //overflow: 'hidden',
      }}>
      <Image
        source={isFocused ? tabIcon : tabIcon2}
        style={{
          resizeMode: 'contain',
          height: hp(4.5),
          width: wp(4.5),
        }}
      />
      {isFocused ? (
        <TextGradient
          text={label}
          style={{
            fontSize: wp(3.5),
            fontFamily: Fonts.POPPINS_REGULAR,
            fontWeight: '600',
          }}
        />
      ) : (
        <Text
          style={{
            color: '#BDBDBD',
            fontSize: wp(3.5),
            fontFamily: Fonts.POPPINS_REGULAR,
            fontWeight: '400',
          }}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default MyCustomTabBar;
