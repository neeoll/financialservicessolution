import {StyleSheet} from 'react-native';
import {Fonts, hp, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp(5),
  },
  allTransactionsText: {
    fontSize: wp(4.5),
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
    padding: wp(4),
    borderRadius: 15,
  },
  transactionIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionImage: {
    width: wp(12),
    height: wp(12),
    resizeMode: 'contain',
  },
  arrow: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    transform: [{ rotate: '180deg'}],
    opacity: 0.5,
    marginLeft: 5
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
    fontWeight: '400',
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
  },
  claimMessage: {
    fontWeight: '400',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
  },
  serviceName: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    marginTop:wp(1.5),
    color: colors.GREY_5,
    textAlign: 'center'
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
    color: colors.BLACK,
    fontWeight: '500',
    fontSize: wp(4.5),
    fontFamily: Fonts.JOST,
  },
  claimId: {
    color: '#BDBDBD',
    fontWeight: '500',
    fontSize: wp(3.8),
    fontFamily: Fonts.JOST,
  },
  title2: {
    color: colors.GREY_5,
    fontWeight: '400',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
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
   borderRadius: 10
  },
  imageBackground: {
    flex: 1,
  },
  btnText: {
   paddingHorizontal: 6
  },
  textStyle: {
    fontWeight: '400',
    fontSize: wp(3.5),
  }
});
