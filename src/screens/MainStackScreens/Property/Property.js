import React, {useState} from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
  TextGradient,
} from '../../../components';
import styles from './styles';
import {Colors, Images, Screens, Strings, wp} from '../../../constants';
import GradientBorder from '../../../components/RnGradientBorder';
import {
  FlatList,
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {screenWidth} from '../../../constants/ResponsiveScreens';
import colors from '../../../constants/colors';
import commonStyles from '../../../styles/commonStyles';
import RNButton from '../../../components/RNButton';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const gray = [Colors.blackOpacity10, Colors.blackOpacity10];
const yellow = [Colors.LN_FIRST, Colors.LN_TWO];
const gray4 = [Colors.GREY_4, Colors.GREY_4];

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
    btnText: Strings.viewFullDetails,
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
    btnText: Strings.viewFullDetails,
    type: 'view',
  },
];
const proertyList1 = [
  {
    name: 'The Pavilion',
    address: '5441 Neast River Rd, Chicago, IL 60656',
    date: '18/3/2024',
    images: [],
    price: '$ 12,00 - 16,00,',
    bed: '3 beds',
    description:
      'Dog & Cat Friendly Fitness Center Mainte -nance on site Controlled Access Smoke Free Furnished',
    btnText: Strings.payAmount,
    type: 'pay',
  },
];

const Property = props => {
  const [selectedTab, seSelectedTab] = useState(true);
  const tabView = () => {
    return (
      <View 
      //style={commonStyles.flexDirectionRowCenter}
      >
        {/* <View>
          <TouchableOpacity
            style={commonStyles.alignCenter}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
              seSelectedTab(true);
            }}>
            <TextGradient
              colors={selectedTab ? yellow : gray4}
              text={Strings.myProperty}
              style={styles.titleTab}
            />
            <GradientBorder
              colors={selectedTab ? yellow : gray}
              borderWidth={2}
              borderRadius={0}
              width={screenWidth / 2.2}
            />
          </TouchableOpacity>
        </View> */}
        <View>
          <TouchableOpacity
            style={commonStyles.alignCenter}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
              seSelectedTab(false);
            }}>
            <TextGradient
              colors={selectedTab ? gray4 : yellow}
              text={Strings.monthlyPayment}
              style={styles.titleTab}
            />
            {/* <GradientBorder
              colors={selectedTab ? gray : yellow}
              borderWidth={2}
              borderRadius={0}
              width={screenWidth / 2.2}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
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
              props.navigation.push(Screens.PropertyDetail);
            }}
            textStyle={styles.viewDetailTextBtn}
            style={styles.viewDetailBtn}
            round
            title={item?.btnText}
          />
        </View>
      </View>
    );
  };
  const list = () => {
    return (
      <View>
        <FlatList
          extraData={seSelectedTab}
          data={selectedTab ? proertyList : proertyList1}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  return (
    <RNContainer>
      <RNHeader title={Strings.property} />
      <View style={commonStyles.marginTopHp2}>
        {tabView()}
        <View style={commonStyles.marginTopHp2}>{list()}</View>
      </View>
    </RNContainer>
  );
};

export default Property;
