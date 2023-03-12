function obtenerValor() {
    // Obtener los elementos del formulario
    var nombreCliente = document.querySelector(".input").value;
    var materialCaja = document.querySelector(".select").value;
    var dimensionesCaja = obtenerDimensionesCaja();
    var comentarios = document.querySelector(".Comentarios").value;
    var resultado = document.querySelector(".Resultado");
  
    // Mostrar los valores obtenidos en el elemento Resultado
    resultado.innerText = nombreCliente + " " + "ha pedido una caja de " + materialCaja + " " + "con unas dimensiones "+ dimensionesCaja + ". " + comentarios;
  
    // Función auxiliar para obtener las dimensiones de la caja seleccionada
    function obtenerDimensionesCaja() {
      var dimensiones = "";
      var opciones = document.getElementsByName("opcion");
      for(var i=0; i<opciones.length; i++) {
        if(opciones[i].checked) {
          dimensiones += opciones[i].value + " ";
        }
      }
      return dimensiones;
    }
}





