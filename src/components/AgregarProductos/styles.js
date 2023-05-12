import { Dimensions, StyleSheet } from "react-native";
import colores from "../../constantes/colores";

const { width, height } = Dimensions.get('window')

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
		height:50,
		justifyContent:'space-evenly',
		marginTop:20,
		
	},
	botonAgregar:{
		width:'40%',
		minWidth:100,
		maxWidth: width/2,
		height:'70%',
		backgroundColor:colores.actionColor,
		borderRadius:10,
		color:colores.lightFont,
		justifyContent:'center',
		alignItems:'center'
	},
	textoBtn:{
		fontSize:18
	}

})

export default styles;