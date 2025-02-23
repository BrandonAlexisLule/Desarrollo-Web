//El type es para tipos de datos como en este caso GIFResponse 
import type { GIFResponse } from '../interfaces/gif.response'

/**
 * EndPoints: Son servidores que hacen una petición HTTP
 * GET:
 * POST:
 * PUT: Sirve para ACTUALIZAR DATOS
 * 
 * @override apiKey es la llave para autorizar acceso a la data de la api
 */

const apiKey = 'Kqxt3rGJgSZsHSlFRK0okRTukJecAshD'

//Copiamos URL de la página GYPHY en la sección Get GIF ID BY ENDPOINT


/**Fetch: Hace una solicitud a un recurso de internet. Y Regresa una promesa que resuelve el objeto response que es el que representa a la respuesta de la solicitud solicitada. */

//Debemos poner `` para llamar a la variable 'apiKey' junto con el símbolo de dólar
//La función Fetch realiza una solicitud al sitio de Giphy.
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

 //.then: Si recibe la respuesta(response), la va a regresar en formato JSON.
 .then((resp) => resp.json())   

 //Si el body recibe la data de GifResponse, entonces en la consola, va a imprimir lo que el usuario quiera buscar, en este caso, como ejemplo, una URL.
 .then((body : GIFResponse) => console.log(body.data.images.fixed_width.url))

 //En caso contrario, va a arrojar un error.
 .catch((err) => console.log(err))

 