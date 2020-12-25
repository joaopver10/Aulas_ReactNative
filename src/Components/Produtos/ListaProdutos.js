import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Produtos from './produtos'

export default (props) => {
  return (
    <View >
      <Text style={styles.texto}>Lista de Produtos</Text>
    {Produtos.map(p =>{
        return <Text>{p.id} {p.nome} tem R${p.preco}</Text>
    })}
      
    </View>
 );
};

const styles = StyleSheet.create({
texto:{
    fontSize: 20,
    fontWeight: 'bold'
}
});