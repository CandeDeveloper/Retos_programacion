
// 5 numeros entran por parametro, la suma tiene que ser solo de 4 numeros y debe devolver la suma con más pequeña y la más alta en una misma ByteLengthQueuingStrategy, primero la más pequela y luego la más alta.

function miniMaxSum(arr) {
    let sumaMin = 0
    let sumaMax = 0

    arr = arr.sort((a, b) => a - b)

    for (let i = 0; i < 4; i++) {
       sumaMin = arr[i] + sumaMin ;
    }

    for (let i = 1; i < 5; i++) {
         sumaMax = arr[i] + sumaMax ;
    }

   return console.log(sumaMin,sumaMax )
}



miniMaxSum([1, 3, 5, 7, 9])
