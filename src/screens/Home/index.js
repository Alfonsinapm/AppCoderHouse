import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import React from 'react'
import styles from './styles';
import { useState } from 'react';
import AgregarProductos from '../../components/AgregarProductos/index';
const Home = () => {

	const [textItem, setTextItem] = useState('');
	const [list, setList] = useState([]);

	const onHandleTextChange = (text) => {
		setTextItem(text);
	};

	const agregar = () => {
		
		if (textItem.length) {
			setList(prevstate => [...prevstate, {
				name: textItem,
				id: Math.random().toString()
			}])
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
						<Text onPress={() => borrar(item)} color={'white'}>{'Borrar'}</Text>
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