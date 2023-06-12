import { Dimensions, StyleSheet } from "react-native";
import colores from "../../constantes/colores";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 5,
		backgroundColor: colores.primary,
		borderRadius: 10,
		width: '80%',
		height:'100%'
	},
	subtitle: {
		fontWeight: 'bold',
		color: colores.contrastFont,
	},
	buttonContainer: {
		flex:1,
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	botonAgregar: {
		marginTop:10,
		width: '40%',
		minWidth: 100,
		maxWidth: width / 2,
		height: '70%',
		backgroundColor: colores.actionColor,
		borderRadius: 10,
		color: colores.lightFont,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textoBtn: {
		fontSize: 18
	}, preview: {
		width: '100%',
		height: 200,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor:'white'
	},
	image: {
		width: 180,
		height: 200,
	}, containerFoto:{
		marginBottom:10
	},
	InfoContainer:{
		flex:1,
		width: '100%',
    	height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	}

})

export default styles;