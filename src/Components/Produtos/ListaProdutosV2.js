import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import produtos from './produtos'

export default (props) => {
  return (
    <View >
      <Text style={styles.texto}>Lista de Produtos V2</Text>
      <FlatList
      data={produtos}
      keyExtractor={i => '${i.id}'}
      renderItem={ ({item}) =>{
        return(
          <Text>{item.id} {item.nome} tem o preço de R${item.preco} </Text>    
        )
      }}
      />
    </View>
 );
};

const styles = StyleSheet.create({
texto:{
    fontSize: 20,
    fontWeight: 'bold'
}
});