import { selected_product } from "../actions/producto.action";

const initialState = {
	productos: [],
	selected: null
}

const ProductosReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case selected_product:
			return {
				...state,
				selected: state.productos.find(
				  product => product.id === action.productId
				),
			  };
		default:
			return state;
	}
}

export default ProductosReducer;