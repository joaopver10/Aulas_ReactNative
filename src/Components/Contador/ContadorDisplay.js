import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto} >{props.num}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        backgroundColor: 'black',
        padding: 5,
        width: 60,
        color: '#fff',
        textAlign: 'center'
    }
});