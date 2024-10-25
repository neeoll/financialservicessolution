import {StyleSheet} from 'react-native';
import {Fonts, hp, wp } from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    currentPackage: {
        fontSize: wp(3.5)
      },
      package: {
        fontSize:wp(4),
        fontFamily:Fonts.JOST,
        fontWeight: '500',
        color: '#F2F2F2'

      },
      claimSelectedText: {
        fontSize:wp(3.5),
        fontFamily:Fonts.JOST,
        fontWeight: '500',

      },
      buyCardContainer: {
        marginTop:hp(3.5),
        backgroundColor: colors.yellowBg,
        paddingHorizontal: wp(3),
        paddingVertical: wp(2.5),
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
      },
      packageName: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '600',
        fontSize: wp(6),
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
        width: wp(4),
        height: wp(4),
      },
      packageDescription: {
        fontFamily: Fonts.JOST,
        color: colors.darkGray,
        fontSize: wp(3.5),
        marginLeft: hp(1),
        fontWeight: '500',
      },
      claimFind: {
        fontFamily: Fonts.JOST,
        color: colors.darkGray,
        fontSize: wp(3),
        fontWeight: '400',
      },
      packageFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:wp(6)
      },
      date1: {
        fontFamily: Fonts.JOST,
        fontWeight: '700',
        fontSize: wp(4.2),
        marginTop: 10,
      },
      serviceFeeText: {
        fontFamily: Fonts.JOST,
        color: colors.GREY_5,
        fontSize: wp(4),
      },
      buyButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      buyNowText: {
        fontSize: wp(2.5),
        color: colors.GREY_5,
      },
      buyNowButton: {
        width: wp(18),
        height: hp(3.5),
      },
      buyCardHeader: {
        flexDirection: 'row',
        alignItems:'center',
      },
      listBtn: {
        borderRadius:15,
        backgroundColor: colors.greenColor,
        paddingHorizontal: wp(4)
      },
      claimBtn: {
        backgroundColor: '#F9F0C7',
        paddingHorizontal: wp(4),
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderColor: colors.yellowBorder,
      },
      mainView: {
        marginTop: hp(2),
        borderWidth: 1,
        borderColor: colors.yellowBorder,
        padding: wp(4),
        borderRadius: 10
      },
      rnTransParentBtn: {
        position:'absolute',zIndex:9999,
      }
});
export default styles;
