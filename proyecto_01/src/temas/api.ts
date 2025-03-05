import axios from "axios"
import { Smaejson } from "../interfaces/smae"

const consumirJson = async () => {
    try {
        const respuesta = await axios.get<Smaejson[]>('../data/smae.json')
        console.log(respuesta)
        const dataJson = respuesta.data
        const keyValue: object[] = []
        dataJson.forEach((i) => {
            const alimento = i.Alimento
            keyValue.push({alimento})
            console.log({alimento})
        })

        //fetch que regrese los alimentos por cada categoria
        console.log(dataJson)
     
    } catch (error) {
        throw 'Error'
    }
}


consumirJson()
