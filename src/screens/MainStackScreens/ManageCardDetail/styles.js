import {StyleSheet} from 'react-native';
import {Fonts, hp, wp } from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    cardHeight: {
        height:hp(24),
        paddingVertical:10,
        //width: wp(80)
    },
    selectYourCard: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'500',
        fontSize: wp(4),
        color: colors.BLACK
    },
    lockAndUnlockCard: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'600',
        fontSize: wp(4),
        color: colors.GREY_5,
    },
    unlock: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'600',
        fontSize: wp(4),
        color: colors.GREY_5,
    },
    unlock: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'500',
        fontSize: wp(4.2),
        color: colors.GREY_4,
        marginLeft: 10
    },
    whenYourCardisLockedYouWillNotBeAbleTo: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontWeight:'500',
        fontSize: wp(3.5),
        color: colors.BLACK,
    },
    monthlyServiceFee: {
        fontFamily: Fonts.JOST,
        fontWeight:'300',
        fontSize: wp(3),
        color: colors.GREY_3
    },
    controlYourCardUsageToKeepYourAccountSecure: {
        fontFamily: Fonts.POPPINS,
        fontWeight:'400',
        fontSize: wp(3),
        color: colors.GREY_4,
        maxWidth: wp(70)
    },
    headerSet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2)
    },
    lockAndUnlockView: {
        marginTop :hp(3),
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
        borderRadius: 5
    },
    rightArrow: {
        height:hp(3),
        width: wp(2),
        transform: [{ rotate: '180deg'}]
    },
    lock: {
        height:hp(5),
        width: wp(5),
    },
    toggleEnable: {
        height:hp(5),
        width: wp(10),
    },
    unlockView: {
        marginTop :hp(3),
        borderTopColor: colors.blackOpacity10,
        borderTopWidth: 1,
        borderBottomColor: colors.blackOpacity10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    marginTop2: {
        marginTop: hp(2)
    }
});
export default styles;
