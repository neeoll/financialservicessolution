import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { hp, wp } from '../../../constants';


const styles = StyleSheet.create({
  mainView: {
  padding: wp(4),
  marginTop:hp(5)
  },
  signInText: {
    fontSize: wp(6),
    fontWeight: '600',
  },
  loginText: {
    color: colors.GREY_4,
    fontSize: wp(3.5),
    marginVertical: hp(1.5),
  },
  emailInputContainer: {
    marginTop: hp(1),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  signUpButton: {
    marginLeft: wp(2),
  },
  loginButton: {
    marginTop: hp(4),
  },
  createAccountContainer: {
    paddingHorizontal: wp(2),
  },
  logo: {
    height: wp(35),
    width: wp(35),
    alignSelf: 'center',
    marginTop: hp(3),
  },
});
export default styles;
