import { View, Text, TouchableOpacity, Dimensions, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from '../';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker'

const AgregarProductos = ({ onAdd, onHandleChangeText, value, onImage }) => {

	const [isPortrait, setIsPortrait] = useState(true);
	const [pickedUri, setPickedUri] = useState();

	const statePortrait = () => setIsPortrait(onPortrait);

	const onPortrait = () => {
		const dim = Dimensions.get('screen');
		return dim.height > dim.width
	};

	useEffect(() => {
		Dimensions.addEventListener('change', statePortrait)
		return () => {
			Dimensions.removeEventListener('change', statePortrait)
		}
	}, [])

	const verifyPermission = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert('Permisos son insuficientes', [{ text: 'Ok' }])
			return false
		} return true
	}

	const handleChangeImage = async () => {
		const hasPermission = await verifyPermission()
		if (!hasPermission) return
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [19, 9],
			quality: 0.8
		})
		
		setPickedUri(image?.assets[0].uri)
		onImage(image?.assets[0].uri)
	}

	return (

		<View style={styles.container}>
			<Text style={styles.subtitle}>{'Informacion personal'}</Text>
			<View style={styles.containerFoto}>
				<View style={styles.preview}>
					{!pickedUri ? (
						<Text style={{color:'white', padding:10}}>No hay imagen todavia</Text>
					) : (
						<Image source={{ uri: pickedUri }} style={styles.image} />
					)}
				</View>
				<Button color={'white'} title='Tomar foto' onPress={handleChangeImage} style={styles.botonAgregar}/>
			</View>
			<View style={styles.InfoContainer}>
				<Input
					onChangeText={(p) => onHandleChangeText('nombre', p)}
					placeholder='Nombre producto'
					value={value?.nombre || ''}
				/>
				<Input
					onChangeText={(p) => onHandleChangeText('apellido', p)}
					placeholder='apellido'
					value={value?.apellido || ''}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.botonAgregar}>
						<Text onPress={onAdd} color={'white'} style={styles.textoBtn}>{'Agregar'}</Text>
					</TouchableOpacity>
					{/* <TouchableOpacity style={styles.botonAgregar}>
						<Text onPress={onClean} color={'white'} style={styles.textoBtn}>{'Limpiar'}</Text>
					</TouchableOpacity> */}
				</View>
			</View>

		</View>
	)
};

export default AgregarProductos