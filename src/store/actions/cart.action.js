export const cart_product = 'cart_product';
export const remove_product = 'remove_product';

export const cartProduct = (id)=>({
	type: cart_product,
	productId:id
})

export const remoteCartProduct = (id)=>({
	type: remove_product,
	productId:id
})