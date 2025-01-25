/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */



function anagrama(palabra, palabra2) {
    if (palabra === palabra2 || palabra.length !== palabra2.length) {
        return console.log(false);
    }

    let letrasA = palabra.split('').sort().join('');
    let letrasB = palabra2.split('').sort().join('');

    return console.log(letrasA === letrasB);
}

anagrama("llora", "lorla");

