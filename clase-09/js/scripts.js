// const h1 = document.getElementById("titulo");
// const h1 = document.querySelector("#titulo");

// h1.onclick = () => {
//   console.log("Click en h1");
// };

// h1.onclick = () => {
//     console.log("Otro click en h1");
// };

// const obj = {
//     nombre: "Objeto 1",
// }

// obj.nombre = "Objeto Modificado";

// obj.saludar = function() {
//     console.log(`Hola, soy ${this.nombre}`);
// }

// Ejercicio

// const boton = document.getElementById("btnSaludar");

// boton.onclick = () => {
//   console.log("boton clicado");
// };

// addEventListening

// const h1 = document.querySelector("#titulo");

// function saludar() {
//   console.log("Hola desde addEventListener");
// }

// // function mensaje() {
// //   console.log("Un mensaje ...");
// // }

// // console.log(saludar);
// // console.log(saludar());

// h1.addEventListener("click", saludar);

// // h1.addEventListener("click", mensaje);

// ---

// const h1 = document.querySelector("#titulo");

// // function saludar() {
// //   console.log("Hola desde addEventListener");
// // }

// // const saludar = function () {
// //   console.log("Hola desde addEventListener");
// // };

// // const saludar = () => console.log("Hola desde addEventListener");

// // h1.addEventListener("click", saludar);

// h1.addEventListener("click", () => console.log("Hola desde addEventListener"));

// Ejercicio

// const h1 = document.querySelector("#titulo"); // seleccionamos el elemento

// h1.onclick = () => { // con esto al hacer click en h1 lanza el console.log
//     h1.textContent = "Nuevo texto";
// };

// const h1 = document.querySelector("#titulo");
// let cambiado = false;

// h1.addEventListener("click", () => {
//   if (!cambiado) {
//     h1.textContent = "Texto cambiado";
//     cambiado = true;
//   } else {
//     h1.textContent = "Bienvenido a la Clase Javascript 09";
//     cambiado = false;
//   }
// });

// const h1 = document.querySelector("#titulo");

// const cambiar = () => (h1.textContent = "este es el texto cambiado");

// h1.addEventListener("click", cambiar);

// Event

// const input = document.querySelector("#nombre");

// input.addEventListener("click", (event) => {
//   //   console.log(event);
//   //   event.target.style.backgroundColor = "lightblue";
//   console.log(event.target);
// });

// input.addEventListener("keyup", (event) => {
// //   console.log(event.target.value);
//   console.log(input.value);
// });

// Ejercicio

// const form = document.querySelector("#formulario");

// form.addEventListener(`keyup`, (event) => {
//   console.log(event.target.value);
// });

// preventDefault

// const link = document.querySelector("#link");

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("No va al href");
//   //   window.location = event.target.href;
// });

// const form = document.querySelector("#formulario");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   //   console.log("No se envía el formulario");

//   //   const input = document.querySelector("#formulario input");

//   //   const input = document.getElementsByName("email");
//   //   console.log(input[0]);

//   //   const input = document.querySelector('input[name="email"]');

//   //   const input = document.getElementById("email");

//   //   console.log(form.children[0]);
//   //   const input = form.children[0];

//   const input = document.querySelector("#email");

//   //   console.log(input.value);

//   if (input.value == "") {
//     // console.log("Error: el email esta vacío");

//     input.style.border = "1px solid red";

//     const p = document.createElement("p");
//     p.textContent = "Error: el email esta vacío";
//     p.style.color = "red";

//     // console.log(p);
//     input.after(p);
//   }
// });

// stopPropagation

// const contenedor = document.querySelector("#contenedor");

// contenedor.addEventListener("click", () => {
//   console.log("Click en el contenedor");
// });

// const item = document.querySelector(".item");

// item.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("Click en el item");
// });

// Delegación de eventos

// const items = document.querySelectorAll(".item");

// // items.forEach((item) => {
// //   item.addEventListener("click", () => {
// //     console.log(item.textContent);
// //   });
// // });

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("item")) {
//     console.log(event.target.textContent);
//   }
// });

// // Se crear dinámicamente después

// const contenedor = document.querySelector("#contenedor");

// const item = document.createElement("p");
// item.textContent = "Item dinámico";
// item.classList.add("item");

// contenedor.appendChild(item);

// Ejemplo final

const boton = document.getElementById("btnSaludar");
const contenedor = document.querySelector("#contenedor");

boton.addEventListener("click", () => {
  const item = document.createElement("p");
  item.textContent = "Item dinámico";
  item.classList.add("item");
  contenedor.appendChild(item);
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    event.target.classList.toggle("activo");
  }
  console.log("click en document");
});
