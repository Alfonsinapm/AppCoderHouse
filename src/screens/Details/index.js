import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductDetails = ({ navigation, route }) => {
	let producto = route.params.producto;
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: producto.imgUrl }} />
			</View>
			<View style={styles.InfoContainer}>
				<Text style={styles.nombreProducto}>{producto.nombre}</Text>
				<Text style={styles.title}>${producto.price}</Text>
			</View>

		</View>
	)
}

export default ProductDetails