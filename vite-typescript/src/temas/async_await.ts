import { GIFResponse } from '../interfaces/gif.response'
import {giphyApi} from './axios'

//aysnc y await permiten trabajar con promesas y respuestas de espera. 

//Si le quitamos la palabra reservada async nos va a marcar error porque ya no es una funcion asícrona
export const obtenerImagen = async () => {
    try {
        const respuesta = await giphyApi.get<GIFResponse>('/random')
        return respuesta.data.data.images.downsized.url
    } catch (error) {
        //usamos throw para imprimir en formato rojo UNCAUGHT
        //Sirve para atrapar los errores que se generan
        throw 'URL no encontrado'
    }
}



//Si obtengo la respuesta, 
obtenerImagen()
    .then((url) => console.log({url}))
    .catch((err) => console.log(err))




/**Async Await */

//Se debe poner la palabra async para que el navegador sepa que vamos a trabajar con promesas fuera de la función.