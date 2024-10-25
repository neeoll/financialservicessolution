//import liraries
import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {RNContainer, RNHeader} from '../../../components';
import RNProfileHeader from '../../../components/RNProfileHeader';
import RNCardView from '../../../components/RNCardView';
import styles from './styles';
import {Images, Screens, Strings, hp} from '../../../constants';
import ChangeCurrenyModal from '../../../components/ChangeCurrenyModal';
import {FloatingAction} from 'react-native-floating-action';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import { navigationTo } from '../../../navigations';
const cardList = [
  {
    cardTitle: 'Current Balance',
    balance: '00000',
    percent: '14%',
    cardType: 'balance',
    expiry: '',
    cardCategoty: '',
    userName: '',
    cardName: '',
    cardNumber: '',
    cardTypeLogo: Images.masterCardLogo,
    cardTypeText: '',
  },
  {
    cardTitle: 'Financial Services Solution',
    balance: '00000',
    percent: '14%',
    cardType: 'yellow',
    expiry: '12/25',
    cardCategoty: 'Platinum Plus',
    userName: 'tyest',
    cardName: 'Visa',
    cardNumber: '**** **** **** 8888',
    cardTypeLogo: Images.masterCardLogo1,
    cardTypeText: 'MasterCard',
  },
  {
    cardTitle: 'Financial Services Solution',
    balance: '00000',
    percent: '14%',
    cardType: 'black',
    expiry: '12/25',
    cardCategoty: 'Platinum Plus',
    userName: 'tyest',
    cardName: 'Visa',
    cardNumber: '**** **** **** 8888',
    cardTypeLogo: Images.masterCardLogo1,
    cardTypeText: 'MasterCard',
  },
];
const actions = [
  {
    icon: Images.bankImg,
    position: 2,
    color: 'transparent',
    tintColor: null,
    name: 'Bank'
  },
  {
    icon: Images.cardWithBorder,
    position: 1,
    color: 'transparent',
    tintColor: null,
    name: 'Card'
  },
];
const Card = props => {
  const headerType = props?.route?.params?.headerType;
  const [currenyChangeModal, setCurrenyChangeModal] = useState(false);
  const cardView = () => {
    return (
      <View>
        <FlatList
          data={cardList}
          renderItem={({item, index}) => {
            return (
              <RNCardView
                index={index}
                cardata={item}
                style={styles.cardHeight}
                onPressPlus={() => {
                  setCurrenyChangeModal(true);
                }}
                paddingVerticalAdd={5}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{marginTop: hp(10)}}>
          <FloatingAction
            color={colors.yellowTheme}
            actions={actions}
            onPressItem={name => {
              if(name == 'Card'){
                navigationTo(props.navigation,Screens.AddNewCard)
              }else{
                navigationTo(props.navigation,Screens.AddBankAccount)
              }
              console.log(`selected button: ${name}`);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      {headerType == 'back' ? (
        <RNHeader title={Strings.paymentMethod} />
      ) : (
        <RNProfileHeader navigation={props.navigation} />
      )}
      <View style={commonStyles.marginTopHp1} />
      {cardView()}

      {currenyChangeModal && (
        <ChangeCurrenyModal
          open={currenyChangeModal}
          header={Strings.changeCurrency}
          OnCancel={() => {
            setCurrenyChangeModal(false);
          }}
        />
      )}
    </RNContainer>
  );
};

export default Card;
