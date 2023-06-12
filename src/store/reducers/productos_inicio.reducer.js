
import { GET_PRODUCTOS_INICIO } from "../actions/productosInicio.action";

const initial_state = {
	list: []
}

const ProductosInicioReducer = (state = initial_state, action) => {
	// console.log('action.list')
	// console.log(action.list)
	switch (action.type) {
		case GET_PRODUCTOS_INICIO:
			return { ...state, list: action.payload }
		default:
			return state;
	}
}

export default ProductosInicioReducer