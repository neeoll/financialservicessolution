import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  platenumberView: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: wp(6),
    paddingVertical: hp(0.1),
    borderRadius: 2
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: wp(2),
    height: wp(2),
    backgroundColor: colors.GREY_21,
    borderRadius: wp(5),
  },
  dots: {
    flexDirection: 'row',
  },
  dash: {
    width: wp(2),
    height: 1,
    backgroundColor: colors.blackOpacity20,
    borderRadius: 5,
  },
  titleTab: {
    fontWeight: '600',
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
    paddingVertical:hp(1.5)
},
  
});
