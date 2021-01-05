import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
  const lado = 50
  return (
    <View style={{
      height: lado,
      width: lado,
      backgroundColor: props.cor || "#000"
    }} />
   
 
 );
};
