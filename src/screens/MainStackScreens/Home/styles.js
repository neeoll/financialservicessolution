import {StyleSheet} from 'react-native';
import { Fonts, hp, wp } from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import { screenWidth } from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
      addBottomPading: {
        paddingBottom:70
      },
      welcomeText: {
        fontSize: commonStyles.fontSizeWp3,
      },
      userName: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
      },
      profileView: {
        flexDirection:'row'
      },
      notificationBell: {
        width: wp(12),
        height: wp(12),
      },
      sliderView: {
        height:wp(50),
        marginTop: hp(2),
      },
      serviceImage: {
        width: wp(21),
        height: wp(20.5),
        marginLeft:-10
      },
      serviceText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(3.3),
        fontWeight: '500',
        color: '#262626'
      },
      savedText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(3.5),
        color: colors.darkGrey,
        fontWeight: '500',
      },
      deductionText: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: wp(3.5),
        color: colors.BLACK,
        fontWeight: '600'
      },
      priceText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(4),
        color: colors.BLACK,
        fontWeight: '600'        
      },
      spendContainer: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        marginTop: hp(4),
        height:89,
        width: 161,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
      },
      savedImg: {
        width: wp(4),
        height: wp(4),
      },
      savedView: {
        flexDirection:'row',
        //justifyContent:'center',alignItems:'center',
       // paddingHorizontal:wp(6)
      },
      bootomArrow: {
        width: wp(6),
        height: wp(6),
        transform: [{ rotate: '270deg'}]
      },
      searchIcon: {
        width: wp(9),
        height: wp(9),
      },
      dateText: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontSize: wp(4.2),
        color: colors.BLACK,
        fontWeight: '600'
      },
      paddingVertical10: {
        paddingVertical: 7
      },
      futureViewItem: {
        width: screenWidth/1.4,
        height: wp(55),
        borderRadius:20,
        padding: wp(6)
      },
      futureSavingText: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: wp(4),
        color: colors.BLACK
      },
      unloackHeaderText: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: wp(4),
        color: colors.BLACK,
        fontWeight:'500'
      },
      futureSubTitle: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(4),
        color: colors.BLACK,
        fontWeight:'400'
      },
      futureImg: {
        width: wp(25),
        height: wp(25),
        marginLeft: wp(10)
      },
      futureText: {
        fontSize:wp(4.2),
        fontFamily: Fonts.POPPINS_BOLD,
        marginTop:hp(2),
        color: colors.blackOpacity80
      },
      unlockMainView: {
        borderWidth:2,
        borderColor:colors.GREY,
        borderRadius:10,
        marginTop:hp(4),
        padding:16
      },
      unlockText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(3),
        color: colors.blackOpacity80,
        fontWeight:'500',
        marginLeft:5
      },
      unlockDebitCard: {
        borderRadius:10,
        marginTop:hp(1),
      },
      unlockDebitCardtextStyle: {
        color: colors.WHITE,
        fontSize: wp(3.5),
      },
      flexDirectionRowAlignCenter: {
        flexDirection:'row',
        alignItems: 'center',
        paddingTop:5
      },
      addpadding2: {
        paddingHorizontal:2
      }
     
});
export default styles;
