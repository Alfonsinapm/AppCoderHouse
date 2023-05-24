import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, Details } from '../screens'
import colores from '../constantes/colores'


const ShopNavigator = () => {

	const Stack = createNativeStackNavigator();
	
  return (
	
		<Stack.Navigator 
	  	initialRouteName='Home'
		screenOptions={
			{
				headerStyle:{
					backgroundColor:colores.primary
				},
				headerTintColor:colores.lightFont,
				headerTitleStyle:{
					fontWeight:'bold'
				}
			}
		}
		>
		<Stack.Screen 
			name='Home' 
			component={Home}
			options={{
				title: 'Home'
			}}
		/>
		<Stack.Screen 
			name='Detils' 
			component={Details}
			options={({ route }) => ({
				title: route.params.producto.nombre,
			  })}
		/>
	  </Stack.Navigator>
	
	  
	
  )
}

export default ShopNavigator