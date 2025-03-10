import axios from "axios"
import { Smaejson } from "../interfaces/smae"

/**
 * This function is asynchronous since the data received must not be processed instantly. It receives the food data and prints it by console.
 * @param async asynchronous function that sends request to consume a Json file.
 * @param await is required by the asynchronous function 'async' which is used so that the data has time to process.
 * 
 * @function executeJSON receives a trycatch that looks for the json food data via the path and if received, saves it.
 * Convert the data array to an object, so that it is displayed as an object, i.e. 'key: value'.
 * We go through with a foreach and we are stacking it so that at the end they are shown by the console.
 */
const ejecutarJSON = async () => {
    try {
        const respuesta = await axios.get<Smaejson[]>('../data/smae.json')
        const dataJson = respuesta.data
        const keyValue: object[] = []
        dataJson.forEach((alimento) => {
            const alimentos = alimento.Alimento
            keyValue.push({alimentos})
            console.log({alimentos})
        })
    } catch (error) {
        throw 'Error'
    }

}

/**
 * @function busquedaPorCategoria The first one goes through the whole data array and the second function receives the data, looks for the available category that the user can indicate and prints the data.
 * 
 * 
 * @function alimentosPorCategoria returns the searched category and it is independent if it was searched with a combination of uppercase or lowercase since the function is told to search in lowercase for the word.
 * @method filter searches for the category of type Category and if found returns it.
 * 
 * 
 * @function mostrarAlimentosPorCategoria tries (it receives a trycatch) to obtain the array data from the smae.json file to convert it into a 'key: value' object. Subsequently, it saves the category that the user must indicate in foodFiltered and within the Category it looks for the food, adds them to the end of the list and finally prints them.
 */
const busquedaPorCategoria = async () => {
    const alimentosPorCategoria = (encontrada: string, dataJson: Smaejson[]) => {
        return dataJson.filter(cat => cat.Categoría.toLowerCase() === encontrada.toLowerCase())
    }

    const mostrarAlimentosPorCategoria = async () =>{
        try {
            const respuesta = await axios.get<Smaejson[]>('../data/smae.json')
            const dataJson = respuesta.data
            const propValor: object[] = []
            const alimentosFiltrados = alimentosPorCategoria('Frutas', dataJson)
            propValor.push({alimentosFiltrados})
            console.log(alimentosFiltrados)
        } catch (error) {  
            throw '404. Not Found. La data no se pudo cargar'
        }
    }
    mostrarAlimentosPorCategoria()
}


/**
 * This function performs a word search, i.e. all characters that match will be printed on the screen.
 * It has two subfunctions:
 * @function buscarCoincidencias returns all words found in both category and food within the array of food and category data if such a match exists.
 * @method filter searches for words that are included in all matches.
 * 
 * 
 * @function coincidenciasEncontradas receives the data from smae.json to collect all the words that were found by matching the user's input to typescript.
 * The found words are saved and searched for in the json file data.
 * @param palabras The user tells typescript the match and it internally looks up the words that were found with that match.
 */
const busquedaPorPalabra = async () => {
    const buscarCoincidencias = (palabra:string, dataJson:Smaejson) => {
        return dataJson.filter(coincidencia =>
            coincidencia.Alimento.toLowerCase().includes(palabra.toLowerCase())||
            coincidencia.Categoría.toLowerCase().includes(palabra.toLowerCase())
        )
    }

    const coincidenciasEncontradas = async (palabra:string) => {
        try {
            const respuesta = await axios.get<Smaejson>('../data/smae.json')
            const dataJson = respuesta.data
            const palabrasEncontradas = buscarCoincidencias(palabra, dataJson)
            console.log(palabrasEncontradas)
           
        } catch (error) {
            throw 'Data is not found'
        }
        
    }
    const palabras = 'Ceb'
    coincidenciasEncontradas(palabras)
    
}




ejecutarJSON()
busquedaPorCategoria()
busquedaPorPalabra()


