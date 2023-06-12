import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
		height:'100%',
		padding:5,
		alignItems:'center',
		paddingTop:20,
		borderColor:'black'
	},
	subtitle:{
		fontWeight:'bold',
		color: "#8294C4",
	},
	Box:{
		height:180,
		width:300,
	},
	
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		marginTop:10,
		
	},
	botonBorrar:{
		width:'40%',
		minWidth:20,
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
		height:'60%',
		backgroundColor:'#FFEAD2',
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
	},
	botonAgregar:{
		width:'40%',
		minWidth:100,
		maxWidth: width/2,
		height:'50%',
		backgroundColor:'#DBDFEA',
		borderRadius:10,
		color:'white',
		justifyContent:'center',
		alignItems:'center'
	},
	containerCard:{
		flex:1,
		width:'90%',
		padding:20,
		alignItems:'center',
		borderRadius:10,
		backgroundColor:'#DBDFEA',
		marginLeft:20,
		height:100,
		justifyContent:'center',
	},
	Msg:{
		fontWeight:'bold',
		color: "#8294C4",
		marginTop:20
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
		width:70,
		height:70,

	}, ScrollContainer:{
		marginLeft:40,
	}

})

export default styles;