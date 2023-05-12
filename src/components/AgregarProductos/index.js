import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from '../';
import styles from './styles';

const AgregarProductos = ({ onAdd, onHandleChangeText, value, onClean }) => {

	const [isPortrait, setIsPortrait] = useState(true);

	const statePortrait = ()=>setIsPortrait(onPortrait);

	const onPortrait = ()=>{
		const dim = Dimensions.get('screen');
		return dim.height>dim.width
	};

	useEffect(() => {
		Dimensions.addEventListener('change', statePortrait)
		return () => {
			Dimensions.removeEventListener('change', statePortrait)
		}
	}, [])
	
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
						<Text onPress={onAdd} color={'white'} style={styles.textoBtn}>{'Agregar'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botonAgregar}>
						<Text onPress={onClean} color={'white'} style={styles.textoBtn}>{'Limpiar'}</Text>
					</TouchableOpacity>
				</View>
		</View>
	)
};

export default AgregarProductos