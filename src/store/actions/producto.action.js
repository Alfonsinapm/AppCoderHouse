export const selected_product = 'selected_product';


export const selectedProduct = (id)=>({
	type: selected_product,
	productId:id
})