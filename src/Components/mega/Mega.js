import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'


export default class Mega extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <Text>
                    Gerador de Mega-Sena
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