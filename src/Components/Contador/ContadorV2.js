import { StatusBar } from 'expo-status-bar'
import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotao from './ContadorBotao'

export default (props) => {
  
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)
    
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ContadorV2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotao inc={inc} dec={dec}/>
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
  texto:{
    fontSize: 20,
}
});