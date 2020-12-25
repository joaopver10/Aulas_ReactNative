import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default (props) => {
    const [nome, setNome] = useState('')
  return (
    <View style={styles.container}>

        <Text>{nome}</Text>

      <TextInput style={styles.texto}
      placeholder="Digite seu nome"
      value={nome}
      onChangeText={ nome => setNome(nome)}
      />
    </View>
 );
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

});