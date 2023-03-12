// El mini juego se muestra por consola.

let boton = document.querySelector('.boton')
let numeroAleatorio = Math.floor(Math.random() * 5) + 1;

boton.addEventListener('click', consola)

function consola() {
    console.log("Hola")

    for (i = 0; i < 3; i++) {
        let usr = parseInt(prompt("Ingresa un numero"))
        console.log(numeroAleatorio)
    
        if (usr == numeroAleatorio) {
            console.log("Felicidades, Ganaste")
            return
        } else {
            console.log("Error")
        } 
        
    }
}

console.log("Perdiste") 