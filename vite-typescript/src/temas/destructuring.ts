
//Se crea el objeto persona2

//Para los nombres de las interfaces, se utiliza CamelCase
interface Heroe {
    nombre: string,
    edad: number,
    apodo: string
    superpoder: string
}

const persona : Heroe = {
    nombre:'Brandon',
    edad: 20,
    apodo: 'Brandonsillo',
    superpoder: 'Volar'
}

//Las interfaces modulan las partes escenciales de un objeto
interface NuevoHeroe {
    nombre: string,
    edad: number,
    apodo: string
    superpoder?: string 
}

//Se escribe con ({}) para regresar 
const nuevoHeroe = ({nombre, edad, apodo, superpoder}: NuevoHeroe) => ({
    id: 1234,
    nombre: nombre,
    edad: edad,
    apodo: apodo,
    //función ternaria que si es verdadero, hace esto
    superpoder: superpoder ?? 'No tienes poderes'
})


                        //Al objeto nuevoHeroe le copiamos todas las propiedades y le agregamos otro poder a la persona.
console.log(nuevoHeroe({...persona, superpoder: 'Correr'}))

/**De esta forma se puede acceder a las propiedades del objeto */
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.apodo)

/** */

//Segunda forma de acceder a las propiedades
// console.log(persona["nombre"])

//Forma #3
// console.log({
//     nombre: persona.nombre,
//     edad: persona.edad
// })

//Destructuring

const {nombre, edad, apodo, superpoder = 'Volar'} = persona


//Va a imprimir las propiedades y los valores del objeto
console.log({nombre, edad, apodo, superpoder})
console.log('Este es un nuevo mensaje')






