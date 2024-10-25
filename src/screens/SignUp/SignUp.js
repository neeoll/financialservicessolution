import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  RNCheckBox,
  RNContainer,
  RNCountryInput,
  RNImage,
  RNText,
  RNTextInput,
} from '../../components';
import {Images, Screens, Strings, wp} from '../../constants';
import colors from '../../constants/colors';
import RNButton from '../../components/RNButton';
import {navigationTo} from '../../navigations';
import ProgressBar from './ProgressBar';
import TextGradient from '../../components/GradientText';
import styles from './style';
import {Image} from 'react-native-svg';
import commonStyles from '../../styles/commonStyles';
import { authAPI } from '../../api';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function SignUp({navigation}) {
  const [currentTab, setCurrentTab] = useState(0);
  const [inputState, setInputState] = useState([
    {
      key: 'firstName',
      label: 'First Name',
      value: '',
    },
    {
      key: 'lastName',
      label: 'Last Name',
      value: '',
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
      value: '',
      countryCode: 'US',
      countryNumber: '1',
    },
    {
      key: 'email',
      label: 'Email',
      value: '',
    },
    {
      key: 'password',
      label: 'Password',
      value: '',
      secure: true,
    },
    {
      key: 'reEnterPassword',
      label: 'Re-Enter Password',
      value: '',
      secure: true,
    },
    {
      key: 'referralId',
      label: 'Referral ID',
      value: '',
    },
  ]);

  const packageData = [
    {name: 'Silver Package', percent: 30, price: 1250, saleTax: 185},
    {name: 'Gold Package', percent: 40, price: 1500, saleTax: 285},
    {name: 'Diamond Package', percent: 50, price: 350, saleTax: 385},
    {name: 'Platinum Package', percent: 60, price: 2000, saleTax: 485},
  ];

  const financer = [
    {
      name: 'Allied Financial Services',
    },
    {
      name: 'Atlantic Discount Corporation',
    },
    {
      name: 'Baraka Financial Services',
    },
    {
      name: 'Basic Finance, Inc',
    },
    {
      name: 'Brighter Financial, Inc',
    },
    {
      name: 'Cape Fear Finance Company',
    },
    {
      name: 'Cape Fear Lending, Inc',
    },
    {
      name: 'Capital Credit Company',
    },
    {
      name: 'Carolina Finance LLC',
    },
  ];

  const renderInput = (itm, index) => {
    if (itm.key === 'phoneNumber') {
      return (
        <RNCountryInput
          selectedCountry={itm.countryCode}
          countryNumber={itm.countryNumber}
          onInput={data => {
            setInputState(
              inputState.map(itmx =>
                itmx.key === itm.key
                ? {
                    ...itmx,
                    value: data
                  }
                : itmx,
              ),
            );
          }}
          onSelectCountry={data => {
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
        />
      );
    }
    return (
      <RNTextInput
        secureTextEntry={itm.secure}
        containerStyle={styles.emailInputContainer}
        label={itm.label}
        placeholder={itm.label}
        onInput={data => {
          setInputState(
            inputState.map(itmx =>
              itmx.key === itm.key
              ? {
                  ...itmx,
                  value: data
                }
              : itmx,
            ),
          );
        }}
      />
    );
  };

  const createAccount = () => {
    return (
      <View key={'#createAccount'} style={styles.createAccountContainer}>
        <RNText style={styles.loginText}>{Strings.loginTxt}</RNText>
        {/* Inputs */}
        {inputState.map((itm, index) => renderInput(itm, index))}
        {/* terms privacy */}
        <View style={styles.rememberForgotContainer}>
          <View style={styles.rememberContainer}>
            <View>
              <RNCheckBox />
            </View>

            <RNText style={styles.rememberText}>
              I have read and agree to
              <RNText> the terms of conditions </RNText> &
              <RNText> Privacy Policy</RNText>.
            </RNText>
          </View>
        </View>
        {/* btn signup */}
        <RNButton
          onPress={() => {
            authAPI.register(inputState)
            .then(response => {
              if (response.ok) return response.json()
              throw new Error('Something went wrong')
            })
            .then(json => {
              console.log(json)
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
              setCurrentTab(currentTab === 2 ? 0 : currentTab + 1);
            })
            .catch(error => {
              console.error(error)
            })
          }}
          activeOpacity={0.5}
          title={Strings.signUp}
          style={styles.loginButton}
          round
        />
        {/* already have */}
        <View style={styles.signUpContainer}>
          <RNText style={styles.dontHaveAccText}>
            {Strings.alreadyHaveAcc}
          </RNText>
          <TouchableOpacity
            onPress={() => {
              navigationTo(navigation, Screens.Login);
            }}
            style={styles.signUpButton}>
            <RNText style={styles.signUpText}>{Strings.login}</RNText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const drivingDocuments = () => {
    return (
      <View key={'#drivingDocuments'} style={{width: '100%'}}>
        <RNText style={styles.drivingVerificationText}>
          {Strings.drivingVerification}
        </RNText>
        {/* Front license */}
        <View style={styles.documentContainer}>
          <RNText style={styles.documentLabel}>{Strings.drivingLicense}</RNText>
          <TouchableOpacity style={styles.uploadContainer}>
            <RNImage
              resizeMode={'contain'}
              source={Images.image}
              style={styles.uploadImage}
            />
            <View>
              <RNText style={styles.uploadText}>{Strings.uploadMsg1}</RNText>
              <RNText style={styles.uploadSubText}>{Strings.uploadMsg2}</RNText>
            </View>
          </TouchableOpacity>
        </View>
        {/* back license */}
        <View style={styles.documentContainer}>
          <RNText style={styles.documentLabel}>{Strings.drivingLicense}</RNText>
          <TouchableOpacity style={styles.uploadContainer}>
            <RNImage
              resizeMode={'contain'}
              source={Images.image}
              style={styles.uploadImage}
            />
            <View>
              <RNText style={styles.uploadText}>{Strings.uploadMsg3}</RNText>
              <RNText style={styles.uploadSubText}>{Strings.uploadMsg2}</RNText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fullWidth}>
          <RNButton
            textStyle={{color: colors.WHITE}}
            onPress={() => {
             // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
              
              setCurrentTab(currentTab === 2 ? 0 : currentTab + 1);
              navigationTo(navigation, Screens.HealthInsurance,{commingFrom: 'signUp'});
            }}
            activeOpacity={0.5}
            title={Strings.next}
            style={styles.loginButton}
            round
          />
        </View>
      </View>
    );
  };

  const BuyCard = (item, index) => {
    return (
      <View style={styles.buyCardContainer}>
        <View style={styles.buyCardHeader}>
          <TextGradient text={item.name} style={styles.packageName} />
          <View style={styles.arrowContainer}>
            <RNImage
              resizeMode={'contain'}
              source={Images.rightArrow}
              style={styles.arrowImage}
            />
          </View>
        </View>
        <RNText style={styles.packageDescription}>
          {`${item.percent}% Annual Home Renter & Mortgage payment fees waiver up to $${item.price}`}
        </RNText>
        <View style={styles.packageFooter}>
          <View>
            <TextGradient
              text={`$${item.saleTax}+sales tax`}
              style={styles.saleTax}
            />
            <RNText style={styles.serviceFeeText}>Monthly Service Fee</RNText>
          </View>
          <View style={styles.buyButtonContainer}>
            <RNButton
              onPress={() => {
                navigationTo(navigation, Screens.PackageDetails, {...item});
              }}
              textStyle={styles.buyNowText}
              style={styles.buyNowButton}
              round
              title={Strings.buyNow}
            />
          </View>
        </View>
      </View>
    );
  };

  const buyPackages = () => {
    return (
      <View key={'#buyPackages'} style={styles.buyPackagesContainer}>
        {packageData.map((item, index) => {
          return BuyCard(item, index);
        })}
      </View>
    );
  };

  const chooseFinancerView = item => {
    return (
      <TouchableOpacity onPress={() => {
         LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
         setCurrentTab(currentTab === 3 ? 0 : currentTab + 1);
      }}>
        <View>
          <View
            style={[
              styles.discountView,
              {...commonStyles.flexDirectionRowAlignCenter},
            ]}>
            <Image
              source={Images.greenDiscount}
              style={styles.greenDiscount}></Image>
            <RNText style={styles.discount}>
              {'5 % Online discount applied'}
            </RNText>
          </View>
          <View style={styles.outerpadding}>
            <View style={commonStyles.padding3}>
              <View style={commonStyles.flexDirectionRowCenter}>
                <View style={commonStyles.flexDirectionRowAlignCenter}>
                  <View>
                    <Image
                      source={Images.healthInsurance}
                      style={styles.insuranceLogo}></Image>
                  </View>
                  <View style={commonStyles.marginLeftWp2}>
                    <RNText
                      style={[styles.textwidth, {...commonStyles.textStyle12}]}>
                      {item?.name}
                    </RNText>
                    <RNText style={styles.carSupreme}>{'Care Supreme'}</RNText>
                    <TextGradient
                      style={styles.viewPolicy}
                      text={'View Policy Details'}></TextGradient>
                  </View>
                </View>
                <View>
                  <View style={styles.buyNowView}>
                    <TextGradient
                      style={styles.viewPolicy}
                      text={'Buy Now'}></TextGradient>
                    <TextGradient
                      style={styles.viewPolicy}
                      text={'$0'}></TextGradient>
                    <TextGradient
                      style={styles.viewPolicy}
                      text={'Monthly'}></TextGradient>
                  </View>
                </View>
              </View>
              <View style={commonStyles.spacer1} />
              <View style={[styles.listfooter, {...commonStyles.flexRow}]}>
                <View style={commonStyles.flexDirectionRowAlignCenter}>
                  <Image
                    source={Images.ticketStar}
                    style={styles.greenDiscount}></Image>
                  <RNText style={styles.carSupreme1}>
                    {'8400 + Cashless...'}
                  </RNText>
                </View>
                <View
                  style={[
                    styles.marginLeftWp2,
                    {...commonStyles.flexDirectionRowAlignCenter},
                  ]}>
                  <Image
                    source={Images.ticketStar}
                    style={styles.greenDiscount}></Image>
                  <RNText style={styles.carSupreme1}>
                    {'95.2% Claims Se.....'}
                  </RNText>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={commonStyles.spacer} />
      </TouchableOpacity>
      // <RNButton
      //   onPress={() => {
      //     LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      //     setCurrentTab(currentTab === 3 ? 0 : currentTab + 1);
      //   }}
      //   textStyle={styles.buyNowText}
      //   style={styles.buyNowButton}
      //   round
      //   title={Strings.buyNow}
      // />
    );
  };

  const chooseFinancer = () => {
    return (
      <View key={'#chooseFinancer'} style={styles.buyPackagesContainer}>
        {financer.map((item, index) => {
          return chooseFinancerView(item, index);
        })}
      </View>
    );
  };

  const renderTab = val => {
    switch (val) {
      case 0:
        return createAccount();
      case 1:
        return drivingDocuments();
      case 2:
        return chooseFinancer();
      case 3:
        return buyPackages();
      default:
        return null;
    }
  };

  return (
    <RNContainer hideHorizontalPadding useScroll edges={['top', 'bottom']}>
      <RNImage
        resizeMode={'contain'}
        source={Images.logo}
        style={styles.logo}
      />
      <View style={styles.progressBarContainer}>
        <ProgressBar
          containerStyle={styles.progressBar}
          currentTab={currentTab}
        />
        {renderTab(currentTab)}
      </View>
    </RNContainer>
  );
}
