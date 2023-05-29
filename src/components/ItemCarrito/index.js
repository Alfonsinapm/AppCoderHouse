import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from '@expo/vector-icons/Ionicons'
import styles from './styles'


const ItemCarrito = ({item, onDelete}) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{item?.nombre}</Text>
			</View>
			<View style={styles?.detail}>
				<View >
					<Text>Cantidad</Text>
					<Text>Precio</Text>
				</View>
				<TouchableOpacity onPress={()=>onDelete(item.id)}>
					<IonIcons name='trash' size={24} color={'red'}/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ItemCarrito