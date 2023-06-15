import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useState, useCallback, useEffect } from 'react'
import AgregarProductos from '../../components/AgregarProductos'
import { useDispatch, useSelector } from 'react-redux'
import { agregarFoto } from '../../store/actions/agregarProducto.action'
import styles from './styles'

const AgregarProductosScreen = ({ navigation }) => {

	const [data, setData] = useState({})
	const [show, setShow] = useState(false)
	const [image, setImage] = useState();

	const dispatch = useDispatch();

	const onHandleTextChange = useCallback((field, value) => {
		setData(d => ({ ...d, [field]: value }));
	}, [setData]);

	const handleChangeImg = () => {
		setShow(!show)
	}

	const onAdd = () => {
		dispatch(agregarFoto(image));
		setShow(!show)
	}

	
	useEffect(() => {
		if (foto !== undefined && foto !== null) {

			setImage(foto)
		}

	}, [onAdd, foto])


	return (
		<View style={styles.container}>
			{!show ?
				<AgregarProductos
					onAdd={onAdd}
					onHandleChangeText={onHandleTextChange}
					value={data}
					onImage={setImage}
				/>
				:
				<View style={styles.containerCard}>
					{!image ? (
						<Text style={{ color: 'white', padding: 10 }}>No hay imagen todavia</Text>
					) : (
						<Image source={{ uri: image }} style={styles.image} />
					)}
					<Text style={styles.subtitle}>{data?.nombre}</Text>
					<Text style={styles.subtitle}>{data?.apellido}</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.botonDetalle} onPress={() => handleChangeImg()}>
							<Text color={'white'}>{'Cambiar'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			}
		</View>
	)
}

export default AgregarProductosScreen
