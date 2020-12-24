import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>
        {props.nome} {props.sobrenome}
      </Text>
    </View>
 );
};

const styles = StyleSheet.create({
});