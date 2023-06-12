import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		
		padding:5,
		alignItems:'center',
		paddingTop:20,
		justifyContent:'center',
	},
	subtitle:{
		fontWeight:'bold',
		color: "#8294C4",
	},
	Box:{
		height:180,
		width:300,
	},
	ScrollContainer:{
		margin:15,
		width:'100%'
	},
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		marginTop:20,
		
	},
	botonBorrar:{
		width:100,
		backgroundColor:'#FFEAD2',
		borderRadius:10,
		color:'white',
		height:35,
		justifyContent:'center',
		alignItems:'center'
	},
	botonAgregar:{
		width:100,
		backgroundColor:'#DBDFEA',
		borderRadius:10,
		color:'white',
		height:35,
		justifyContent:'center',
		alignItems:'center'
	},
	containerCard:{
		width:300,
		maxWidth:'80%',
		padding:20,
		alignItems:'center',
		borderRadius:10,
		backgroundColor:'#DBDFEA',
		marginTop:30
		
	},image: {
		width:50,
		height:50,

	}

})

export default styles;