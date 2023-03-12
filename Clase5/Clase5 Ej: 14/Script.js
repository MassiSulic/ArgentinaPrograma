const inputNombre = document.getElementById("input-nombre");
const btnAgregarNombre = document.getElementById("agregar-nombre");
const listaNombres = document.getElementById("lista-nombres");

btnAgregarNombre.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre) {
    const nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = nombre;
    listaNombres.appendChild(nuevoElementoLista);
    inputNombre.value = "";
  }
});