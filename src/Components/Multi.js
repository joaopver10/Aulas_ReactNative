import React from 'react'
import { Text, View } from 'react-native'

export default function Comp({min, max}){
    const res = max - min + 1
    const alet = parseInt(Math.random() * res) + min

    return (
        <Text> O  valor de  é {alet} </Text> 
    )
}

