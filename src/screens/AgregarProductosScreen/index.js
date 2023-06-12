import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { useState, useCallback, useEffect } from 'react'
import AgregarProductos from '../../components/AgregarProductos'
import { getProductosInicio } from '../../store/actions/productosInicio.action'
import { agregarProducto } from '../../store/actions/agregarProducto.action'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'


const AgregarProductosScreen = ({navigation}) => {

	const [data, setData] = useState({})
	
	const [image, setImage] = useState(null);

	const _productos = useSelector(state => state?.productosInicio?.list)
	
	const dispatch = useDispatch()

	const onClean = () => {
		console.log('first')
	}

	const onAdd = () => {
			let prod = {
				nombre: data.nombre,
				id: Math.random().toString(),
				precio: data.precio,
				cantidad: 0,
			};
			dispatch(agregarProducto(prod, image));
			navigation.navigate('Home')
	}

	const onHandleTextChange = useCallback((field, value) => {
		setData(d => ({ ...d, [field]: value }));
	}, [setData]);



	useEffect(() => {
		dispatch(getProductosInicio())
	}, [])
	useEffect(() => {
		dispatch(getProductosInicio())
	}, [onAdd])

	const renderItem = ({ item }) => { 
		
		return (
			<View style={styles.containerCard}>
				<Image style={styles.image} source={{uri:item.imgUrl}}/>
				<Text style={styles.subtitle}>{item?.nombre}</Text>
				<Text style={styles.subtitle}>${item?.precio}</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.botonBorrar}>
						<Text color={'white'}>{'Borrar'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<AgregarProductos
				onAdd={onAdd}
				onHandleChangeText={onHandleTextChange}
				value={data}
				onClean={onClean}
				onImage={setImage}
			/>

			{/* {_productos?.length ?
				<FlatList
					data={_productos || []}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
				:
				<Text>{'No hay elementos'}</Text>
			} */}
		</View>
	)
}

export default AgregarProductosScreen
