import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Colors, Images, Screens, Strings, wp } from '../constants';
import colors from '../constants/colors';
import { Card, Home, Loan, PackageDetails, PaymentPackage, Profile } from '../screens';
import { Image, Platform, StyleSheet } from 'react-native';
import MyCustomTabBar from './MyCustomTabBar';


const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            // tabBar={(tabsProps) => (
            //     <>
            //         <BottomTabBar {...tabsProps} />
            //     </>
            // )}
            tabBar={props => <MyCustomTabBar {...props} />}
            initialRouteName={Screens.Home}
            screenOptions={{
                headerShown: false,
            }}

        >
            <BottomTab.Screen
                name={Screens.Home}
                component={Home}
                options={{
                    tabBarLabel: Strings.Home,
                    tabBarIcon: {
                      icon: Images.HomeActive,
                      icon2: Images.HomeInactive,
                    },
                  }}
            />
            <BottomTab.Screen
                name={Screens.Card}
                component={Card}
                options={{
                    tabBarLabel: Strings.Card,
                    tabBarIcon: {
                      icon: Images.CardActive,
                      icon2: Images.CardInactive,
                    },
                  }}
            />
            <BottomTab.Screen
                name={Screens.Loan}
                component={Loan}
                options={{
                    tabBarLabel: Strings.Card,
                    tabBarIcon: {
                      icon: Images.LoanActive,
                      icon2: Images.LoanInactive,
                    },
                  }}
            />
            <BottomTab.Screen
                name={Screens.Profile}
                component={Profile}
                options={{
                    tabBarLabel: Strings.profile,
                    tabBarIcon: {
                      icon: Images.profileActive,
                      icon2: Images.profileInactive,
                    },
                  }}
                
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabImages: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    // tabImagesCard: {
    //     height: 15,
    //     width: 30,
    // }

});

export default TabRoutes