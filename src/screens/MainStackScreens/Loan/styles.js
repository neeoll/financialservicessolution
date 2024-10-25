import {StyleSheet} from 'react-native';
import {Fonts, hp, wp } from '../../../constants';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    currentPackage: {
        fontSize: wp(3.5),
        fontFamily:Fonts.JOST,
        fontWeight: '400',
        color: colors.GREY_5
      },
      package: {
        fontSize:wp(4.2),
        fontFamily:Fonts.JOST,
        fontWeight: '700',

      },
      buyCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.yellowBg,
        marginTop: hp(2),
        paddingHorizontal: wp(5),
        paddingVertical: wp(2.5),
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
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
        width: wp(60),
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
      },
      date: {
        fontFamily: Fonts.JOST,
        fontWeight: '400',
        fontSize: wp(3),
        marginLeft:wp(6)
      },
      date1: {
        fontFamily: Fonts.JOST,
        fontWeight: '700',
        fontSize: wp(4.1),
        marginTop: 10
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
        fontSize: wp(3.2),
        color: colors.GREY_5,
        fontFamily: Fonts.JOST,
        fontWeight: '500',
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
        borderWidth:1,
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:15,
        width:wp(15.5),
        justifyContent:'center',alignItems: 'center'
      },
      backdropContainer: {
        justifyContent: 'flex-end',
      },
      backdrop: {
        flex: 1,
        backgroundColor: 'black',
      },
      modal: {
        margin: 0,
        justifyContent: 'flex-end',
      },
      modalContent: {
        padding: 10,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingBottom: hp(5),
        alignItems: 'center'
      },
      topBorder: {
        backgroundColor: '#D9D9D9',
        height: 3,
        width: wp(30)
      },
      claimIcon: {
        height:wp(10),
        width:wp(10)
      },
      areYouSureYouWanttoClaimThisRequest: {
        fontSize: wp(4),
        fontFamily:Fonts.JOST,
        fontWeight: '500',
        color: colors.GREY_5
      },
      cancelText: {
        fontSize: wp(4),
        fontFamily:Fonts.JOST,
        fontWeight: '500',
        color: colors.redColor,
      },
      cancelbtn: {
        borderColor: colors.redColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: wp(10),
        height: hp(5)
      },
      yesDoItbtn: {
        backgroundColor: colors.greenColor,
        borderRadius: 5,
        paddingHorizontal: wp(10),
        marginLeft:10,
        height: hp(5)
      },
      yesDoItbtnText: {
        fontSize: wp(4),
        fontFamily:Fonts.JOST,
        fontWeight: '500',
        color: colors.WHITE
      },
});
export default styles;
