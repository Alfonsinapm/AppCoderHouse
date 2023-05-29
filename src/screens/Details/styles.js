import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
import colores from "../../constantes/colores";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colores.primary,
		flex: 1,
		flexDirection: "row",
		maxHeight: '30%',
		width: '90%',
		padding: 5,
		marginTop: 35,
		marginLeft: 20,
		marginBottom: 10,
		borderRadius: 10,

	},
	title: {
		color: "white",
		fontSize: 18,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,

	},
	InfoContainer: {
		flex: 1,
		width: '100%',
		height: 100
	},
	nombreProducto: {
		color: '#E4D0D0',
		padding: 10,
		fontFamily: 'Rubik-Regular',
		fontSize: 15
	},
	imageContainer: {
		height: 120
	},
	image: {
		width: 100,
		height: 100,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		margin: 10
	},
	btnComprar: {
		width: '40%',
		minWidth: 100,
		maxWidth: width / 2,
		height: '40%',
		backgroundColor: colores.actionColor,
		borderRadius: 10,
		color: colores.lightFont,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textoBtn: {
		fontSize: 18
	}
})

export default styles;