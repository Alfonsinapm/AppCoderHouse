import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex:1,
		padding:12,
		backgroundColor:'#fff'
	  },
	  list: {
		flex: 2,
	  },
	  confirm:{
		backgroundColor:'#ccc',
		borderRadius:10,
		padding:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	  },
	  priceText:{
		fontSize:18
	  }
})

export default styles;