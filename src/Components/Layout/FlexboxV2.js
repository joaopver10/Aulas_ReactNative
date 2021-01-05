import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
  return (
    <View style={styles.FlexV2}>
      <Quadrado cor='#2E04FF' />
      <Quadrado cor='#F31515' />
      <Quadrado cor='#2BC8CD' />
      <Quadrado cor='#BE2BCD' />
      <Quadrado cor='#7ACD2B' />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
});
