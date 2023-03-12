const Form = document.querySelector('.Ej11Form');
const Input = document.querySelector('.input');
const Button = document.querySelector('.button');
const Resultado = document.querySelector('.Result');

Button.addEventListener('click', convertir)

function convertir() {
    let Far = Input.value * 9/5 + 32
    Resultado.innerText = Far
}