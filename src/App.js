import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import RootNaviagtion from './navigations/RootNaviagtion';
import SplashScreen from 'react-native-splash-screen';
import colors from './constants/colors';
import {hp, wp} from './constants';
import {fontWithPixels} from './constants/ResponsiveScreens';
export default function App() {
  const {width, height, fontScale} = useWindowDimensions();
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.WHITE}></StatusBar>
      <RootNaviagtion ></RootNaviagtion>
    </>
  );
}

const styles = StyleSheet.create({});
