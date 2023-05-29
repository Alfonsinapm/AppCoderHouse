import { productos } from "../../data/productos";
import { cart_product, remove_product } from "../actions/cart.action";

const initialState = {
	productos: [],

}

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cart_product:
			let prod = productos.find(product => product.id === action.productId)
			return {
				...state,
				productos: [...state.productos, prod]
			};
			case remove_product:
			let prods = state.productos.filter(product => product.id !== action.productId)
			return {
				...state,
				productos: prods
			};
		default:
			return state;
	}
}

export default CartReducer;