import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default (props) => {
  return (
    <View style={styles.botao}>
        <Button title="+" onPress={props.inc}/>
        <Button title="-" onPress={props.dec}/>
    </View>
 );
};

const styles = StyleSheet.create({
    botao:{
        flexDirection: 'row'
    }
});