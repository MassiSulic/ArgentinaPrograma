/* 1) Crea un array que contenga el nombre de cinco colores escritos como strings. */

let colores = ["Rojo", "Amarillo", "Verde", "Azul", "Morado"];

/* 2) Guarda en una variable el tercer elemento del array del ejercicio anterior. */

let color3 = colores[2];

/* 3) Accede desde un console.log( ) a la posición 0 del string de la posición 0 del array del ejercicio 1. */

console.log(colores[0][0])

/* 4) Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random( ). */

console.log(Math.floor(Math.random() * 99) + 1);

/* 5) Rellena un array con los números del 1 al 10. Muéstralo por la consola. */

let unoADiez = []

for(var i = 1; i <= 10; i++) {
    unoADiez.push(i)
}

console.log(unoADiez)

/* 6) Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola. */

let unoADiezAleatorio = []

for(var i = 1; i <= 10; i++) {
    let aleatorio = Math.floor(Math.random() * 99) + 1;
    unoADiezAleatorio.push(aleatorio)
}

console.log(unoADiezAleatorio)

/* 7) Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola. */

let mostrarPorConsola = unoADiezAleatorio

for (let i = 0; i < mostrarPorConsola.length; i++) {
  console.log(mostrarPorConsola[i]);
}

/* 8) Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio. */

let cadenas = [];

while (true) {
    let cadena = prompt("ingresa texto. Para salir escribe (cancelar): ");

    cadenas.push(cadena)

    if (cadena === "cancelar") {
        cadenas.pop()
        break
    }
}

console.log(cadenas.join("-"))

/* A partir de este punto El resto de los scripts estaran en el archivo Clase5Scripts y el index.html */
