import { StyleSheet } from "react-native";
import colores from "../../constantes/colores";

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		padding:5,
		paddingTop:30,
		backgroundColor: colores.primary,
		borderRadius:10,
		
	},
	overlay:{
		height:60,
		padding:0
	},
	subtitle:{
		fontWeight:'bold',
		color: colores.contrastFont,
	},
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		marginTop:20,
		
	},
	botonAgregar:{
		width:100,
		backgroundColor:colores.actionColor,
		borderRadius:10,
		color:colores.lightFont,
		height:35,
		justifyContent:'center',
		alignItems:'center'
	}

})

export default styles;