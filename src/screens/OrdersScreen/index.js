import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { OrderItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/actions/orders.action'

const OrdersScreen = () => {
	const dispach = useDispatch()
	const orders = useSelector(state=> state.orders.list)

	useEffect(() => {
	  dispach(getOrders())
	
	}, [])
	
	const handleDeleteItem = () => {
		console.log('first')
	}
	const renderOrderItem = ({ item }) => (
		<OrderItem onDelete={handleDeleteItem} item={item} />
	)

	return (
		<View>
			<FlatList
				data={orders}
				keyExtractor={item => item.id}
				renderItem={renderOrderItem}
			/>
		</View>
	)
}

export default OrdersScreen