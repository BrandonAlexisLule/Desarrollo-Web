import { Hero } from "../data/heroes"


console.log('inició el semestre')

// new Promise( (resolve, reject) => { 
    
//     //El Timeout sirve para darle tiempo a la promesa a que responda a la solicitud.
//     setTimeout(() => {
//         resolve('Mis estudiantes cumplieron')
//         reject('Mis estudiantes, no cumplieron')

//     }, 1000) //la promesa tiene un tiempo de resolución

//     //Si la promesa se cumple
// })

// .then( (mensaje) => console.log(mensaje))
// .catch((errorMensaje) => console.log(errorMensaje))
// .finally (() => {
//     console.log('Finalizó la promesa ...')
// })

const obtenerHeroesID = (id:number):Promise<Hero> => {

    //Se va a regresar una nueva promesa que va a regresar 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //Va y busca el 
            const heroe = obtenerHeroesID(id)
            if(heroe){
                //Va a resolver y va a imprimir el heroe
                resolve(heroe)
            }else{

                reject('Heroe no encontrado')
            }

        }, 1500)
    })

}

obtenerHeroesID(2)
    .then(heroe => console.log('El nombre es:', heroe.nombre))
    .catch((errorMensaje) => console.log(errorMensaje))


