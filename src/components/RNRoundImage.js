import React from 'react';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import { Images, wp } from '../constants';
import { View } from 'react-native';
import { RNImage } from '.';

const RNRoundImage = ({
    img = Images.defaultProfile,
    size = 10,
    bgColor = colors.GREY,
    style,
    issShowEdit
}) => {
    return (
        <View>
            <FastImage
                style={{
                    width: wp(size),
                    height: wp(size),
                    borderRadius: wp(size / 2),
                    backgroundColor: bgColor,
                    ...style
                }}
                source={!!img ? img : null}
            />
            {issShowEdit && <View style={{ position: 'absolute', bottom: 1, right: -10 }}>
                <RNImage source={Images.edit} style={{
                    width: wp(5.5),
                    height: wp(5.5)
                }}></RNImage>
            </View>}
        </View>
    )
};

export default RNRoundImage;