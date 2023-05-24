import ShopNavigator from "./shopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen 
			name={'ShopNavigator'} 
			component={ShopNavigator} 
			options={{
				tabBarIcon:()=>(
					<View>
						<Ionicons name={'home'} size={30} color='black'/>
					</View>
				)
			}}
			/>
			<BottomTabs.Screen 
			name={'Carrito'} 
			component={CartNavigator} 
			options={{
				tabBarIcon:()=>(
					<View>
						<Ionicons name={'cart'} size={30} color='black'/>
					</View>
				)
			}}
			/>
		</BottomTabs.Navigator>
	)
}