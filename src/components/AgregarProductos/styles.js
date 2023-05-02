import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		padding:5,
		paddingTop:30,
		backgroundColor: '#F6F1F1',
		borderRadius:10,
		
	},
	overlay:{
		height:60,
		padding:0
	},
	subtitle:{
		fontWeight:'bold',
		color: "#8294C4",
	},
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		marginTop:20,
		
	},
	botonAgregar:{
		width:100,
		backgroundColor:'#DBDFEA',
		borderRadius:10,
		color:'white',
		height:35,
		justifyContent:'center',
		alignItems:'center'
	}

})

export default styles;