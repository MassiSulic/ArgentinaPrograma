// 1) Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. Tiene que crear la lista uno mismo.

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers)

// 2) a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

// const array = [1, 2, 3, 4, 5, 6];

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

array.forEach(function (element) {
    console.log(element);
});

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

array.forEach(function (element) {
    console.log(element + 1);
});

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.

const newArray = array.map(function (element) {
    return element + 1;
});

console.log(newArray, array)

// f. Calcular el promedio

const sum = array.reduce(function (total, number) {
    return total + number;
}, 0);
const average = sum / array.length;

console.log("El promedio es:", average);

// 3) Dado un array de numeros, mostrar como quedaria si cada uno de los numeros es elevado al cuadrado.

const numbers = [1, 2, 3, 4, 5];

const numerosElevados = numbers.map(function (number) {
    return Math.pow(number, 2);
});

console.log("El nuevo array es:", numerosElevados);

// 4) Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

const number = [1, -4, 12, 0, -3, 29, -150];

const suma = number.reduce(function (total, number) {
    return number > 0 ? total + number : total;
}, 0);

console.log("La suma de los números positivos es:", suma);

// 5) a. Obtener aquellos nombres con al menos 6 letras.

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

const nombresCon6Letras = nombres.filter(function (nombre) {
    return nombre.length >= 6;
});

console.log("Los nombres con al menos 6 letras son:", nombresCon6Letras);

// b. Obtener los nombres que comienzan con "M".

const nombresConM = nombres.filter(function (nombre) {
    return nombre.charAt(0) === "M";
});

console.log("Los nombres que comienzan con 'M' son:", nombresConM);

// c. Ordenar alfabéticamente y mostrar por consola.

nombres.sort();

console.log("Los nombres ordenados alfabéticamente son:", nombres);

// d. Generar un array que contenga solo las iniciales.

const iniciales = nombres.map(function (nombre) {
    return nombre.charAt(0);
});

console.log("Las iniciales de los nombres son:", iniciales);

// e. Generar un array que contenga todos los nombres en mayúscula.

const nombresMayuscula = nombres.map(function (nombre) {
    return nombre.toUpperCase();
});

console.log("Los nombres en mayúscula son:", nombresMayuscula);

// f. Queremos saber si alguno de estos nombres comienza con "J”

const resultado = nombres.some(function (nombre) {
    return nombre.charAt(0) === "J";
});

if (resultado) {
    console.log("Al menos un nombre empieza con la letra 'J'");
} else {
    console.log("Resultado no encontrado");
};

// 6) Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let comprobar = prompt("introduce un color...")

const found = colores.find(function (colores) {
    return colores == comprobar;
});

console.log("El color", found, "Si existe");

// 7) Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares

function numerosPares(arreglo) {
    const pares = arreglo.filter(function (numero) {
        return numero % 2 === 0;
    });
    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numerosPares(numeros);
console.log(pares);

// 8) Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.

function palabrasVocales(arreglo) {
    const vocales = arreglo.filter(function (palabra) {
        return /^[aeiou]/i.test(palabra);
    });
    return vocales;
}

const palabras = ["elefante", "manzana", "iglesia", "barco", "auto", "ojo", "azul"];
const vocales = palabrasVocales(palabras);
console.log(vocales);

// 9) Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices.

function intercambiarElementos(arr, indice1, indice2) {
    let temp = arr[indice1];
    arr[indice1] = arr[indice2];
    arr[indice2] = temp;
    return arr;
}

let arr = [1, 2, 3, 4, 5];
intercambiarElementos(arr, 1, 3);
