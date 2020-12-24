import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ num = 0 }) => {
    return (
      <View style={styles.container}>
        <Text>O resultado é:</Text>
        { num % 2 ===0
            ? <Text>Par</Text>
            : <Text>Impar</Text>
        }
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
