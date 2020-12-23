import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
  return (
    <View>
      <Text>{props.a}</Text>
      <Text>{props.b}</Text>
    </View>
 );
};

const styles = StyleSheet.create({});