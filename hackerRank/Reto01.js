function plusMinus(arr) {
    let n = 0
    let p = 0
    let z = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            p = p + 1
        } else if (arr[i] === 0) {
            z = z + 1
        } else {
            n = n + 1
        }
        
    }

    n = (n / arr.length).toFixed(6)
    p = (p / arr.length).toFixed(6)
    z = (z / arr.length).toFixed(6)

    console.log("Numeros positivos " + p)
    console.log("Numeros negativos " + n)
    console.log("Numeros ceros " + z)

}

plusMinus([9, 3, 4, 3, 0, 0, -2, -3])
