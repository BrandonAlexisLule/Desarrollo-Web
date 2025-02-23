const personajes = ['Gato con botas', 'Lulú', ' Sherk', 'Zunni']

//Las letras representan las posiciones de los elementos empezando de cero hasta n
const [, , , ,z = 'Rafita'] = personajes


/*Si mezclamos el array, no se va a poder minúscula, con solo los tipos de 
datos string, **/
const regresarArray = ():(string|number)[] => {
    return [1234,'ABCD']
}

const [numeros, letras] = regresarArray()  
console.log(numeros, letras)