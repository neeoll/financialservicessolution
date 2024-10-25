import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, wp} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function RNContainer({
  children,
  edges,
  hideHorizontalPadding,
  useScroll,
  style,
  backgroundColor,
  adjustTabBarHeight,
}) {
  return (
    <SafeAreaView
      edges={edges ? edges : ['top', 'bottom']}
      style={[styles.safeArea, {backgroundColor: backgroundColor}]}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: hideHorizontalPadding ? 0 : wp(5),
            backgroundColor: backgroundColor,
          },
          style,
        ]}>
        {useScroll ? (
          <ScrollView
            // nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={[
              styles.scrollViewContent,
              {
                paddingBottom: adjustTabBarHeight
                  ? Platform.OS == 'android'
                    ? 50
                    : 80
                  : 0,
              },
            ]}>
            {children}
          </ScrollView>
        ) : (
          children
        )}
        {/* {adjustTabBarHeight && <View style={styles.adjustTabBarHeight} />} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  adjustTabBarHeight: {
    height: Platform.OS == 'android' ? 50 : 80,
  },
});
