function guardarLi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });
}

function crearLi() {
  const li = document.createElement("li");
  li.textContent = inputComentario.value;

  const button = document.createElement("button");
  button.textContent = "Eliminar";
  button.addEventListener("click", () => {
    // console.log("click en eliminar");
    listaComentarios.removeChild(li);

    mensaje.textContent = "Elemento eliminado";

    setTimeout(() => {
      mensaje.textContent = "";
    }, 2000);
  });

  li.appendChild(button);

  listaComentarios.appendChild(li);

  mensaje.textContent = "Agregado correctamente";

  inputComentario.value = "";
}

function agregarComentario() {
  if (inputComentario.value == "") {
    // console.log("Escribir algo");
    mensaje.textContent = "Escribir algo";
    return;
  }

  guardarLi().then(() => {
    crearLi();
  });

  //   console.log("Click en botón");
  //   console.log(inputComentario.value);

  setTimeout(() => {
    mensaje.textContent = "";
  }, 2000);
}

const btnAgregar = document.querySelector("#btnAgregar");
const inputComentario = document.querySelector("#comentario");
const listaComentarios = document.querySelector("#lista-comentarios");
const mensaje = document.querySelector("#mensaje");

inputComentario.addEventListener("keypress", (event) => {
  //   console.log(event.keyCode);
  if (event.keyCode == 13) {
    agregarComentario();
  }
});

btnAgregar.addEventListener("click", () => {
  agregarComentario();
});
