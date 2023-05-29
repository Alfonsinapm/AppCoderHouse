import { View, FlatList } from 'react-native'
import React from 'react'
import { ordenes } from '../../data/ordenes'
import { OrderItem } from '../../components'

const OrdersScreen = () => {

	const handleDeleteItem = ()=>{
		console.log('first')
	}
	const renderOrderItem = ({item})=>(
		<OrderItem onDelete={handleDeleteItem} item={item}/>
	)
	
  return (
	<View>
	  <FlatList
	  	data={ordenes}
		keyExtractor={item =>item.id}
		renderItem={renderOrderItem}
	  />
	</View>
  )
}

export default OrdersScreen