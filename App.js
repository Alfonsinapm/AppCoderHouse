import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Header } from './src/components';
import { Home, Details } from './src/screens';
import { useState } from 'react';
import {useFonts} from 'expo-font';

export default function App() {
  const [itemDetails, setItemDetails] = useState({});
  const [renderDetails, setRenderDetails] = useState(false);

  const [loaded] = useFonts({
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf')
  })
  const handleScreenSwitch = (item)=>{
    setItemDetails(item);
  };

  const onSwitch = ()=>{
    setRenderDetails(!renderDetails);
  }

  let content = renderDetails && <Details item={itemDetails} goBack={onSwitch}/>

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={'Compras'} newStyles={styles.headerTitle}/>
      {content}
      {!renderDetails &&<Home onRender={handleScreenSwitch} triggerSwitch={onSwitch}></Home>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  headerTitle:{
    fontFamily: 'Montserrat-Medium',
  }
});


