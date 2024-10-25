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
  RNImage,
  RNText,
  SuccessModal,
  TextGradient,
} from '../../../components';
import {Images, Screens, Strings} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import {navigationReset} from '../../../navigations';
import {string} from 'prop-types';
import RNButton from '../../../components/RNButton';
import RNTransParentBtn from '../../../components/RNTransParentBtn';

export default function InvestmentDetail({navigation}) {
  const renderInvestments = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          // setIsPaymentModal(true);
        }}>
        <View style={styles.mainView}>
          <RNImage source={Images.img1} style={styles.listImg}></RNImage>
          <View style={commonStyles.flexitemCenter}>
            <RNText style={styles.sharePriceText}>
              $0 {Strings.amountRaised}
            </RNText>
          </View>
        </View>
        <View style={commonStyles.spacer} />
      </TouchableOpacity>
    );
  };
  return (
    <RNContainer useScroll backgroundColor={colors.GREY_11}>
      <ImageBackground
        resizeMode={'stretch'}
        source={Images.sendMoneyBg}
        style={styles.imageBackground}>
        <RNHeader
          containerStyle={styles.header}
          title={Strings.investment}></RNHeader>
        <View style={commonStyles.spacer2} />
        {renderInvestments()}
        <RNButton
          //onPress={onPress}
          style={styles.paymentButton}
          title={Strings.investNow}
          textStyle={{}}
          round></RNButton>
        <View style={commonStyles.spacer} />
        <RNTransParentBtn
          style={styles.accreitedInvestoresOnly}
          title={Strings.accreitedInvestoresOnly}
          textStyle={styles.claimSelectedText}
          isGradientText
        />
        <View>
          <RNText style={styles.header}>GET A PIECE OF AIRTABLE</RNText>
          <RNText style={styles.header1}>Airtable</RNText>
          <RNText style={styles.bodyText}>
            Now LIVE! Accredited investors can own a piece of Series Airtable.
            2022 revenue: $142M. (Max 100 investors or fewer can join the
            series) Invest Now
          </RNText>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.header2}>
            REASONS TO INVEST {'\n'}450K+ Customers, $142M in Revenue
          </RNText>
          <RNText style={styles.bodyText}>
            Airtable is a widely used software-as-a-service (SaaS) provider with
            $142 million in annual revenue as of 2022. The company’s product
            allows customers to build custom apps on a no-code platform, which
            is currently used by over 450,000 organizations, including Intuit,
            Shopify, GitHub, Dropbox, LinkedIn, and more.1
          </RNText>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.header1}>
            $1.35B Raised from Renowned VCs
          </RNText>
          <RNText style={styles.bodyText}>
            To date, Airtable has raised $1.35 billion from notable investors,
            like Michael Dell, Salesforce Ventures, XN, J.P. Morgan Growth
            Equity Partners, Benchmark, Tiger Global Management, Franklin
            Venture Partners, and more.
          </RNText>
        </View>
        <View style={commonStyles.spacer} />
        <View>
          <RNText style={styles.header1}>Planned AI Integration</RNText>
          <RNText style={styles.bodyText}>
            In May 2023, Airtable announced a planned Connected Apps Platform
            designed to allow end users to integrate generative AI into their
            applications in as little as 15 minutes.2
          </RNText>
        </View>
      </ImageBackground>
    </RNContainer>
  );
}
