import { agregarFoto } from "../actions/agregarProducto.action"; 

const initial_state = {
	image: null
}

const AgregarProductoReducer = (state = initial_state, action) => {

	switch (action.type) {
		case agregarFoto:
			return { ...state, image: action }
		default:
			return state;
	}
}

export default AgregarProductoReducer