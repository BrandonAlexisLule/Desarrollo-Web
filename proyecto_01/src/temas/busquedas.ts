/**
 * 
 * @returns 
 * 1. Consumir JSON: mostrar la data obtenida en consola.
 * 2. Busqueda por CATEGORIA: Buscar la categoría correspondiente e imprimir los alimentos de esa categoría.
 * 3. Busqueda por PALABRA: Buscar la palabra y que se muestre zresultados que contengan esa misma palabra.
 
 */

import axios from "axios"
import { Smaejson } from "../interfaces/smae"

/**
 * Esta función es asícrona ya que la data recibida no se debe proczesar al instante.
 * @params async : función asíncrona que envia solicitud para consumir un archivo Json.
 * @params await : es requerido por la función asíncrona 'async' que se utiliza para evitar que la información tenga su tiempo para procesarse.
 */
const ejecutarJSON = async () => {
    try {
        const respuesta = await axios.get<Smaejson[]>('../data/smae.json')
        const dataJson = respuesta.data
        const keyValue: object[] = []
        dataJson.forEach((i) => {
            const alimento = i.Categoría
            keyValue.push({alimento})
            console.log({alimento})
        })
    } catch (error) {
        throw 'Error'
    }

}

/**
 * Esta función regresa por consola los alimentos encontrados de la categoría solicitada.
 * Hice una función Alimentos por Categoría que va a recorrer el
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
            const alimentosFiltrados = alimentosPorCategoria('Verduras', dataJson)
            propValor.push({alimentosFiltrados})
            console.log(alimentosFiltrados)
        } catch (error) {  
            throw '404. Not Found. La data no se pudo cargar'
        }
    }
    mostrarAlimentosPorCategoria()
}

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


