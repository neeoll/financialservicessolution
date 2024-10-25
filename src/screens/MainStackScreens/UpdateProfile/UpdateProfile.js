import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  RNContainer,
  RNCountryInput,
  RNHeader,
  RNText,
  RNTextInput,
} from '../../../components';
import {Strings} from '../../../constants';
import RNButton from '../../../components/RNButton';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';

const UpdateProfile = props => {
  const [inputState, setInputState] = useState([
    {
      key: 'firstName',
      label: 'Full Name',
      value: '',
    },
    {
      key: 'email',
      label: 'Email',
      value: '',
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      value: '',
      countryCode: 'IN',
      countryNumber: '91',
    },
  ]);
  const renderInput = (itm, index) => {
    if (itm.key === 'phoneNumber') {
      return (
        <RNCountryInput
          selectedCountry={itm.countryCode}
          countryNumber={itm.countryNumber}
          onSelectCountry={data => {
            console.log(data);
            setInputState(
              inputState.map(itmx =>
                itmx.key === 'phoneNumber'
                  ? {
                      ...itmx,
                      countryCode: data.cca2,
                      countryNumber: data.callingCode[0],
                    }
                  : itmx,
              ),
            );
          }}
          label={itm.label}
          placeholder={itm.label}
          labelStyle={commonStyles.labelStyle}
          style={commonStyles.RNTextInput}
        />
      );
    }
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
    <RNContainer useScroll edges={['top']}>
      <RNHeader title={Strings.profile} />
      {updateProfileData()}
    </RNContainer>
  );
};

export default UpdateProfile;
