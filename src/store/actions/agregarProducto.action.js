import { url_api } from "../../constantes/database";

export const agregar_producto = 'agregar_producto';
export const remove_product = 'remove_product';

export const removeCartProduct = (id)=>({
	type: remove_product,
	productId:id
})

export const agregarProducto = (prod, image)=>{
	const fileName = image?.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName
        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error)
        }
	return async dispach =>{
		try{
			const response = await fetch(`${url_api}/productos.json`,{
				method:'POST',
				headers:{
					'Content-Type': 'application/json',
				},
				body:JSON.stringify({
					...prod, imgUrl:Path
				})
			})
			const result = await response.json();
			console.log(result)
			dispach({
				type: agregar_producto,
				confirm:true
			})
		}catch (err){
			console.log(error)
		}
	}
}

export const ADD_PLACE = 'ADD_PLACE'
import * as FileSystem from 'expo-file-system'

export const addPlace = (title, image) => {
    // return { type: ADD_PLACE, payload: {title}}
    return async dispatch =>{
        
        dispatch({type: ADD_PLACE, payload: {title}, image:Path})
    }
}