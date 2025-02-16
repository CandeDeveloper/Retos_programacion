/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


// Anotaciones

// El primer condicional tiene que ser el conjunto de condiciones, ya que si el numero es multiplo de 3 nos va retornar fizz y nunca va a llegar al condicional doble

function imprimir() {

    for (let index = 1; index <= 100; index++) {

        if (index % 3 === 0 && index % 5 === 0) {
            console.log("fizzbuzz")
        } else if (index % 5 === 0) {
            console.log("buzz")
        } else if (index % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(index)
        }

    }

}

imprimir()
