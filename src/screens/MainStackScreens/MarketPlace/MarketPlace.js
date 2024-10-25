import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  PanResponder,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  RNContainer,
  RNImage,
  RNSearchBar,
  RNText,
  TextGradient,
} from '../../../components';
import {
  Colors,
  Fonts,
  hp,
  Images,
  Screens,
  Strings,
  wp,
} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationBack, navigationTo} from '../../../navigations';
import colors from '../../../constants/colors';
import RNButton from '../../../components/RNButton';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../../styles/commonStyles';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import {string} from 'prop-types';
import BuyPropertyModal from '../../../components/BuyPropertyModal';
import ConfirmedModal from '../../../components/ConfirmedModal';
import FilterMarketPlace from '../../../components/FilterMarketPlace';

const proertyList = [
  {
    name: 'The Pavilion',
    address: '5441 Neast River Rd, Chicago, IL 60656',
    date: '18 March 2024',
    images: [],
    price: '$ 12,00 - 16,00,',
    bed: '3 beds',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
  {
    name: 'The Pavilion',
    address: '5441 Neast River Rd, Chicago, IL 60656',
    date: '18 March 2024',
    images: [],
    price: '$ 12,00 - 16,00,',
    bed: '3 beds',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
];

const proertyList1 = [
  {
    name: '2021 Volvo XC40 Recharge',
    address: 'Sport Utility 4D • 25,660 miles',
    date: '18 March 2024',
    images: Images.car2,
    price: '$30,990',
    bed: '2021',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
  {
    name: '2021 Volvo XC40 Recharge',
    address: 'Sport Utility 4D • 25,660 miles',
    date: '18 March 2024',
    images: [],
    price: '$30,990',
    images: Images.car3,
    bed: '2021',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
  {
    name: '2021 Volvo XC40 Recharge',
    address: 'Sport Utility 4D • 25,660 miles',
    date: '18 March 2024',
    images: Images.car2,
    price: '$30,990',
    bed: '2021',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
  {
    name: '2021 Volvo XC40 Recharge',
    address: 'Sport Utility 4D • 25,660 miles',
    date: '18 March 2024',
    images: Images.car2,
    price: '$30,990',
    bed: '2021',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.BuyNow,
    type: 'view',
  },
];
export default function MarketPlace({navigation}) {
  const {top, bottom} = useSafeAreaInsets();
  const [activeBtn, setActiveBtn] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const propertyType = (img, name) => {
    return (
      <View style={commonStyles.alignCenter}>
        <RNImage source={img} style={styles.propertyImg}></RNImage>
        <RNText style={styles.houses}>{name}</RNText>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>{ 
        navigation.push(Screens.PropertyDetail);}}>
      <View style={styles.itemMainView}>
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={styles.name}>{item?.name}</RNText>
            <RNText style={styles.address}>{item?.address}</RNText>
          </View>
          <View>
            {item?.type == 'pay' && (
              <RNText style={styles.nextdue}>{Strings.nextDue}</RNText>
            )}
            <RNText
              style={[
                styles.date,
                {color: item?.type == 'pay' ? Colors.redColor : Colors.BLACK_2},
              ]}>
              {item?.date}
            </RNText>
          </View>
        </View>
        <View style={styles.borderBottom} />
        <View style={[styles.marginTop2, commonStyles.flexRow]}>
          <View>
            <RNImage source={Images.sliderImage} style={styles.sliderImage} />
          </View>
          <View style={styles.priceView}>
            <View style={commonStyles.flexDirectionRowCenter}>
              <TextGradient style={styles.price} text={item?.price} />
              <RNText style={styles.date}>{item?.bed}</RNText>
            </View>
            <View>
              <RNText style={styles.description}>{item?.description}</RNText>
            </View>
          </View>
        </View>
        <View style={commonStyles.alignCenter}>
          <RNButton
            onPress={() => {
              setIsPaymentModal(true)
            }}
            textStyle={styles.viewDetailTextBtn}
            style={styles.viewDetailBtn}
            round
            title={item?.btnText}
          />
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  const renderItem1 = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>{ navigation.push(Screens.CarDetail);}}>
      <View style={styles.itemMainView}>
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={styles.name}>{item?.name}</RNText>
            <RNText style={styles.address}>{item?.address}</RNText>
          </View>
          <View>
            {item?.type == 'pay' && (
              <RNText style={styles.nextdue}>{Strings.nextDue}</RNText>
            )}
            {/* <RNText
              style={[
                styles.date,
                {color: item?.type == 'pay' ? Colors.redColor : Colors.BLACK_2},
              ]}>
              {item?.date}
            </RNText> */}
             <RNImage source={Images.heart} style={styles.heart} />
          </View>
        </View>
        <View style={styles.borderBottom} />
        <View style={[styles.marginTop2, commonStyles.flexRow]}>
          {/* <View>
            <RNImage source={Images.sliderImage} style={styles.sliderImage} />
          </View> */}
          <View style={styles.priceView}>
            <View style={commonStyles.flexDirectionRowCenter}>
              <TextGradient style={styles.price} text={item?.price} />
              <RNText style={styles.date}>{item?.bed}</RNText>
            </View>
          </View>
        </View>
        <View style={commonStyles.alignCenter}>
        <Image source={item?.images} style={styles.car2}></Image>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <RNContainer
      backgroundColor={colors.GREY_11}
      edges={[]}
      useScroll
      hideHorizontalPadding>
      <ImageBackground source={Images.marketplaceHeaderBg} style={styles.headerBg}>
        <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
        {/* insets */}
        <View style={{height: top}}></View>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigationBack(navigation)}
            style={styles.headerBackButton}>
            <RNImage
              source={Images.leftArrow}
              style={styles.headerBackIcon}></RNImage>
          </TouchableOpacity>
          <RNText style={styles.headerTitle}>{Strings.MarketPlace}</RNText>
          <View style={styles.headerPlaceholder}></View>
        </View>
        <View
          style={[styles.locView, {...commonStyles.flexDirectionRowCenter}]}>
          <View style={commonStyles.flexRow}>
            <RNImage source={Images.locIcon} style={styles.locIcon}></RNImage>
            <View style={commonStyles.marginLeftWp2}>
              <RNText style={styles.currentLocText}>Current location</RNText>
              <RNText style={styles.addText}>2972 Westheimer Rd San.</RNText>
            </View>
          </View>
          <View>
            <RNImage
              source={Images.calenderIcon}
              style={styles.locIcon}></RNImage>
          </View>
        </View>
        <View style={styles.padding3}>
          <View style={styles.btnView}>
            <RNTransParentBtn
              onPress={() => {
                setActiveBtn(false);
              }}
              style={
                !activeBtn
                  ? styles.houseMarketplaceBtn
                  : styles.houseMarketplaceBtn1
              }
              title={Strings.houseMarketplace}
              textStyle={styles.btnText}
              isGradientText={!activeBtn}
            />

            <RNTransParentBtn
              onPress={() => {
                setActiveBtn(true);
              }}
              style={
                activeBtn
                  ? styles.houseMarketplaceBtn
                  : styles.houseMarketplaceBtn1
              }
              title={Strings.autoMarketplace}
              textStyle={styles.btnText}
              isGradientText={activeBtn}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={commonStyles.spacer} />
      <View style={styles.RNSearchBar}>
        <RNSearchBar
          placeholder={'Search'}
          containerStyle={styles.searchBar}></RNSearchBar>
      </View>
      { !activeBtn &&
      <>
        <View style={commonStyles.spacer} />
       <View style={styles.propertypeView}>
        <RNText style={styles.propertyTypeText}>{Strings.propertyType}</RNText>
        <View style={commonStyles.spacer1} />
        <View style={commonStyles.flexDirectionRowCenterSpaceArround}>
          {propertyType(Images.houses, Strings.houses)}
          {propertyType(Images.townhome, Strings.townhomes)}
          {propertyType(Images.condos, Strings.condos)}
          {propertyType(Images.apartment, Strings.apartment)}
        </View>
      </View></>}
      <View style={commonStyles.spacer} />
      {!activeBtn && <View style={[commonStyles.flexDirectionRowCenter, {paddingRight: 10}]}>
        <RNText style={styles.propertyTypeText}>
          {Strings.listOfPropertys}
        </RNText>
        <TouchableOpacity onPress={()=>{setFilterPopup(true)}}>
        <View style={commonStyles.flexRow}>
          <Image source={Images.filterIcon} style={styles.filterIcon}></Image>
          <TextGradient style={styles.Fillter} text={'Fillter'}></TextGradient>
        </View>
        </TouchableOpacity>
      </View>}
      <View style={styles.padding3}>
        {!activeBtn && (
          <FlatList
            data={proertyList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {activeBtn && (
          <View>
          <RNText style={styles.propertyTypeText}>
          {'Recently Viewed'}
        </RNText>
          <FlatList
            data={proertyList1}
            renderItem={renderItem1}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
        )}
      </View>
      <View style={{height: bottom + 10}}></View>
      <BuyPropertyModal
        isVisible={isPaymentModal}
        setIsVisible={setIsPaymentModal}
        onPress={() => {
          setIsPaymentModal(false);
          setTimeout(() => {
            setConfirmModal(true);
          }, 1000);
        }}
      />
      <ConfirmedModal
        header={'Thanks - you \n Your Purchase is Confirmed'}
        message={
          'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Pretium nunc'
        }
        isVisible={confirmModal}
        setIsVisible={setConfirmModal}
        onPress={() => {
          setConfirmModal(false);
        }}
      />
      <FilterMarketPlace
        isVisible={filterPopup}
        setIsVisible={setFilterPopup}
        onPress={() => {
          setFilterPopup(false);
        }}
      />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  headerBackButton: {
    height: wp(8),
    width: wp(8),
    justifyContent: 'center',
  },
  headerBackIcon: {
    height: wp(6),
    width: wp(6),
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(5),
    color: colors.WHITE,
  },
  headerPlaceholder: {
    height: wp(8),
    width: wp(8),
  },
  stackImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  stackImgItem: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.WHITE,
  },
  stackImgIcon: {
    width: wp(8),
    height: wp(8),
  },
  currentLocText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: colors.GREY_5,
  },
  houses: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: 'rgba(47, 57, 78, 0.8)',
    fontWeight: '600',
  },
  addText: {
    fontSize: wp(4),
    color: '#4F4F4F',
    fontWeight: '500',
    fontFamily: Fonts.JOST,
  },
  propertyTypeText: {
    fontSize: wp(4.5),
    color: 'rgba(47, 57, 78, 1)',
    fontWeight: '500',
    fontFamily: Fonts.POPPINS_REGULAR,
    paddingLeft: 14,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    backgroundColor: colors.WHITE,
    paddingHorizontal: wp(3),
    paddingVertical: wp(5),
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardIconContainer: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(8),
  },
  cardIcon: {
    width: wp(5),
    height: wp(5),
  },
  locIcon: {
    width: wp(10),
    height: wp(10),
  },
  propertyImg: {
    width: wp(15),
    height: wp(15),
  },
  cardTextContainer: {
    marginLeft: wp(4),
  },
  cardTitle: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  cardSubTitle: {
    opacity: 0.6,
    fontSize: wp(3.5),
  },
  cardAmountContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  cardAmount: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(4),
  },
  cardAmountGray: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    fontSize: wp(4),
    color: colors.GREY_12,
  },
  progressBar: {
    height: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: colors.GREY_12,
    marginTop: 8,
  },
  progress: {
    height: 5,
    borderRadius: 5,
    width: '60%',
    backgroundColor: '#FFC243',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  addButton: {
    width: '50%',
    marginTop: hp(2),
    alignSelf: 'center',
  },
  locView: {
    paddingHorizontal: wp(3),
    marginTop: wp(2),
  },
  btnView: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: 'center',
  },
  padding3: {
    padding: wp(3),
    //marginTop: wp(2),
  },
  houseMarketplaceBtn: {
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    flex: 1,
    height: hp(6),
  },
  houseMarketplaceBtn1: {
    //backgroundColor: '',
    borderRadius: 25,
    flex: 1,
    height: hp(6),
  },
  btnText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: wp(3.5),
    color: colors.GREY_5,
    fontWeight: '600',
  },
  RNSearchBar: {paddingHorizontal: wp(4)},
  propertypeView: {
    backgroundColor: 'rgba(157, 178, 206, 0.08)',
    paddingVertical: hp(2),
  },
  titleTab: {
    fontWeight: '600',
    fontSize: wp(4),
    fontFamily: Fonts.JOST,
    paddingVertical: hp(1),
  },
  itemMainView: {
    borderColor: Colors.yellowBorder,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: hp(1),
    marginVertical: hp(1),
  },
  name: {
    fontWeight: '700',
    fontSize: wp(4),
    fontFamily: Fonts.POPPINS_BOLD,
    color: '#101010',
  },
  address: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: '#878787',
  },
  date: {
    fontWeight: '500',
    fontSize: wp(3.5),
    fontFamily: Fonts.JOST,
    color: colors.BLACK_2,
  },
  nextdue: {
    fontWeight: '500',
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    color: colors.redColor,
  },
  borderBottom: {
    borderBottomColor: Colors.blackOpacity10,
    borderBottomWidth: 1,
    marginTop: 8,
  },
  sliderImage: {
    height: hp(12),
    width: wp(33),
    borderRadius: 10,
  },
  heart: {
    height: wp(6),
    width: wp(6),
  },
  price: {
    fontWeight: '700',
    fontSize: wp(3.5),
    fontFamily: Fonts.POPPINS_BOLD,
  },
  priceView: {flex: 1, paddingHorizontal: wp(2)},
  marginTop2: {
    marginTop: hp(1),
  },
  description: {
    fontWeight: '400',
    fontSize: wp(3),
    fontFamily: Fonts.JOST,
    color: colors.GREY_4,
  },
  viewDetailTextBtn: {
    fontSize: wp(4),
    color: colors.WHITE,
    fontWeight: '500',
  },
  viewDetailBtn: {
    marginTop: hp(2),
    width: '90%',
    height: hp(4),
  },
  AllPaymentsRecipts: {
    fontWeight: '600',
    fontSize: wp(4.5),
    fontFamily: Fonts.JOST,
    color: colors.GREY_20,
  },
  filterIcon: {
    height: wp(6),
    width: wp(6),
  },
  car2: {
    height: wp(35),
    width: wp(70),
    resizeMode: 'stretch'
  },
  searchBar:{
    backgroundColor: '#F2F2F2'
  }
});
