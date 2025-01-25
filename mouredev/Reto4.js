/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


function primos() {

    let primosN = []

    for (let i = 2; i <= 100; i++) {

        if (i % 2 !== 0 || i === 2)
            primosN.push(i)
    }

    console.log(primosN)

}

primos()


