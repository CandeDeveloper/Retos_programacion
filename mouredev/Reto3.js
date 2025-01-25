/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */



// let lista = []
// lista.push(1)
// lista.push(6)
// lista.push(8)

// const elemento = lista[1]; // Índice 1
// console.log(elemento); // 20


function Fibonacci() {
    let lista = [0,1]
    
    for (let i = 2; i <= 50; i++) {  
       num = lista[i-1] + lista[i-2]
       lista.push(num)
    }
    console.log(lista)
}

Fibonacci()