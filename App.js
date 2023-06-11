import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation'
export default function App() {

  const [loaded] = useFonts({
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  headerTitle: {
    fontFamily: 'Montserrat-Medium',
  }
});


