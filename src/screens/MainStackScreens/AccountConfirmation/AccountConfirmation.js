import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  RNCheckBox,
  RNContainer,
  RNHeader,
  RNImage,
  RNText,
} from '../../../components';
import {Fonts, hp, Images, Screens, Strings, wp} from '../../../constants';
import colors from '../../../constants/colors';
import styles from './styles';
import commonStyles from '../../../styles/commonStyles';
import RNButton from '../../../components/RNButton';
import {string} from 'prop-types';
import { navigationTo } from '../../../navigations';

export default function AccountConfirmation({navigation}) {
  const title = () => {
    return (
      <View style={commonStyles.alignCenter}>
        <RNText style={styles.confirmation}>
          {
            'Hereby I am opening a bank account in my own name and I confirm the following'
          }
        </RNText>
      </View>
    );
  };
  return (
    <RNContainer adjustTabBarHeight useScroll edges={['top']}>
      <RNHeader title={Strings.acounts}></RNHeader>
      <View style={commonStyles.spacer2} />
      {title()}
      <View style={commonStyles.spacer2} />
      <View style={commonStyles.spacer2} />
      <RNText style={styles.listText}>
        {'1.  I am fully legally responsible for all account activity'}
      </RNText>
      <View style={commonStyles.spacer2} />
      <RNText style={styles.listText}>
        {'2.  I use account exclusively for privacy purposes'}
      </RNText>
      <View style={commonStyles.spacer2} />
      <RNText style={styles.listText}>
        {'3.  I do not act on behalf of, or instructed by a third person.'}
      </RNText>
      <View style={commonStyles.spacer2} />
      <View style={styles.messageView}>
        <RNText style={styles.message}>
          {
            'Beware of trickstes that try to mislead Persons into opening bank accounts under false premises (e.g. app-testing, job offers credit brokering, identificaton for apartment offers) and misuse your account for criminal purposes.'
          }
        </RNText>
      </View>
      <View style={commonStyles.spacer} />
      <View style={commonStyles.flexRow}>
        <View>
          <RNCheckBox />
        </View>
        <RNText style={styles.confirmStatement}>
          {'I confirm the above listed statements'}
        </RNText>
      </View>
      <View style={commonStyles.spacer2} />
      <View style={commonStyles.spacer2} />
      <View style={styles.btnView}>
        <RNButton
          onPress={()=>{navigationTo(navigation,Screens.MobileScreen)}}
          activeOpacity={0.5}
          title={Strings.submit}
          textStyle={styles.textStylebtn}
          round></RNButton>
      </View>
    </RNContainer>
  );
}
