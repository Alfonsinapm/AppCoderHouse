import { StyleSheet } from "react-native";
import colores from "../../constantes/colores";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colores.primary,
		height: 170,
		width: '90%',
		padding: 5,
		marginTop:35,
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
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		marginTop:20,
		
	},
	botonVolver:{
		width:100,
		backgroundColor:colores.actionColor,
		borderRadius:10,
		color:colores.lightFont,
		height:35,
		justifyContent:'center',
		alignItems:'center',
		fontFamily: 'Montserrat-Medium',
	},
	nombreProducto:{
		color:'#E4D0D0',
		padding: 10,
		fontFamily:'Rubik-Regular',
		fontSize:15
	},
	txtVolver:{
		color:'#ACB1D6',
		fontFamily: 'Montserrat-Medium',
	}
})

export default styles;