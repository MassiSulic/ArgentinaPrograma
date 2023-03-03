/* 1) Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el usuario 
o declarado anteriormente en su código y mostrar por consola el tipo de dato que es. */

function tipoDeDato(dato) {
    console.log(typeof(dato));
}

tipoDeDato(12)

/* Dado dos números ingresados por el usuario, se pide realizar una función que devuelve 
la resta de ambos números. Mostrar el resultado por la consola. */

function resta(num1, num2) {
    console.log(num1 - num2);
};

resta(1, 2)

/* 3) Generar una función que le ingresen por parámetro dos valores distintos en dos variables 
a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b, 
Pasarlo a a y mostrarlos. */

function intercambioDeVariables(valor1, valor2) {
    let vlr1 = valor1;
    let vlr2 = valor2;
    let cache;

    console.log(vlr1, vlr2);

    cache = vlr1;
    vlr1 = vlr2;
    vlr2 = cache;

    console.log(vlr1, vlr2);
};

intercambioDeVariables(1, 2)

/* 4) Generar una función que le ingrese por parámetro el valor del lado de un cuadrado 
calcular su perímetro, su superficie, e informar los mismos en consola. */ 

function analisisCuadrado(ladoCuadrado) {
    let num = parseInt(ladoCuadrado)
    console.log("Perimetro del Cuadrado: ", num + num + num + num);
    console.log("Area del Cuadrado: ", num*num**2);
};

analisisCuadrado(4)

/* 5) Generar una función que dada una temperatura en grados fahrenheit los convierta a grados celsius. */

function conversionDeTemperatura(grados) {
    let num = parseInt(grados)
    console.log("La temperatura en Celsius = ", (num - 32) * 5/9);
};

conversionDeTemperatura(68)

/* 6) Realizar una función que calcule el factorial de un número ingresado por el usuario 
(el número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la consola. */

function factorial(numero) {
    
    if (numero > 10) {
        console.log("No se puede ejecutar")
        return
    }
    
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));

/* 7) Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que indique si ese texto es un palíndromo. 
Ejemplo de palíndromo: “Somos o no somos”. */

function invertirCadena(cad) {
    return (cad === '') ? '' : invertirCadena(cad.substr(1)) + cad.charAt(0);
}

while (true) {
    let palabra = prompt("ingrese una palabra ")
  
    console.log(invertirCadena(palabra));
  
    console.log(palabra)

    if (palabra == invertirCadena(palabra)) {
        console.log("La palabra palíndroma es:", palabra)
    }else{
        console.log("No es una palabra palíndroma");
    }
}

/* 8) Dada una cadena de caracteres ingresada por el usuario, se pide realizar un script que lo muestre en mayúsculas 
y luego en minúsculas. Investigue el manejo de string en Javascript. */

let plb = prompt("Ingrese una palabra: ")

console.log(plb.toUpperCase(), plb.toLowerCase());

/* Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la calificación resultante según la nota ingresada: */

let nota = prompt("Ingrese la nota del alumno: ")
let numero = parseInt(nota)

console.log(numero)

if (numero == 0) {
    console.log("Muy deficiente")
}

else if (numero == 1) {
    console.log("Muy deficiente")
}

else if (numero == 2) {
    console.log("Muy deficiente")
}

else if (numero == 3) {
    console.log("Insuficiente")
}

else if (numero == 4) {
    console.log("Insuficiente")
}

else if (numero == 5) {
    console.log("Suficiente")
}

else if (numero == 6) {
    console.log("Suficiente")
}

else if (numero == 7) {
    console.log("Bien")
}

else if (numero == 8) {
    console.log("Notable")
}

else if (numero == 9) {
    console.log("Notable")
}

else if (numero == 10) {
    console.log("Sobresaliente")
};

/* Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y devuelve si ese mes tiene 30 o 31 días. */

let mes = prompt("Introduce el número del mes (1 al 12): ");

if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  console.log("El mes " + mes + " tiene 30 días.");
} else if (mes == 2) {
  console.log("El mes " + mes + " tiene 28 o 29 días, dependiendo del año.");
} else {
  console.log("El mes " + mes + " tiene 31 días.");
}

/* Crear un script que genere una pirámide como el ejemplo con los números del 1 al número que ingrese el usuario 
(no puede ser mayor de 10, realizar la validación): */

let num = prompt("Introduce un número:");

if (num <= 10) {

    for (let i = 1; i <= num; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea += j + " ";
        }

        console.log(linea);
    }
}

else {
    console.log("Ingrese un numero valido")
}

/* Generar una función donde ingresen dos números, el primero corresponde a la cantidad de bultos en stock 
y el segundo a la cantidad de bultos que se pueden colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los 
bultos disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola. */

function calcularCajas(bultosEnStock, bultosPorCaja) {
    let cajasCompletas = Math.floor(bultosEnStock / bultosPorCaja);
    let bultosSueltos = bultosEnStock % bultosPorCaja;
  
    console.log("Cajas completas: " + cajasCompletas);
    console.log("Bultos sueltos: " + bultosSueltos);
  }
  
  calcularCajas(15, 6)


/* Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford Fiesta (código "fiesta"), 
el descuento es de un 5%. Si el coche a la venta es un Ford Focus (código "focus"), el descuento es del 10%. 
El usuario introduce el artículo a través de su código y el script saca el descuento correspondiente por la consola. */

const codigo = prompt("Introduce el código del coche: ");

let precio;
let descuento;

if (codigo === "fiesta") {
  precio = 1000000;
  descuento = 0.05;
} else if (codigo === "focus") {
  precio = 120000;
  descuento = 0.1;
} else {
  console.log("Código no válido");
  process.exit();
}

const precio_descuento = precio - (precio * descuento);

console.log("Precio original: " + precio);
console.log("Descuento: " + descuento * 100 + "%");
console.log("Precio con descuento: " + precio_descuento);
