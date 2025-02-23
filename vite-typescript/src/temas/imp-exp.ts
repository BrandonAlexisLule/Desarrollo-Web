//importaciones y exportaciones

import heroes, { type Owner } from "../data/heroes";


export const obtenerHeroeID = (id:number) => {
    //Se le aplica el return para que retorne el id que estamos buscando del heroe
    return heroes.find(heroe => heroe.id === id) //Se retorna un objeto vacío en caso de que el valor no exista.
}

console.log(obtenerHeroeID(-2))

                //En vez de definir alguna propiedad con String, se puede definir directamente el nombre del tipado de datos.
const Owners = (owner: Owner) => {
    //Se le aplica el return para que busque el heroe mediante el índice del arreglo,
                                /*Verifica si owner es de tipo String y si lo encontró,
                                regresa el valor.**/
    return heroes.find(heroe => heroe.owner === owner) ?? {}

}

console.log(Owners("Marvel"))