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

/* 7)  */