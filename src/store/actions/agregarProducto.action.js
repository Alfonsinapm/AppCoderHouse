export const agregar_foto = 'agregar_foto';
import * as FileSystem from 'expo-file-system'

export const agregarFoto = (image)=>{
	const fileName = image?.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName

	return async dispach =>{
		try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
			dispach({
				type: agregar_foto,
				image:Path
			})
			
        } catch (error) {
            console.log(error)
        }
	}
}
