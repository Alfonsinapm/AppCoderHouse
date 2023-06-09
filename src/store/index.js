import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProductosReducer from './reducers/productos.reducer';
import CartReducer from './reducers/cart.reducer';
import thunk from 'redux-thunk';
import OrdersReducer from './reducers/orders.reducer';
import AuthReducer from './reducers/auth.reducer';
import AgregarProductoReducer from './reducers/agregarProducto.reducer';

const RootReducer = combineReducers({
	productos: ProductosReducer,
	cart: CartReducer,
	orders: OrdersReducer,
	auth: AuthReducer,
	
	agregarProducto: AgregarProductoReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))