import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RNText from './RNText';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts, Images, Strings, hp, wp } from '../constants';
import colors from '../constants/colors';
import { screenWidth } from '../constants/ResponsiveScreens';
import { RNImage } from '.';
import commonStyles from '../styles/commonStyles';
import FastImage from 'react-native-fast-image';

export default function RNCardView({
    style,
    cardata,
    start = { x: 0, y: 0 },
    end = { x: 1, y: 1 },
    locations = [0, 1],
    onPressPlus,
    paddingVerticalAdd,
    isSmallerFont = false
}) {
    const getBg = val => {
        switch (val) {
            case 'balance':
                return [colors.LN_FIRST, colors.LN_TWO];
            case 'yellow':
                return [colors.LN_FIRST, colors.LN_TWO];
            case 'black':
                return [colors.LN_BLACK_FIRST, colors.LN_BLACK_TWO];
            default:
                return [];
        }
    };
    const getTextColor = val => {
        switch (val) {
            case 'balance':
                return colors.WHITE;
            case 'yellow':
                return colors.BLACK;
            case 'black':
                return colors.WHITE;
            default:
                return colors.WHITE;
        }
    };
    return (
        <View
            style={[
                styles.btnCon,
                style,
            ]}>
            <LinearGradient
                colors={getBg(cardata?.cardType)}
                start={start}
                end={end}
                locations={locations}
                style={[
                    styles.linearGradient,
                ]}>
                {cardata?.cardType == 'balance' ?
                    <View style={styles.paddingWp}>
                        <RNText style={[styles.titleBalance,]}>{cardata?.cardTitle}</RNText>
                        <View style={[commonStyles.flexDirectionRowCenter, { paddingVertical: wp(paddingVerticalAdd) }]}>
                            <RNText style={styles.balance}>${cardata?.balance}</RNText>
                                <RNImage source={Images.plusIcon} style={styles.plusIcon}></RNImage>
                        </View>
                        <View style={styles.percentageMainView}>
                            <View style={styles.percentageView}>
                                <RNImage source={Images.percentageIcon} style={styles.percentageIcon}></RNImage>
                                <RNText style={styles.percentage}>${cardata?.percent}</RNText>
                            </View>
                            <View style={styles.percentageView}>
                                <RNText style={styles.usd}>{'USD'}</RNText>
                                <TouchableOpacity onPress={onPressPlus}>
                                <RNImage source={Images.arrowdownWhite} style={styles.downArrow}></RNImage>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.paddingWp}>
                        <View style={
                            isSmallerFont ? styles.logoView1 : styles.logoView
                            }>
                            <Image source={Images.visalogo} resizeMode={'contain'} style={isSmallerFont ? styles.visaLogo1 : styles.visaLogo}></Image>
                        </View>
                        <View style={styles.percentageView}>
                            <RNImage source={Images.nexusPayLogo} style={styles.percentageIcon}></RNImage>
                            <RNText style={[isSmallerFont ? styles.title1 : styles.title, { color: getTextColor(cardata?.cardType)}]}>{cardata?.cardTitle}</RNText>
                        </View>
                        <View 
                        style={{ paddingVertical: isSmallerFont ? wp(1) : wp(paddingVerticalAdd)}}
                        >
                            <View style={commonStyles.flexDirectionRowCenter}>
                                <RNText style={[isSmallerFont ? styles.cardNumber1 : styles.cardNumber, { color: getTextColor(cardata?.cardType) }]}>{cardata?.cardNumber}</RNText>
                            </View>
                            <View style={commonStyles.flexDirectionRowCenter}>
                                <RNText style={[isSmallerFont ? styles.cardCategoty1 : styles.cardCategoty,{ color: getTextColor(cardata?.cardType) }]}>{cardata?.cardCategoty}</RNText>
                                <RNText style={[isSmallerFont ? styles.cardCategoty1 : styles.cardCategoty, { color: getTextColor(cardata?.cardType),fontWeight: '400' }]}>{Strings.exp} {cardata?.expiry}</RNText>
                            </View>
                        </View>
                        <View style={commonStyles.flexDirectionRowCenter}>
                            <RNText style={[isSmallerFont ?styles.cardName1 : styles.cardName , { color: getTextColor(cardata?.cardType) }]}>{cardata?.userName}</RNText>
                            <View style={commonStyles.alignCenter}>
                                <RNImage
                                    resizeMode={FastImage.resizeMode.contain}
                                    source={Images.masterCardLogo1}
                                    style={isSmallerFont ? styles.paymentLogo1 :  styles.paymentLogo}></RNImage>
                                <View >
                                    <RNText style={[styles.paymentMethodDetailText, { color: getTextColor(cardata?.cardType) }]}>
                                        {cardata?.cardTypeText}
                                    </RNText>
                                </View>
                            </View>
                        </View>
                    </View>}
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    btnCon: {
        width: screenWidth / 1.1,
        borderRadius: wp(4),
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderRadius: wp(4)
    },
    title: {
        ...commonStyles.marginLeftWp2,
        color: colors.BLACK_2,
        fontSize: wp(3),
        color: colors.WHITE,
    },
    title1: {
        ...commonStyles.marginLeftWp2,
        color: colors.BLACK_2,
        fontSize: wp(2.5),
        color: colors.WHITE,
    },
    titleBalance: {
        ...commonStyles.marginLeftWp2,
        color: colors.BLACK_2,
        fontSize: wp(4),
        fontFamily: Fonts.POPPINS,
        fontWeight: '500'
    },

    cardNumber: {
       // ...commonStyles.marginLeftWp2,
        color: colors.BLACK_2,
        fontSize: wp(3.5),
        color: colors.WHITE,
    },
    cardNumber1: {
       // ...commonStyles.marginLeftWp3,
        color: colors.BLACK_2,
        fontSize: wp(2.5),
        color: colors.WHITE,
    },
    paddingWp: {
        padding: wp(3)
    },
    balance: {
        fontSize: wp(11),
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_BOLD,
        fontWeight: '600'
    },

    plusIcon: {
        width: wp(8),
        height: wp(8),
    },
    percentageIcon: {
        width: wp(4),
        height: wp(4),
    },
    downArrow: {
        width: wp(6),
        height: wp(6),
    },
    visaLogo: {
        height: hp(6),
        // width:wp(20),
        resizeMode: 'contain'
    },
    visaLogo1: {
        height: hp(12),
        width:wp(20),
        resizeMode: 'contain'
    },
    percentage: {
        ...commonStyles.fontSizeWp3,
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_REGULAR,
        marginLeft: 5
    },
    cardCategoty: {
        ...commonStyles.fontSizeWp3,
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    cardCategoty1: {
        fontSize: wp(2.5),
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    cardName: {
        ...commonStyles.fontSizeWp4,
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '600'
    },
    cardName1: {
        fontSize: wp(2.5),
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '600'
    },
    percentageView: { flexDirection: 'row', alignItems: 'center' },
    paymentLogo: {
        width: wp(8),
        height: wp(8),
    },
    paymentLogo1: {
        width: wp(4),
        height: wp(4),
    },
    paymentMethodDetailText: {
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_REGULAR,
        ...commonStyles.fontSizeWp2,
    },
    percentageMainView: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    usd: {
        ...commonStyles.fontSizeWp3,
        color: colors.WHITE,
        fontFamily: Fonts.POPPINS_REGULAR,
        marginRight: 7
    },
    logoView1: {
        position: 'absolute',right:0,top:-30
    },
    logoView: {
        position: 'absolute'
    }
});
