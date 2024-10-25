import { StyleSheet } from 'react-native';
import { Fonts, hp, wp } from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: wp(5),
        paddingVertical: wp(2.5),
        borderColor: colors.GREY_8,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: hp(3)
    },
    expireBtn: {
        backgroundColor : colors.lightRed,
        borderRadius: 20,
    },
    expireBtnText: {
        fontSize: wp(3.5),
        color: colors.redColor
    },
    upgradePlanText: {
        fontSize: wp(3.5),
        color: colors.WHITE
    },
    packageName: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '600',
        fontSize: wp(4),
      },
      packageFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(2),
      },
      saleTax: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '600',
        fontSize: wp(4),
      },
      serviceFeeText: {
        fontFamily: Fonts.JOST,
        color: colors.GREY_5,
        fontSize: wp(3.5),
      },
      date: {
        fontSize: wp(3)
      },
      upgradePlan: {
        backgroundColor : colors.greenColor,
        borderRadius: 20,
        marginTop:hp(2)
    },
    buyCardContainer: {
        backgroundColor: colors.yellowBg,
        marginTop: hp(2),
        paddingHorizontal: wp(5),
        paddingVertical: wp(6),
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10.32,
        elevation: 16,
        opacity: 0.5
      },
      buyCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      arrowContainer: {
        width: wp(8),
        height: wp(8),
        backgroundColor: colors.LN_FIRST,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(8),
      },
      arrowImage: {
        width: wp(3),
        height: wp(3),
      },
      packageDescription: {
        fontFamily: Fonts.JOST,
        color: colors.GREY_5,
        fontSize: wp(4),
        marginTop: hp(1),
      },
});
export default styles;
