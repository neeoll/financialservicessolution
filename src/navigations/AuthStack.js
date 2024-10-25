import React from 'react';
import { Screens } from '../constants';
import { Login, OnBoarding, PackageDetails, PaymentPackage, SignUp } from '../screens';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name={Screens.OnBoarding} component={OnBoarding} />
            <Stack.Screen name={Screens.Login} component={Login} />
            <Stack.Screen name={Screens.SignUp} component={SignUp} />
            <Stack.Screen
                name={Screens.PackageDetails}
                component={PackageDetails}
            />
            <Stack.Screen
                name={Screens.PaymentPackage}
                component={PaymentPackage}
            />
        </>
    );
}

