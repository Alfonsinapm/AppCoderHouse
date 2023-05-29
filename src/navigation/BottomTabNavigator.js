import ShopNavigator from "./shopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import OrdersNavigator from "./OrdersNavigator";
const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<BottomTabs.Screen
				name={'Inicio'}
				component={ShopNavigator}
				options={{
					tabBarIcon: () => (
						<View>
							<Ionicons name={'home'} size={30} color='black' />
						</View>
					)
				}}
			/>
			<BottomTabs.Screen
				name={'Carrito'}
				component={CartNavigator}
				options={{
					tabBarIcon: () => (
						<View>
							<Ionicons name={'cart'} size={30} color='black' />
						</View>
					)
				}}
			/>
			<BottomTabs.Screen
				name={'Orders'}
				component={OrdersNavigator}
				options={{
					tabBarIcon: () => (
						<View>
							<Ionicons name={'list'} size={30} color='black' />
						</View>
					)
				}}
			/>
		</BottomTabs.Navigator>
	)
}