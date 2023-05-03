import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input } from '../';
import styles from './styles';

const AgregarProductos = ({ onAdd, onHandleChangeText, value, onClean }) => {

	return (

		<View style={styles.container}>
				<Text style={styles.subtitle}>{'Nombre producto'}</Text>
				<Input
					onChangeText={onHandleChangeText}
					placeholder='Agregue un producto'
					value={value}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.botonAgregar}>
						<Text onPress={onAdd} color={'white'}>{'Agregar'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botonAgregar}>
						<Text onPress={onClean} color={'white'}>{'Limpiar'}</Text>
					</TouchableOpacity>
				</View>
		</View>
	)
};

export default AgregarProductos