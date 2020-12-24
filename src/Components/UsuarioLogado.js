import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import If from './If';

export default (props) => {
  const usuario = props.usuario || {}
    return (
    <View style={styles.container}>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text>Usuario Logado:</Text>
        <Text>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
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
