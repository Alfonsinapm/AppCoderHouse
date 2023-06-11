import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator()

export default AuthNavigator = ()=>{
	return (
		<Stack.Navigator screenOptions={{
			initialRouteName:"Login",
			headerShadowVisible: false, 
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}>
			<Stack.Screen name='Login' component={AuthScreen} />
		</Stack.Navigator>
	)
}