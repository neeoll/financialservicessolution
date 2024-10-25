import {StyleSheet} from 'react-native';
import { Fonts, hp, wp } from '../../../constants';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../constants/colors';
import { screenWidth } from '../../../constants/ResponsiveScreens';

const styles = StyleSheet.create({
      history: {
        fontSize:wp(4),
        fontFamily: Fonts.POPPINS_BOLD,
        marginTop:hp(2),
        fontWeight: '600'
      },
      paddingVertical10: {
        paddingVertical: 7,
        paddingVertical: hp(1)
      },
      Sorting: {
        height: wp(4),
        width: wp(4)
      },
      allText: {
        fontSize:wp(3.5),
        fontFamily: Fonts.POPPINS_BOLD,
        fontWeight: '600',
        color: '#B8B8B8'
      },
      deductionText: {
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: wp(3.8),
        color: colors.BLACK,
        fontWeight: '600'
      },
      savedText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: wp(3.5),
        color: '#8E8E93',
        fontWeight: '400',
      },
});
export default styles;
