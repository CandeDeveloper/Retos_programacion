// que es un palindromo? una palabra que se escribe igual del derecho o del reves

function palindromo(palabra) {
let palabra2 = palabra.split('').reverse().join('')
    if (palabra === palabra2){
        return true
    }
    return false
}
console.log(palindromo("radar radar"))