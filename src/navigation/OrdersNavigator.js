import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName='Ordenes'
			screenOptions={{
			headerShadowVisible: false, 
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}>
			<Stack.Screen name='Ordenes' component={OrdersScreen} options={{title:'Ordenes'}}/>
		</Stack.Navigator>
	)
}

export default OrdersNavigator;