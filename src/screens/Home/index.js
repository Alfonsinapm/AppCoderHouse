import { TouchableOpacity, Text, View, FlatList, Dimensions, Button } from 'react-native';
import React, { useEffect } from 'react'
import styles from './styles';
import { useState, } from 'react';
import AgregarProductos from '../../components/AgregarProductos/index';

const Home = ({navigation}) => {

	const [textItem, setTextItem] = useState('');
	const [list, setList] = useState([]);

	const onHandleTextChange = (text) => {
		setTextItem(text);
	};

	// const width = Dimensions.get('width');
	// const height = Dimensions.get('height');

	// const medidas = {
	// 	s:200,
	// 	m:600,
	// 	l:1000
	// };

	const agregar = () => {
	
		if (textItem.length) {
			let item = {
				name: textItem,
				id: Math.random().toString()
			}
			setList(prevstate => [...prevstate, item])
			setTextItem('');
		}
	};

	const borrar = (item) => {
		let newList = list.filter(elem => elem.name != item.name);
		setList(newList);
	};

	const onClean = () => {
		setList([]);
		setTextItem('');
	};

	const renderItem = ({ item }) => {
		return (
			<View style={styles.containerCard}>
				<Text style={styles.subtitle}>{item.name}</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.botonBorrar}>
						<Text onPress={() => borrar(item)} color={'white'} style={styles.textoBorrar}>{'Borrar'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botonDetalle}>
						<Button onPress={() => navigation.navigate('Details')} color={'black'} title={'Detalle'}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<View style={styles.Box}>
				<AgregarProductos
					otherStyles={{ backgroundColor: '#F6F1F1' }}
					onAdd={agregar}
					onHandleChangeText={onHandleTextChange}
					value={textItem}
					onClean={onClean}
				/>
			</View>
			{list.length ?
				<FlatList
					style={styles.ScrollContainer}
					data={list}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
				:
				<Text style={styles.Msg}>{'No hay elementos'}</Text>
			}
		</View>
	)
}

export default Home