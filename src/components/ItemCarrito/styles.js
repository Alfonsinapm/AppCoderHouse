import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	header: {
		fontSize:18
	  },
	  item: {
		flex: 1,
		padding: 8,
		borderBottomWidth:1,
		borderBottomColor:'#ccc'
	  },
	  detail:{
		flex:1,
		flexDirection:'row',
		flexWrap:'wrap',
		alignItems:'center',
		justifyContent:'space-between'
	  }
})

export default styles;