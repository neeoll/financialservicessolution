import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Fonts, wp } from "../constants";
import colors from "../constants/colors";
import { screenWidth } from "../constants/ResponsiveScreens";

const RNTextWithBullets = ({
    data,
    bulletCustomStyle,
    textStyleCustom
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ }}>
                <View style={styles.row}>
                    <View style={
                        [styles.bulletDeault,{...bulletCustomStyle}]
                        }>
                    </View>
                    <View style={{marginLeft:10}}>
                        <Text style={[styles.textStyle,{...textStyleCustom}]}>{item.value}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ marginTop: 5 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: screenWidth,
        justifyContent:"flex-start",
        alignItems: 'center'
    },
    textStyle: { fontFamily: Fonts.POPPINS_SEMI_BOLD, fontSize: wp(3.2), color: colors.GREY_4, maxWidth: 370, fontWeight: '400' },
    bulletDeault: {
        backgroundColor:colors.greenColor,height:8,width:8,borderRadius: 4
    }
});

export default RNTextWithBullets;
