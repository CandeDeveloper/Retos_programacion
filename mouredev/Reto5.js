/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaP(poligono, base, altura) {

    poligono = poligono.toLowerCase()

    switch (poligono) {
        case "rectángulo":
            return console.log("El area del Rectángulo es " + base * altura);

        case "triángulo":
            return console.log("El area del Triángulo es " + (base * altura) / 2);

        case "cuadrado":
            return console.log("El area del Cuadrado es " + altura * altura);

        default:
            console.log("El poligono que intenta ingresar no es válido")
            break;
    }

}

areaP("cuadrado", 2, 2)
areaP("triángulo", 2, 2)
areaP("rectángulo", 2, 2)
areaP("amarillo", 2, 2)