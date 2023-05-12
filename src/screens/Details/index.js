import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductDetails = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Detalle deproducto</Text>
			<TouchableOpacity style={styles.botonVolver}>
				<Button onPress={() => navigation.navigate('Home')} color={'black'} title= {'Volver'}></Button>
			</TouchableOpacity>
			
		</View>
	)
}

export default ProductDetails