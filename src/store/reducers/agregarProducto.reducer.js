import { agregarProducto } from "../actions/agregarProducto.action"; 

const initial_state = {
	list: []
}

const AgregarProductoReducer = (state = initial_state, action) => {
	switch (action.type) {
		case agregarProducto:
			return { ...state, list: action.payload }
		default:
			return state;
	}
}

export default AgregarProductoReducer