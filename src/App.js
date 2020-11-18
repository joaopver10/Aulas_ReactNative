import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Primeiro from './Components/Primeiro';
import Comp from './Components/Multi';

export default function App() {
	return (                 
		<View style={styles.container}>
			<Text>
				<Comp min ={1}  max={100}/>      
			</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
