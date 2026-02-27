const form = document.querySelector("#form-contacto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const nombre = document.querySelector("#nombre");
  //   const correo = document.querySelector("#email");
  //   const mensaje = document.querySelector("#mensaje");

  //   const data = {
  //     nombre: nombre.value,
  //     correo: correo.value,
  //     mensaje: mensaje.value,
  //   };

  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  const data = {
    nombre,
    correo,
    mensaje,
  };

  console.log("Datos para el email", data);
});
