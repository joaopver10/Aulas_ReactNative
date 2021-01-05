import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default (props) => {
  return (
    <View style={styles.FlexV4}>
      <View style={styles.V0} />
      <View style={styles.V1} />
      <View style={styles.V2} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0:{
    backgroundColor: '#2BC8CD',
    height: 200,
  },
  V1: {
    backgroundColor: '#7ACD2B',
    flexGrow: 1,
  },
  V2: {
    backgroundColor: '#BE2BCD',
    flexGrow: 1,
  },
});
