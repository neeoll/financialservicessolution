import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, OnBoarding, PackageDetails, SignUp} from '../screens';
import {Screens} from '../constants';
import colors from '../constants/colors';
import PaymentPackage from '../screens/PaymentPackage/PaymentPackage';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function RootNaviagtion() {
  return (
    <NavigationContainer theme={{colors: {background: colors.WHITE}}}>
      {/* animation set to none for android beacaue it crash blurview in android  */}
      <Stack.Navigator
        initialRouteName={Screens.OnBoarding}
        screenOptions={{
          headerShown: false,
          animation: Platform.OS == 'android' ? 'none' : 'horizontal',
        }}>
        {/* make true dynamic when set auth */}
        {/* {false ? AuthStack(Stack) : MainStack(Stack)} */}
        {AuthStack(Stack)}
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
