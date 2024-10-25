import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AddressListModal,
  PaymentModal,
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  SuccessModal,
} from '../../components';
import TextGradient from '../../components/GradientText';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../constants';
import colors from '../../constants/colors';
import RNButton from '../../components/RNButton';
import {navigationReset} from '../../navigations';
export default function PaymentPackage({navigation}) {
  const [addressModal, setAddressModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [buySuccessModal, setBuySuccessModal] = useState(false);

  return (
    <RNContainer useScroll>
      <RNHeader title={'Silver Package'}></RNHeader>
      <View>
        {/* Order summary */}
        <RNText
          style={{
            fontFamily: Fonts.JOST,
            fontWeight: 'bold',
            marginTop: hp(2),
            fontSize: wp(5),
          }}>
          Order Summary
        </RNText>
        <View
          style={{
            borderWidth: 2,
            padding: wp(3),
            borderRadius: 10,
            borderColor: colors.GREY_8,
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextGradient
              style={{
                fontSize: wp(5),
                fontWeight: 'bold',
                fontFamily: Fonts.JOST,
              }}
              text={'Silver Package'}></TextGradient>
            <RNText
              style={{
                fontFamily: Fonts.JOST,
                fontWeight: '600',
                color: colors.GREY_9,
              }}>
              Monthly Service Fee
            </RNText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(1),
              alignItems: 'center',
            }}>
            <View>
              <RNText
                style={{
                  fontFamily: Fonts.JOST,
                  fontWeight: 'bold',
                  fontSize: wp(5),
                }}>
                $185.00
              </RNText>
              <RNText style={{fontFamily: Fonts.JOST, color: colors.GREY_6}}>
                +sales tax
              </RNText>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: colors.GREY_8,
                width: wp(30),
                borderRadius: 25,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: wp(3),
                height: hp(5),
              }}>
              <TouchableOpacity>
                <TextGradient
                  style={{fontWeight: 'bold', fontSize: wp(8)}}
                  text={'-'}></TextGradient>
              </TouchableOpacity>
              <TextGradient
                style={{fontWeight: 'bold', fontSize: wp(5)}}
                text={'1'}></TextGradient>
              <TouchableOpacity>
                <TextGradient
                  style={{fontWeight: 'bold', fontSize: wp(6)}}
                  text={'+'}></TextGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Delivery Address */}
        <RNText
          style={{
            fontFamily: Fonts.JOST,
            fontWeight: '500',
            marginTop: hp(2),
            fontSize: wp(5),
            fontWeight: 'bold',
          }}>
          Delivery Address
        </RNText>
        <TouchableOpacity
          onPress={() => setAddressModal(true)}
          activeOpacity={0.5}
          style={{
            borderWidth: 2,
            padding: wp(3),
            borderRadius: 10,
            borderColor: colors.GREY_8,
            marginTop: hp(1),
            flexDirection: 'row',
          }}>
          <RNImage
            resizeMode={'contain'}
            source={Images.bowArrow}
            style={{width: wp(12), height: wp(12)}}></RNImage>
          <View style={{marginLeft: wp(2), flex: 1}}>
            <TextGradient
              style={{fontWeight: '400', fontSize: wp(4.5)}}
              text={'Delivery to'}></TextGradient>
            <View style={{flexDirection: 'row'}}>
              <RNText style={{fontFamily: Fonts.JOST, fontSize: wp(3)}}>
                4517 Washington Ave. Manchester, Kentucky 39495
              </RNText>
              <RNImage
                resizeMode={'contain'}
                source={Images.bottomArrow}
                style={{width: wp(5), height: wp(5)}}></RNImage>
            </View>
          </View>
        </TouchableOpacity>
        {/* Apply coupon */}
        <RNText
          style={{
            fontFamily: Fonts.JOST,
            fontWeight: 'bold',
            marginTop: hp(2),
            fontSize: wp(5),
          }}>
          Apply Coupon
        </RNText>
        <View
          style={{
            borderWidth: 2,
            padding: wp(2),
            borderRadius: 50,
            borderColor: colors.GREY_8,
            marginTop: hp(1),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RNImage
              source={Images.coupon}
              style={{width: wp(6), height: wp(6)}}></RNImage>
            <TextGradient
              style={{fontWeight: 'bold', fontSize: wp(4.5), marginLeft: wp(1)}}
              text={'SDRT1254TFDF'}></TextGradient>
          </View>

          <RNButton
            round
            textStyle={{fontSize: wp(4)}}
            style={{width: wp(25), height: hp(4.5)}}
            title={Strings.apply}></RNButton>
        </View>
        {/* Horizontal line */}
        <View
          style={{
            height: 1,
            backgroundColor: colors.GREY_10,
            marginVertical: hp(2),
            width: '95%',
            alignSelf: 'center',
          }}></View>
        {/* Payment details */}
        <View style={{paddingHorizontal: wp(5)}}>
          <RNText
            style={{
              fontFamily: Fonts.POPPINS_SEMI_BOLD,
              fontSize: wp(5),
            }}>
            Payment Details
          </RNText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <RNText
              style={{
                fontFamily: Fonts.JOST,
                fontSize: wp(4.5),
                opacity: 0.4,
              }}>
              Subtotal
            </RNText>
            <RNText
              style={{
                fontFamily: Fonts.JOST,
                fontSize: wp(4.5),
                fontWeight: '500',
                opacity: 0.7,
                color: colors.GREY_5,
              }}>
              $127.30
            </RNText>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: colors.GREY_10,
              marginVertical: hp(1),
              width: '100%',
              alignSelf: 'center',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <RNText
              style={{
                fontFamily: Fonts.JOST,
                fontSize: wp(4.5),
                fontWeight: 'bold',
              }}>
              Total(2 items)
            </RNText>
            <RNText
              style={{
                fontFamily: Fonts.JOST,
                fontSize: wp(4.5),
                fontWeight: '500',
                color: colors.BLACK_2,
              }}>
              $33.60
            </RNText>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: colors.GREY_10,
              marginVertical: hp(1),
              width: '100%',
              alignSelf: 'center',
            }}></View>
          <RNButton
            onPress={() => {
              setIsPaymentModal(true);
            }}
            round
            textStyle={{fontSize: wp(4), fontWeight: '600'}}
            title={Strings.payment}
            style={{marginTop: hp(5)}}></RNButton>
        </View>
      </View>
      <AddressListModal
        isVisible={addressModal}
        setIsVisible={setAddressModal}></AddressListModal>
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
       header={' Silver '}
       subHeader={'You successfully place a Package, your package is confirmed and \n delivered within 2 Days. Wish you enjoy the Service'}
        onPressHome={() => {
          setBuySuccessModal(false);
          setTimeout(() => {
            navigationReset(navigation, Screens.TabRoutes);
          }, 1000);
        }}
        isVisible={buySuccessModal}
        setIsVisible={setBuySuccessModal}></SuccessModal>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
