import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgregarProductosScreen from "../screens/AgregarProductosScreen";

const Stack = createNativeStackNavigator();

const AgregarProductosNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShadowVisible: false, 
			
		}}>
			<Stack.Screen name='Settings' component={AgregarProductosScreen} />
		</Stack.Navigator>
	)
}

export default AgregarProductosNavigator;