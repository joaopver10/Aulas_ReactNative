import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Filho from './Filho'

export default (props) => {
  let a = 13
  let b = 100
    return (
    <View>
      <Filho a={a} b={b}/>
      <Filho a={100} b={200}/>
    </View>
 );
};

const styles = StyleSheet.create({});