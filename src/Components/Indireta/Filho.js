import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default (props) => {
  function gerar(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <View style={styles.container}>
      <Button
        title='Executar'
        onPress={() => {
          const n = gerar(props.min, props.max);
          props.funcao(n);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
