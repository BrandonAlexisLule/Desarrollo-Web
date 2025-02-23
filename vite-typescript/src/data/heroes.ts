//En las interfaces puedes definir el tipado de datos.
export interface Hero {
    id : number,
    nombre : string,
    //Se puede tipar de manera directa o usando la palabra clave type Variable.
    owner: Owner
}
//En TS, Las interfaces, types, clases utilizan las convenciones CamelCase.

//Se exporta para que se pueda usar en otra parte del archivo.

Owner: ''

const heroes : Hero[] = [
    {
        id: 1,
        nombre: 'Zunni',
        owner: 'LalitoDC'
    },
    {
        id: 2,
        nombre: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        nombre: 'Flash',
        owner: 'DC'
    },
    {
        id: 4,
        nombre: 'Wolverine',
        owner: 'Marvel'
    },
    {
        id: 5,
        nombre: 'Yoshi',
        owner: 'Nintendo'
    },
]
                                                /*El 'as const' nos permite bloquear la modificación de un arreglo u objeto ya que es de SOLO LECTURA**/
export const owner = ['DC', 'Marvel', 'LalitoDC'] as const



//Exporta todo el objeto
export default heroes

export const saludar = () => {
    return 'Como estas'
}