// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Ejemplo de entrada : const carta = 'bici coche balón _playstation bici coche peluche'
// Al ejecutar el método debería devolver lo siguiente:

// const regalos = listGifts(carta)

// console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

function listGifts(carta) {
    let cartaFiltrada = []
    carta = carta.split(' ')

    carta.map((x) => {
        if (x !== '') {
            cartaFiltrada.push({ x })
        }
    })

    return cartaFiltrada

}

const carta = 'bici  coche balón  _playstation bici'
// listGifts(carta)

console.log(listGifts(carta))



