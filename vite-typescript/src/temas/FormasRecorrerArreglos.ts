/**Ejemplo 01. Vengadores */

let prefijos = ['wonder', 'spider', 'ant', 'iron']
let hombre = 'man'
let mujer = 'woman'

const nombreHeroe = prefijos.map((prefijo, indice) => {
    return (indice == 0) ? prefijo + mujer : prefijo + hombre
})
console.log(nombreHeroe)

