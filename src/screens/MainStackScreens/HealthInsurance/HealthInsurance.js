import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNCheckBox,
  RNContainer,
  RNHeader,
  RNText,
  RNTextInput,
} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import LinearGradient from 'react-native-linear-gradient';
import RNButton from '../../../components/RNButton';
import {navigationBack, navigationTo} from '../../../navigations';

const list = [
  {
    key: 'Your Age',
    label: 'Your Age',
    value: '',
    leftIcon: '',
  },
  {
    key: 'Your Adress Code',
    label: 'Your Adress Code',
    value: '',
    leftIcon: '',
    rightImg: Images.locationIcon,
  },
];
export default function HealthInsurance({navigation, route}) {
  const [inputState, setInputState] = useState(list);
  let routeParm = route?.params
  const renderItem = (title, img, check) => {
    return (
      <View style={[commonStyles.alignCenter, {}]}>
        {check ? (
          <LinearGradient
            colors={[colors.LN_FIRST, colors.LN_TWO]}
            style={styles.selectedMonth}>
            <Image source={img} style={styles.arrow}></Image>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={['transparent', 'transparent']}
            style={styles.selectedMonth}>
            <Image source={img} style={styles.arrow}></Image>
          </LinearGradient>
        )}
        <View style={commonStyles.marginTopHpZero5}>
          <RNText style={commonStyles.textStyle5}>{title}</RNText>
        </View>
      </View>
    );
  };

  const renderInput = (itm, index) => {
    return (
      <View>
        <View style={commonStyles.spacer1} />
        <RNTextInput
          containerStyle={styles.emailInputContainer}
          label={itm?.label}
          placeholder={itm?.label}
          labelStyle={styles.labelStyle}
          style={styles.textInput}
          leftIcon={itm?.leftIcon}
          rightTextBtn={itm?.rightTextBtn}
          rightImg={itm?.rightImg}
        />
      </View>
    );
  };
  const goToNavigation = () => {
    let index =  routeParm?.navigateTo;
    if(routeParm?.commmigFrom == 'insurance'){
    if (index == 0) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'auto'});
    } else if (index == 1) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'life'});
    } else if (index == 2) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'health'});
    } else if (index == 3) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'dental'});
     }    
    else {
    }
  }else {
    if (index == 0) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'airTravel'});
    } else if (index == 1) {
     // navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'food'});
    } else if (index == 2) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'entertainment'});
    }  else if (index == 4) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'hair'});
     } else if (index == 3) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'legal'});
     }  else if (index == 5) {
      navigationTo(navigation, Screens.HealthInsurancePlans,{type: 'phone'});
     }      
    else {
    }

  }
  };
  return (
    <RNContainer useScroll backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <RNHeader
          containerStyle={styles.header}
          title={routeParm.commingFrom == 'signUp' ? Strings.selectFinancier : Strings.insurance}></RNHeader>
        <View style={commonStyles.spacer2} />
        <RNText style={commonStyles.textStyle11}>
          {Strings.selectTheMembersYouWantToInsure}
        </RNText>
        <View style={commonStyles.spacer} />
        <View style={commonStyles.flexDirectionRowCenter}>
          {renderItem('My Self', Images.self, true)}
          {renderItem('Spouse', Images.spouse, false)}
          {renderItem('Son/Daughter', Images.children, false)}
          {renderItem('Parents', Images.parents, false)}
        </View>
        {inputState.map((itm, index) => renderInput(itm, index))}
        <View style={commonStyles.spacer} />
        <View style={commonStyles.flexRow}>
          <View>
            <RNCheckBox size={20} innerIconStyle={styles.checkBox}></RNCheckBox>
          </View>
          <RNText style={styles.textStyle2}>
            {Strings.memberhavePreExistingEddress}
          </RNText>
        </View>
        <View style={commonStyles.spacer2} />
        <RNButton
          onPress={() => {
            if(routeParm.commingFrom == 'signUp'){
              navigationBack(navigation);
            }else{
              goToNavigation()
            }
           
          }}
          activeOpacity={0.5}
          title={Strings.done}
          textStyle={styles.textStyle}
          round></RNButton>
      </ImageBackground>
    </RNContainer>
  );
}
