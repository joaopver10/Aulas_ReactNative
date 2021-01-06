import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

import MegaNumero from './MegaNumero'

export default class Mega extends Component {
  state = {
    quantDeNum: this.props.quantDeNum,
    numeros: [],
  };

  alteraQtdnum = (qtd) => {
    this.setState({ quantDeNum: +qtd });
  };


    /* Gera um número entre 1 e 60 que não 
   esteja no array e quando o número gerado não 
   estiver contido ele adiciona o novoNum
    */

  gerarNumeroNaoContido = (nums) => {                                          
    const novoNum = parseInt(Math.random() * 60) + 1;
    return nums.includes(novoNum) ? this.gerarNumeroNaoContido(nums) : novoNum;
  };

  /* Gera um array com a quantidade de número digitado dentro no TextInput
  */
  gerarNumeros = () => {
    const numeros = Array(this.state.quantDeNum)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], []);
    this.setState({ numeros });
  };       
  
  exiberNum = () =>{
      const nums = this.state.numeros
      return nums.map( num =>{
          return <MegaNumero  num={num}/>
      })
  }

  render() {
    return (
      <View style={styles.Container}>
        <Text>Gerador de Mega-Sena</Text>

        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder='Quantidade de Números'
          value={`${this.state.quantDeNum}`}
          onChangeText={this.alteraQtdnum}
        />
        <Button title='Gerar' onPress={this.gerarNumeros} />

         <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
         {this.exiberNum()}
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
