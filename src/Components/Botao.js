import React from 'react'
import {View, Text, Button} from 'react-native'

export default props => {

    function executar(){
        alert('Seja bem vindo')
    }

    return(
        <Button 
        title= "Executar!"
        onPress={executar}
        />
    )
}