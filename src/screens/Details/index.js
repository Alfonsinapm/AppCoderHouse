import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { useSelector } from 'react-redux'
import { cartProduct } from '../../store/actions/cart.action'
import { useDispatch } from 'react-redux';

const ProductDetails = ({ navigation }) => {

	const producto = useSelector(state => state.productos.selected);
	const dispatch = useDispatch();

	const handleBuyProduct = item => {

		dispatch(cartProduct(item));
		//navigation.navigate('Carrito');
	}
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: producto.imgUrl }} />
			</View>
			<View style={styles.InfoContainer}>
				<Text style={styles.nombreProducto}>{producto.nombre}</Text>
				<Text style={styles.title}>${producto.price}</Text>
				<TouchableOpacity onPress={() => handleBuyProduct(producto.id)} style={styles.btnComprar}>
					<Text style={styles.textoBtn}>comprar</Text>
				</TouchableOpacity>
			</View>

		</View>
	)
}

export default ProductDetails