import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  PaymentModal,
  RNContainer,
  RNHeader,
  RNText,
  SuccessModal,
  TextGradient,
} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationReset} from '../../../navigations';

const insurance = [
  {
    name: 'WakeMed Health',
  },
  {
    name: 'Duke Health',
  },
  {
    name: 'UNC Health',
  },
  {
    name: 'ABC Health',
  },

]
const insurance1 = [
  {
    name: 'Tesla',
  },
  {
    name: 'Toyota',
  },
  {
    name: 'Ford',
  },
  {
    name: 'ABC Auto Mechanic',
  },

]
const insurance2 = [
  {
    name: 'Triangle Dental',
  },
  {
    name: 'RDU Dental',
  },
  {
    name: 'Raleigh Dental',
  },
  {
    name: 'Dental Express Dental',
  },
  {
    name: '24/7 Dental',
  },

]
const insurance3 = [
  {
    name: "Aunt Sally's Salon",
  },
  {
    name: 'Multi Billionaires Barbershop',
  },
  {
    name: 'Supreme Haircuts',
  },
  {
    name: 'Extra Level Hair Salon',
  },
  {
    name: 'Raleigh Upperclass Salon',
  },

]
const insurance4 = [
  {
    name: 'Hutchins Bird Law Associates',
  },
  {
    name: 'Johnnys Firm',
  },
  {
    name: "Round rock's Firm",
  },
  {
    name: 'RDU Law Assoiciates',
  },
  {
    name: 'Budget & Company',
  },

]
const insurance5 = [
  {
    name: 'Ultimate Mutual',
  },
  {
    name: 'North Carolina United',
  },
  {
    name: "RDU Life",
  },
  {
    name: 'Express Life Insurance ',
  },
  {
    name: 'Druckers Mutual Life',
  },

]
const insurance6 = [
  {
    name: 'Unlimited Express Flights',
  },
  {
    name: 'Avelo Airlines',
  },
  {
    name: "United Airlines",
  },
  {
    name: 'Luxury Ahbudabi Airlines',
  },
  {
    name: 'Infinity Spirit Airlines',
  },

]
const insurance7 = [
  {
    name: 'Unlimited Express Flights',
  },
  {
    name: 'Avelo Airlines',
  },
  {
    name: "United Airlines",
  },
  {
    name: 'Luxury Ahbudabi Airlines',
  },
  {
    name: 'Infinity Spirit Airlines',
  },

]
const insurance8 = [
  {
    name: '3DMovies',
  },
  {
    name: 'Cinemas Imax',
  },
  {
    name: "Nascar Racing Track",
  },
  {
    name: 'GRX golf club',
  },
  {
    name: 'Unlimited Arcades',
  },

]
const insurance9 = [
  {
    name: 'GoWireless',
  },
  {
    name: 'Express Mobile',
  },
  {
    name: "Flint Celluar Services",
  },
  {
    name: 'DGRX Mobile Unlimited',
  },
]
export default function HealthInsurancePlans({navigation, route}) {
   const { type } = route.params;
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [buySuccessModal, setBuySuccessModal] = useState(false);
  const getLogo = () =>{
    if(type == 'auto' || type == 'hair' || type == 'legal' ){
      return Images.autoInsurance
    } else if (type == 'dental') {
      return Images.dentalIsurance
    }
    else if (type == 'life') {
      return Images.insurancePolicy
    }
    else {
      return Images.healthInsurance
    }
  }
  const renderPlans = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsPaymentModal(true);
        }}>
        <View style={styles.padding}>
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
                        source={getLogo()}
                        style={styles.insuranceLogo}></Image>
                    </View>
                    <View style={commonStyles.marginLeftWp2}>
                      <RNText style={[styles.textwidth,{...commonStyles.textStyle12}]}>
                        {item?.name}
                      </RNText>
                      <RNText style={styles.carSupreme}>
                        {'Care Supreme'}
                      </RNText>
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
        </View>
      </TouchableOpacity>
    );
  };
  const getPlan = () =>{
    if(type == 'auto'){
      return insurance1
    } else if (type == 'dental') {
      return insurance2
    }
    else if (type == 'hair') {
      return insurance3
    }
    else if (type == 'legal') {
      return insurance4
    }
    else if (type == 'life') {
      return insurance5
    }
    else if(type == 'phone')
    {
      return insurance9
    }
    else if(type == 'airTravel')
    {
      return insurance6
    }
    else if(type == 'entertainment')
    {
      return insurance8
    }
    else {
      return insurance
    }
  }
  return (
    <RNContainer
      useScroll
      hideHorizontalPadding
      backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <RNHeader
          containerStyle={styles.header}
          title={Strings.selectPlan}></RNHeader>
        <View style={commonStyles.spacer2} />
        {type == 'health' && <View
          style={[styles.subheader, {...commonStyles.flexDirectionRowCenter}]}>
          <View>
            <RNText style={styles.selectMember}>{'Select Members'}</RNText>
            <RNText style={commonStyles.textStyle11}>{'Self'}</RNText>
          </View>
          <View>
            <TextGradient
              style={styles.self}
              text={Strings.edit}></TextGradient>
          </View>
        </View>}
        <View style={commonStyles.spacer1} />
        <View style={commonStyles.border} />
        <View style={commonStyles.spacer} />
        <FlatList
          data={getPlan()}
          renderItem={renderPlans}
          keyExtractor={(item, index) => index.toString()}
        />
        <PaymentModal
          isVisible={isPaymentModal}
          setIsVisible={setIsPaymentModal}
          onPress={() => {
            setIsPaymentModal(false);
            setTimeout(() => {
              setBuySuccessModal(true);
            }, 1000);
          }}></PaymentModal>
        <SuccessModal
          header={' Self Insurance '}
          subHeader={
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical'
          }
          onPressHome={() => {
            setBuySuccessModal(false);
            setTimeout(() => {
              navigationReset(navigation, Screens.TabRoutes);
            }, 1000);
          }}
          isVisible={buySuccessModal}
          setIsVisible={setBuySuccessModal}></SuccessModal>
      </ImageBackground>
    </RNContainer>
  );
}
