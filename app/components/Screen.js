import React, { Children } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import colors from '../config/colors';

function Screen({ children, style }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
