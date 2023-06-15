import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import ItemCarrito from '../../components/ItemCarrito';
import { useSelector } from 'react-redux';
import styles from './styles'
import { remoteCartProduct, confirmCart } from '../../store/actions/cart.action';

const CartScreen = () => {

	const dispatch = useDispatch();
	const _cartProductos = useSelector(state => state.cart.productos)
	const total= useSelector(state=>state.cart.total)	

	const handleDeleeItem = (item)=>{
		dispatch(remoteCartProduct(item));
	}
	const handleConfirmarPedido = ()=>{
		dispatch(confirmCart(_cartProductos, total));
	}
	const renderCartItem = ({item})=>(
		<ItemCarrito item={item} onDelete={handleDeleeItem}/>
	);

  return (
	<View style={styles.container}>
		<View style={styles.list}>
			{_cartProductos?.length ?
			<FlatList
				data={_cartProductos}
				keyExtractor={item=>item?.id}
				renderItem={renderCartItem}
			/> 
			: <Text>{'No hay elementos'}</Text>
			}</View>
		<View style={styles.footer}>
			<View style={styles.confirm}>
				<TouchableOpacity onPress={()=>handleConfirmarPedido()}>
					<Text>confirmar</Text>
				</TouchableOpacity>
				<View>
					<Text style={styles.priceText}>Total: ${total}</Text>
				</View>
			</View>
		</View>
	</View>
  )
}

export default CartScreen