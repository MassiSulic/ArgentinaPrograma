/* 9) Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html. */

const Ej9Form = document.querySelector('.Ej9Form')
const Pesos = document.querySelector('.Pesos')
const Resultado = document.querySelector('.Resultado');

Ej9Form.addEventListener('click', convertir)

function convertir() {
    let convert = Pesos.value * 300
    Resultado.innerText = "Resultado: " + convert;
}

/* 10) Generar la inversa del ejercicio anterior (de pesos a dólares). */

const Ej10Form = document.querySelector('.Ej10Form')
const Dolares = document.querySelector('.Dolares')
const Resultado10 = document.querySelector('.Resultado10');

Ej10Form.addEventListener('click', convertir10)

function convertir10() {
    let convert = Dolares.value / 300
    Resultado10.innerText = "Resultado: " + convert;
}


