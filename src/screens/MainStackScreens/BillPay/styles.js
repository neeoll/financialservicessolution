import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  allTransactionsText: {
    fontSize: wp(5),
    fontWeight: '500',
  },
  transactionsContainer: {
    paddingHorizontal: wp(0),
  },
  transactionsList: {
    paddingBottom: hp(2),
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(5),
    borderRadius: 15,
    marginTop: hp(1.5),
  },
  transactionIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  serviceIcon: {
    width: wp(14),
    height: wp(14),
    resizeMode: 'contain',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: wp(2),
  },
  transactionTitle: {
    fontWeight: '500',
  },
  serviceName: {
    fontWeight: '500',
    fontSize: wp(3.8),
    fontFamily: Fonts.JOST,
    marginTop:wp(1.5)
  },
  serviceText: {
    fontWeight: '500',
    fontSize: wp(4.5),
    fontFamily: Fonts.JOST,
    marginLeft:wp(5),
    marginVertical:hp(0.5),
    color: colors.GREY_5
  },
  transactionDate: {
    color: colors.BLACK_6,
    opacity: 0.8,
    marginTop: hp(1),
  },
  transactionPrice: {
    fontWeight: '500',
    fontSize: wp(4.5),
  },
  serviceView: {justifyContent:'center',alignItems:'center',flex:1,paddingVertical:10},
  serviceListOuterView: {
   backgroundColor: colors.WHITE,
   borderColor: colors.blackOpacity10,
   borderWidth: 1,
   padding:wp(2),
   borderRadius: 10,
  },
  imageBackground: {
    flex: 1,
  },
});
