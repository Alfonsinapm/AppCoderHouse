import {createStore, combineReducers} from 'redux';
import ProductosReducer from './reducers/productos.reducer';
import CartReducer from './reducers/cart.reducer';


const RootReducer = combineReducers({
	productos: ProductosReducer,
	cart: CartReducer
})

export default createStore(RootReducer)