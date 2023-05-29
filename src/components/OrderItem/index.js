import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

const OrderItem = ({item, onDelete}) => {

	const formatDay = date => {
		const newDate = new Date(date);
		return newDate.toLocaleDateString();
	  };


  return (
	<View style={styles.order}>
		<View>
			<Text styles={styles.date}>{formatDay(item.fecha)}</Text>
			<Text styles={styles.total}>{item.total}</Text>
		</View>
	  <View>
		<TouchableOpacity onPress={()=>onDelete(item.id)}>
			<Ionicons name='md-trash' color={'red'} size={22} />
		</TouchableOpacity>
	  </View>
	</View>
  )
}

export default OrderItem