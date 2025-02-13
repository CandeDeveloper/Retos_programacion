// Escribe una función que tome un texto y lo devuelva al reves

function textoReves(palabra) {
    return palabra.split('').reverse().join('')
}

console.log(textoReves("Julieta"))