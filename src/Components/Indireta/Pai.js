import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Filho from './Filho';

export default (props) => {
    const [num, setNum] = useState(0)
  
    function exibir(numero){
        setNum(numero)
    }

  return (
    <View style={styles.container}>
        <Text>{num}</Text>
      <Filho 
      min={1}
      max={100} 
      funcao={exibir} 
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
