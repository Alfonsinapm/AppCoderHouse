import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:5,
		alignItems:'center',
		paddingTop:20,
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
		width:'40%',
		minWidth:85,
		maxWidth: width/2,
		height:'90%',
		backgroundColor:'#FFEAD2',
		borderRadius:10,
		color:'white',
		justifyContent:'center',
		alignItems:'center',
		padding:'4%',
		fontSize:15
	},
	textoBorrar:{
		fontSize:18,
	},
	botonDetalle:{
		width:'40%',
		minWidth:85,
		maxWidth: width/2,
		height:'90%',
		backgroundColor:'#FFEAD2',
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
	},
	botonAgregar:{
		width:'40%',
		minWidth:100,
		maxWidth: width/2,
		height:'80%',
		backgroundColor:'#DBDFEA',
		borderRadius:10,
		color:'white',
		justifyContent:'center',
		alignItems:'center'
	},
	containerCard:{
		width:'90%',
		padding:20,
		alignItems:'center',
		borderRadius:10,
		backgroundColor:'#DBDFEA',
		marginTop:30,
		marginLeft:15
	},
	Msg:{
		fontWeight:'bold',
		color: "#8294C4",
		marginTop:20
	},

})

export default styles;