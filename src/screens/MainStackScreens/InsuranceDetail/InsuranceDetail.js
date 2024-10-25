import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  RNContainer,
  RNHeader,
  RNImage,
  RNSearchBar,
  RNText,
  TextGradient,
} from '../../../components';
import {Colors, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationTo} from '../../../navigations';
import RNTransParentBtn from '../../../components/RNTransParentBtn';
import GradientBorder from '../../../components/RnGradientBorder';
import {screenWidth} from '../../../constants/ResponsiveScreens';
const gray = [Colors.blackOpacity10, Colors.blackOpacity10];
const yellow = [Colors.LN_FIRST, Colors.LN_TWO];
const gray4 = [Colors.GREY_4, Colors.GREY_4];
export default function InsuranceDetail({navigation}) {
  const [currentMonth, setCurrentMonth] = useState(0);

  const tabView = () => {
    const [selectedTab, seSelectedTab] = useState(true);
    return (
      <View style={commonStyles.flexDirectionRowCenter}>
        <View>
          <TouchableOpacity
            style={commonStyles.alignCenter}
            onPress={() => {
              seSelectedTab(true);
            }}>
            <TextGradient
              colors={selectedTab ? yellow : gray4}
              text={Strings.overview}
              style={styles.titleTab}
            />
            <GradientBorder
              colors={selectedTab ? yellow : gray}
              borderWidth={2}
              borderRadius={0}
              width={screenWidth / 2.2}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={commonStyles.alignCenter}
            onPress={() => {
              seSelectedTab(false);
            }}>
            <TextGradient
              colors={selectedTab ? gray4 : yellow}
              text={Strings.coverages}
              style={styles.titleTab}
            />
            <GradientBorder
              colors={selectedTab ? gray : yellow}
              borderWidth={2}
              borderRadius={0}
              width={screenWidth / 2.2}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
 const detailView = (title,value) => {
    return(
      <View style={[commonStyles.flexDirectionRowCenter,{paddingVertical:wp(1)}]}>
        <View>
        <RNText style={commonStyles.textStyle10}>{title}</RNText>
        </View>
        <View>
        <RNText style={commonStyles.textStyle10}>{value}</RNText>
        </View>
      </View>
    )
  }
  return (
    <RNContainer useScroll backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <RNHeader
          containerStyle={styles.header}
          title={Strings.myPolicies}></RNHeader>
        <View style={commonStyles.spacer2} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <View style={commonStyles.alignCenter}>
            <RNText style={commonStyles.textStyle5}>
              {'Comprehensive Plan'}
            </RNText>
            <RNText style={commonStyles.textStyle6}>{'Volkswagen Polo'}</RNText>
            <View style={styles.platenumberView}>
              <RNText style={commonStyles.textStyle7}>{'5NOF 222'}</RNText>
            </View>
          </View>
          <View>
            <Image source={Images.carlogo1}></Image>
          </View>
        </View>
        <View style={commonStyles.spacer1} />
        <View style={commonStyles.border} />
        <View style={commonStyles.spacer} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={commonStyles.textStyle7}>{'Valid From'}</RNText>
            <RNText style={commonStyles.textStyle8}>{'12 Nov 2023'}</RNText>
          </View>
          <View>
            <View style={styles.dotsContainer}>
              <View style={[styles.dot]} />
              <View style={styles.dots}>
                {new Array(15).fill('').map((itm, index) => (
                  <View key={index} style={styles.dash} />
                ))}
              </View>
              <View style={[styles.dot]} />
            </View>
          </View>

          <View>
            <RNText style={commonStyles.textStyle7}>{'Valid Till'}</RNText>
            <RNText style={commonStyles.textStyle8}>{'11 Nov 2024'}</RNText>
          </View>
        </View>
        <View style={commonStyles.spacer2} />
        <View style={commonStyles.flexDirectionRowCenter}>
          <View>
            <RNText style={commonStyles.textStyle7}>
              {'Policy Holder Name'}
            </RNText>
            <RNText style={commonStyles.textStyle8}>
              {'Total Insured Value'}
            </RNText>
          </View>
          <View>
            <RNText style={commonStyles.textStyle7}>
              {'Total Insured Value'}
            </RNText>
            <RNText style={commonStyles.textStyle8}>{'0'}</RNText>
          </View>
        </View>
        <View style={commonStyles.spacer} />
        <View style={commonStyles.border} />
        <View
          style={[
            commonStyles.flexDirectionRowCenterSpaceArround,
            {paddingVertical: wp(2)},
          ]}>
          <View style={commonStyles.alignCenter}>
            <Image source={Images.claimIcon3} style={styles.arrow}></Image>
            <TextGradient
              style={commonStyles.textStyle7}
              text={Strings.claim}></TextGradient>
          </View>
          <View style={commonStyles.alignCenter}>
            <Image source={Images.download1} style={styles.arrow}></Image>
            <TextGradient
              style={commonStyles.textStyle7}
              text={Strings.PolicyDocument}></TextGradient>
          </View>
          <View style={commonStyles.alignCenter}>
            <Image source={Images.edit1} style={styles.arrow}></Image>
            <TextGradient
              style={commonStyles.textStyle7}
              text={Strings.edit}></TextGradient>
          </View>
        </View>
        <View style={commonStyles.border} />
        {tabView()}
        <View style={commonStyles.spacer} />
        <RNText style={commonStyles.textStyle9}>{'Car Details'}</RNText>
        <View style={commonStyles.spacer} />
        {detailView(Strings.carNumber,'5NOF 222')}
        {detailView(Strings.vehicleInsurance,'0')}
        {detailView(Strings.vehicleTaxt,'0')}
        {detailView(Strings.typeOfInsurance,'Standard')}
        {detailView(Strings.time,'1 Year')}
        {detailView(Strings.expireOfGuarantee,'20 Apr, 2024')}
      </ImageBackground>
    </RNContainer>
  );
}
