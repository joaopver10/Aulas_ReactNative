import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ num }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Num}>
          {num}
          </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  Num: {
    color: '#FFF',
    fontSize: 18 
  },
});
