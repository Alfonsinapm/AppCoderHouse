import { productos } from "../../data/productos";
import { cart_product, remove_product, confirm_cart } from "../actions/cart.action";

const initialState = {
	productos: [],
	total: 0
}

const sumTotal = list => {
	//console.log(list)
	if(list.length>0){
		return list
	  .map(item => item.cantidad * item.price)
	  .reduce((a, b) => a + b, 0);
	}
  };

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cart_product:

			let prod = productos.find(product => product.id === action.productId);
			let prodsAdd = [...state.productos].map(item => {
				if (item.id === prod.id) {
					item.cantidad+=1
					return item
				} 
			});
			return {
				...state,
				productos: [...state.productos, prod],
				total: sumTotal(prodsAdd)
			};
		case remove_product:
			let prods = state.productos.filter(product => product.id !== action.productId)
			return {
				...state,
				productos: prods,
				total: sumTotal(prods)
			};
		case confirm_cart:
			return state;
		default:
			return state;
	}
}

export default CartReducer;