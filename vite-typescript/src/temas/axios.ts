import axios from "axios";
import { GIFResponse } from '../interfaces/gif.response'

const apiKey = 'Kqxt3rGJgSZsHSlFRK0okRTukJecAshD'

//Creamos una variable que va a llamar a la librería de axios para mandar llamar al método create
const giphyApi = axios.create({

    //llamamos a dos de sus propiedades: baseURL y params
    baseURL: 'https://api.giphy.com/v1/gifs/random?api_key=Kqxt3rGJgSZsHSlFRK0okRTukJecAshD',
    params:{
        //propiedad api_Key que va a seguir siendo la API 
        api_Key: apiKey
    }
})

        //Va a obtener data de GifResponse
giphyApi
    //La variable giphyApi va a obtener toda la data de GIFResponse.
    .get<GIFResponse>('')

    //Si la obtiene, en consola le vamos diciendo que data queremos que se muestre, y como toda la data se le arregló el tipo de dato siendo <any>, ahora la data se le puede observar qué tipo de dato es
    .then(resp => console.log( resp.data.data.images.fixed_height.url))
    .catch((err) => console.log(err))