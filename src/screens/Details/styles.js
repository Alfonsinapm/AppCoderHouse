import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
import colores from "../../constantes/colores";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colores.primary,
		height: 170,
		width: '90%',
		padding: 5,
		marginTop:35,
		marginLeft:20,
		borderRadius:10
	  },
	  title: {
		color: "white",
		fontSize: 22,
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:10
	  },
	  buttonContainer:{
		flex: 1,
    	alignItems: 'center',
		justifyContent:'center',
		width:'100%',
		marginTop:20,
		
	},
	botonVolver:{
		width:'40%',
		minWidth:85,
		maxWidth: width/2,
		height:'30%',
		marginTop:20,
		backgroundColor:'#FFEAD2',
		borderRadius:10,
		marginLeft:100,
		fontFamily: 'Montserrat-Medium',
	},
	nombreProducto:{
		color:'#E4D0D0',
		padding: 10,
		fontFamily:'Rubik-Regular',
		fontSize:15
	},
	txtVolver:{
		fontSize:18,
		fontFamily: 'Montserrat-Medium',
	}
})

export default styles;