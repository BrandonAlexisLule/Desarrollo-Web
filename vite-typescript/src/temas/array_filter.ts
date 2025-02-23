/**Ejemplos básicos */

//Ejemplo 1: Mostrar las palabras que sólo tengan más de 7 caracteres.

/**
const palabras = ['Banorte', 'Citibanamex', 'BBVA Bancomer', 'Banregio', 'BanBajío' ]

const listaModificada = palabras.filter((palabra) => palabra.length > 7)

console.log(listaModificada) */

//Ejemplo 2

const numEsGrande = (value: number) => {
    return value >= 10
}

const filtrado = [12, 5, 8, 130, 44].filter(numEsGrande)
console.log(filtrado)