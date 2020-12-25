import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


//import DigiteNome from './Components/DigiteNome'
//import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2';
//import ListaProdutos from './Components/Produtos/ListaProdutos'
//import UsuarioLogado from './Components/UsuarioLogado'
//import Familia from './Components/Relacao/Familia';
//import Membro from './Components/Relacao/Membro';
//import ParImpar from './Components/ParImpar'
//import ContadorV2 from './Components/Contador/ContadorV2'
//import Pai from './Components/Indireta/Pai'
//import Pai from './Components/Direta/Pai'
//import Contador from './Components/Contador'
//import Botao from './Components/Botao';
//import Titulo from './Components/Titulo';
//import Primeiro from './Components/Primeiro';
//import Comp from './Components/Multi';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>


      {/*  
        <DigiteNome />
        <ListaProdutosV2/>  
        < ListaProdutos/>
        <UsuarioLogado usuario={{nome: 'Joao', email: 'joaopver@gmail.com'}} />
      
         <Familia>
          <Membro nome='Vanessa' sobrenome='Silva' />
          <Membro nome='Flavio' sobrenome='Silva' />
         </Familia>
    
      <Familia>
        <Membro nome='João' sobrenome='Pedro' />
        <Membro nome='Flavia' sobrenome='Silva' />
      </Familia>
  
  <ParImpar num={3} />
  <ContadorV2 />

		<Pai/>
	  
    <Contador inicial= {0} />
    
    <Botao/>
      
      <Titulo principal= "Cadastro" 
      secundario= "Tela principal"
      />
      
       
      <Text>
				<Comp min ={1}  max={100}/>      
			</Text>
      */}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
