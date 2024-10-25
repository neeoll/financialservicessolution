import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';
import { screenWidth } from 'react-native-gifted-charts/src/utils';

const styles = StyleSheet.create({
    addCardLogo: {
        height:hp(25),
        width: wp(50)
    },
    textboxTitle: {
        fontFamily: Fonts.POPPINS,
        fontWeight: '400',
        fontSize: wp(4),
        color: colors.GREY_20,
    },
    cardFieldContainer: {
        flexDirection: 'row',
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.5),
        marginHorizontal: wp(3),
        alignItems: 'center',
      },
      cardNumberContainer: {
        flex: 1,
        paddingLeft: wp(2),
      },
      cardNumberText: {
        fontFamily: Fonts.JOST,
      },
      checkIcon: {
        width: wp(5),
        height: wp(5),
      },
      expiryAndCvvContainer: {
        flexDirection: 'row',
      },
      expiryContainer: {
        flex: 1,
      },
      cvvContainer: {
        flex: 1,
      },
      inputField: {
        backgroundColor: colors.lightBlue,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(2),
        paddingVertical: hp(2),
        borderRadius: 15,
      },
      inputText: {
        padding: 0,
        flex: 1,
        fontSize: wp(4),
        paddingLeft: wp(2),
      },
      spacer: {
        width: wp(2),
      },
      cardHolderNameContainer: {
        borderColor: '#C3C7E5',
        borderWidth: 1,
        paddingLeft: wp(2),
        paddingVertical: hp(2),
        borderRadius: 12,
      },
      cardHolderNameContainer1: {
        borderColor: '#C3C7E5',
        borderWidth: 1,
        paddingLeft: wp(2),
        paddingVertical: hp(2),
        borderRadius: 12,
        flex:1,
        margin:5,
        marginTop:10
      },
      profileIcon: {
        width: wp(5),
        height: wp(5),
      },
      saveCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        marginTop: hp(2),
        alignItems: 'center',
      },
      saveCardText: {
        fontFamily: Fonts.JOST,
        color: colors.GREY_5,
      },
      paymentButton: {
        marginTop: hp(2),
      },
      dropdown: {
        height: hp(6.5),
        borderColor: colors.placeholderColor,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      dropdownIcon: {
        width: wp(4),
        height: wp(4),
      },
      lableDropdown: {
        fontSize: wp(4),
        fontWeight: '400',
        color: colors.GREY_3,
        fontFamily: Fonts.POPPINS_REGULAR,
        marginVertical: hp(1),
      },
      placeholderStyle: {
        fontSize: wp(3.8),
        color: colors.placeholderColor,
        fontWeight: '400',
      },
      textStylebtn: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontWeight: '500',
        fontSize: wp(4),
        color: colors.WHITE,
      },
      btnView: {
        flex: 1,justifyContent: 'flex-end'
      },
      addCardLogo: {
        height:hp(25),
        width: wp(50)
    },
});
export default styles;
