import React, { Component } from 'react'
import {Text, StyleSheet, View, TextInput, Button} from 'react-native'


export default class Mega extends Component{

    state ={
        quantDeNum: this.props.quantDeNum,
        numeros: []
    }

    alteraQtdnum = (qtd) => {
        this.setState({quantDeNum: qtd})
    }

    gerarNumeroNaoContido = nums =>{
        const novoNum = parseInt(Math.random() * 60) + 1
        return nums.includes(novoNum) ? this.gerarNumeroNaoContido(nums) : novoNum
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.quantDeNum).fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
        this.setState({numeros})
    }

    render(){
        return(
            <View style={styles.Container}>
                <Text>
                    Gerador de Mega-Sena
                </Text>

                <TextInput 
                keyboardType={'numeric'}
                style={{ borderBottomWidth: 1}}
                placeholder="Quantidade de Números"
                value={`${this.state.quantDeNum}`}
                onChangeText={this.alteraQtdnum }
                /> 
                <Button title="Gerar"
                onPress={this.gerarNumeros} />
                <Text>   
                    {this.state.numeros.join(', ')}
                </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})