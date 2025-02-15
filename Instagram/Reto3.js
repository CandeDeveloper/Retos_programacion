// En un array donde todos los numeros son duplicados, encuentra el que no. Utilizar map


function noRepeat(arr) {
    let numero = 0;
    arr.map(x => {
        if (arr.filter(y => y === x).length === 1) {
            numero = x;
        }
    });

    return numero;
}

console.log(noRepeat([1, 1, 3, 4, 4]))
