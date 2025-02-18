// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

function contarOvejas(ovejas) {

  let ovejasFiltradas = []
  ovejas.map((oveja) => {
    if ((oveja.color) === "rojo" && (oveja.name).toLowerCase().includes("a") && (oveja.name).toLowerCase().includes("n")) {
      ovejasFiltradas.push(oveja)
    }
  })
  return ovejasFiltradas
}


console.log(contarOvejas([
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]))