import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  RNContainer,
  RNCountryInput,
  RNHeader,
  RNImage,
  RNText,
  RNTextInput,
} from '../../../components';
import {Images, Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import styles from './styles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import commonStyles from '../../../styles/commonStyles';

const ChangePassword = props => {
  const [inputState, setInputState] = useState([
    {
      key: 'oldpassword',
      label: 'Old Password',
      value: '',
      secure: true,
    },
    {
      key: 'password',
      label: 'Password',
      value: '',
      secure: true,
    },
    {
      key: 'confirmPassword',
      label: 'Confirm Password',
      value: '',
      secure: true,
    },
  ]);
  const renderInput = (itm, index) => {
    return (
      <RNTextInput
        secureTextEntry={itm.secure}
        containerStyle={styles.emailInputContainer}
        label={itm.label}
        placeholder={itm.label}
        style={commonStyles.RNTextInput}
        labelStyle={commonStyles.labelStyle}
      />
    );
  };
  const updateProfileData = () => {
    return (
      <View style={styles.createAccountContainer}>
        {/* Inputs */}
        {inputState.map((itm, index) => renderInput(itm, index))}
        {/* btn signup */}
        <RNButton
          onPress={() => {}}
          activeOpacity={0.5}
          title={Strings.save}
          style={styles.loginButton}
          round
        />
      </View>
    );
  };
  return (
    <RNImageBgContainer>
      <View style={styles.mainView}>
        <RNHeader title={Strings.changePassword} />
        <RNImage
          resizeMode={'contain'}
          source={Images.changePasswordLogo}
          style={styles.logo}
        />
        {updateProfileData()}
      </View>
    </RNImageBgContainer>
  );
};

export default ChangePassword;
