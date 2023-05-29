import { TouchableOpacity, Text, View, FlatList, Dimensions, Button } from 'react-native';
import React, { useEffect } from 'react'
import styles from './styles';
import { selectedProduct } from '../../store/actions/producto.action';

import { useDispatch, useSelector } from 'react-redux';

const Home = ({ navigation }) => {

	const _productos = useSelector(state => state.productos.productos)
	const dispatch = useDispatch();

	const handleSelectedProduct = item => {
		dispatch(selectedProduct(item.id));
		navigation.navigate('Detils', {
			nombre: item.nombre
		});
	}

	const renderItem = ({ item }) => {
		return (
			<View style={styles.containerCard}>
				<Text style={styles.subtitle}>{item.nombre}</Text>
				<View style={styles.buttonContainer}>

					<TouchableOpacity style={styles.botonDetalle}>
						<Button onPress={() => handleSelectedProduct(item)} color={'black'} title={'Detalle'} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			{_productos.length ?
				<FlatList
					style={styles.ScrollContainer}
					data={_productos}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
				:
				<Text style={styles.Msg}>{'No hay elementos'}</Text>
			}
		</View>
	)
}

export default Home