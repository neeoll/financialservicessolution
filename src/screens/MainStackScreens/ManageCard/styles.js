import {StyleSheet} from 'react-native';
import {Fonts, hp, wp } from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    cardHeight: {
        height:hp(13),
       // paddingVertical:,
        width: wp(43)
    },
    selectYourCard: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'600',
        fontSize: wp(4)   
    },
    monthlyServiceFee: {
        fontFamily: Fonts.JOST,
        fontWeight:'300',
        fontSize: wp(3),
        color: colors.GREY_3
    },
    packageName: {
        fontFamily: Fonts.JOST,
        fontWeight:'600',
        fontSize: wp(4.5),
        color: colors.GREY_5 
    },
    cardStatus: {
        fontFamily: Fonts.JOST,
        fontWeight:'600',
        fontSize: wp(3),
        color: '#1D1E20',
        marginTop:5
    },
    status: {
        fontFamily: Fonts.JOST,
        fontWeight:'400',
        fontSize: wp(3),
        color: colors.greenColor
    },
    rightArrow: {
        height:hp(3),
        width: wp(2),
        transform: [{ rotate: '180deg'}]
    },
    listBorder: {
        borderBottomWidth: 1,
        borderBottomColor: colors.blackOpacity10,
        paddingVertical: hp(1)
    }
});
export default styles;
