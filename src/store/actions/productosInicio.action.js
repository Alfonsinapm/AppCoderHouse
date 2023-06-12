import { url_api } from "../../constantes/database";

export const GET_PRODUCTOS_INICIO = 'GET_PRODUCTOS_INICIO'

export const getProductosInicio = () => {
	return async dispatch => {
	  try {
		const response = await fetch(`${url_api}/productos.json`, {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		});
		const result = await response.json();
		
		const productos = Object.keys(result).map(key => ({
		  ...result[key],
		  id: key,
		}));
		// console.log('action')
		// console.log(productos);
		dispatch({ type: GET_PRODUCTOS_INICIO, payload: productos });
	  } catch (error) {
		console.log(error);
	  }
	};
  };