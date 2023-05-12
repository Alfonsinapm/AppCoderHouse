import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, Details } from '../screens'

const ShopNavigator = () => {

	const Stack = createNativeStackNavigator();
	
  return (
	<NavigationContainer>
	  <Stack.Navigator initialRouteName='Home'>
		<Stack.Screen name='Home' component={Home}/>
		<Stack.Screen name='Details' component={Details}/>
	  </Stack.Navigator>
	</NavigationContainer>
  )
}

export default ShopNavigator