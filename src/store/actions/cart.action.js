import { url_api } from "../../constantes/database";

export const cart_product = 'cart_product';
export const remove_product = 'remove_product';
export const confirm_cart = 'confirm_cart'

export const cartProduct = (id)=>({
	type: cart_product,
	productId:id
})

export const remoteCartProduct = (id)=>({
	type: remove_product,
	productId:id
})

export const confirmCart = (items, total)=>{
	return async dispach =>{
		try{
			const response = await fetch(`${url_api}/ordenes.json`,{
				method:'POST',
				headers:{
					'Content-Type': 'application/json',

				},
				body:JSON.stringify({
					date: Date.now(),
					items:{...items},
					total
				})
			})
			const result = await response.json();
			console.log(result)
			dispach({
				type: confirm_cart,
				confirm:true
			})
		}catch (err){

		}
	}
}