import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { Fonts, hp, wp } from '../../../constants';


const styles = StyleSheet.create({
  
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
    marginTop: hp(2)
  },
});
export default styles;
