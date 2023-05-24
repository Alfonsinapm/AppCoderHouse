import { StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {

  const [loaded] = useFonts({
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf')
  })

  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  headerTitle:{
    fontFamily: 'Montserrat-Medium',
  }
});


