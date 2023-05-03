import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Header } from './src/components';
import { Home } from './src/screens';

export default function App() {


  return (
    <View style={styles.container}>
      <Header title={'Compras'}/>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});


