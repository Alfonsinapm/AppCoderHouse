
// import { StyleSheet, View } from "react-native";
// import Header from "./src/components/Header";
// import MainPage from "./src/screens/MainPage";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header title={"Adivina el numero"} />
//       <StartGame />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

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
    justifyContent: 'start',
  },
});


