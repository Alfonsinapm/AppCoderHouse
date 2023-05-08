import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductDetails = ({ item, goBack }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Detalle deproducto</Text>
			<Text style={styles.nombreProducto}>{item.name}</Text>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.botonVolver}>
					<Text onPress={() => goBack()} style={styles.txtVolver}>{'Volver'}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ProductDetails