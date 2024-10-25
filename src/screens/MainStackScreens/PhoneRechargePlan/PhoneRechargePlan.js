import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import {Fonts, hp, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import RNImageBgContainer from '../../../components/RNImageBgContainer';
import EnterMoney from '../../../components/EnterMoney';
import SuccesPaymentModal from '../../../components/SuccesPaymentModal';
export default function PhoneRechargePlan({navigation}) {
  const [toggleEnterMoneyView, settoggleEnterMoneyView] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          settoggleEnterMoneyView(true);
        }}>
        <View>
          <View
            style={[
              styles.itemOuterView,
              {borderLeftColor: index == 0 ? colors.yellowBorder : '#F1EAEA'},
            ]}>
            <View style={commonStyles.flexDirectionRowAlignCenter}>
              <View>
                <RNText numberOfLines={1} style={styles.amount}>
                  {'$25.81'}
                </RNText>
                <View style={commonStyles.spacer1} />
                <RNText numberOfLines={1} style={commonStyles.textStyle12}>
                  {'Data : 1GB'}
                </RNText>
              </View>
              <View style={styles.border} />
              <View style={commonStyles.flexRow}>
                <View>
                  <RNText numberOfLines={1} style={commonStyles.textStyle3}>
                    {'Data :'}
                  </RNText>
                  <RNText numberOfLines={1} style={commonStyles.textStyle4}>
                    {'1.0GB per'}
                  </RNText>
                  <RNText numberOfLines={1} style={commonStyles.textStyle4}>
                    {'pack'}
                  </RNText>
                </View>
                <View style={commonStyles.marginLeftWp3}>
                  <RNText numberOfLines={1} style={commonStyles.textStyle3}>
                    {'Validity :'}
                  </RNText>
                  <RNText numberOfLines={1} style={commonStyles.textStyle4}>
                    {'30 Days'}
                  </RNText>
                </View>
              </View>
            </View>
            <View>
              <View style={commonStyles.spacer1} />
              <RNText numberOfLines={1} style={commonStyles.textStyle12}>
                {'Details : Benefit is over & above existing UL pack benefit'}
              </RNText>
            </View>
          </View>
          <View style={commonStyles.spacer} />
        </View>
      </TouchableOpacity>
    );
  };
  const nameView = (img, tilte, title1) => {
    return (
      <View style={styles.userInfo1}>
        <View style={styles.userInfoText}>
          <RNText numberOfLines={1} style={styles.userName}>
            {tilte}
          </RNText>
          <RNText numberOfLines={1} style={styles.userPhone1}>
            {title1}
          </RNText>
        </View>
      </View>
    );
  };
  return (
    <RNContainer backgroundColor={colors.GREY_11} useScroll edges={['top']}>
      <RNImageBgContainer>
        <RNHeader title={Strings.phoneRechage}></RNHeader>
        <View style={commonStyles.spacer2} />
        {!toggleEnterMoneyView ? (
          <View>
            <View style={styles.userInfo}>
              <RNImage
                style={styles.userImage}
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/46.jpg',
                }}
              />
              <View style={styles.userInfoText1}>
                <RNText numberOfLines={1} style={styles.userName}>
                  {'Brooklyn Simmons'}
                </RNText>
                <RNText numberOfLines={1} style={styles.userPhone}>
                  {'089412390984'}
                </RNText>
              </View>
            </View>
            <View style={commonStyles.spacer} />
            <TextGradient
              style={styles.textGradient}
              text={Strings.selectRechargePlan}></TextGradient>
            <View style={commonStyles.spacer} />
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              keyExtractor={(item, index) => index}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ) : (
          <EnterMoney
            navigation={navigation}
            title={'Brooklyn Simmons'}
            subtitle={'089412390984'}
            image={'https://randomuser.me/api/portraits/men/46.jpg'}
            subtitle1={'Data: 1GB / Per Day'}
            buttonText="Pay"
            onPress={() => {
              setIsVisible(true);
            }}
          />
        )}
         {isVisible && (
          <SuccesPaymentModal
            //  amountTitle
            title={Strings.rechargeSuccess}
            subtitle={'You Recharge Your Phone Successfully '}
            hideViewReceipt
            amount={'$ 125.50'}
            whereAmountShow={'Bottom'}
            onPressHome={() => {
              setIsVisible(false);
              //navigationTo(navigation, Screen.Home);
            }}
            isVisible={isVisible}
            renderView={
              nameView(
              'https://randomuser.me/api/portraits/men/46.jpg',
              'Brooklyn Simmons',
              '+1 9988776655',
            )}
            ></SuccesPaymentModal>
        )}
      </RNImageBgContainer>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  spacer: {
    marginVertical: hp(1),
  },
  userInfo: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderRadius: 45,
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.GREY,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
  },
  userImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(10),
  },

  userInfoText: {
   alignItems:'center'
  },
  userInfoText1: {
    marginLeft: wp(1),
    flex: 1,
    marginLeft: wp(2),
  },
  userName: {
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  userPhone: {
    fontSize: wp(3.5),
    color: colors.GREY_6,
  },
  textGradient: {
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
    fontWeight: '600',
  },
  amount: {
    fontFamily: Fonts.JOST,
    fontWeight: '500',
  },
  border: {
    height: hp(6),
    width: 2,
    backgroundColor: colors.GREY_8,
    marginHorizontal: wp(10),
  },
  itemOuterView: {
    borderColor: '#F1EAEA',
    borderLeftWidth: 8,
    borderWidth: 2,
    borderRadius: 10,
    padding: wp(3),
    backgroundColor: colors.WHITE,
  },
  userInfo1: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(15),
  },
  userImage1: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
});
