import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default props => {
    
    return (
        <View style={styles.container}>
            <Text> {props.principal} </Text>
         <Text> {props.secundario} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });