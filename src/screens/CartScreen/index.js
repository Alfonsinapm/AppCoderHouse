import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import ItemCarrito from '../../components/ItemCarrito';
import { useSelector } from 'react-redux';
import styles from './styles'
import { remoteCartProduct } from '../../store/actions/cart.action';

const CartScreen = () => {

	const dispatch = useDispatch();

	const handleDeleeItem = (item)=>{
		dispatch(remoteCartProduct(item));
	}
	const renderCartItem = ({item})=>(
		<ItemCarrito item={item} onDelete={handleDeleeItem}/>
	);

	const _cartProductos = useSelector(state => state.cart.productos)

  return (
	<View style={styles.container}>
		<View style={styles.list}>
			{_cartProductos.length ?
			<FlatList
				data={_cartProductos}
				keyExtractor={item=>item?.id}
				renderItem={renderCartItem}
			/> 
			: <Text>{'No hay elementos'}</Text>
			}</View>
		<View style={styles.footer}>
			<View style={styles.confirm}>
				
				<View>
					<Text style={styles.priceText}>Total: $100</Text>
				</View>
			</View>
		</View>
	</View>
  )
}

export default CartScreen