// // localStorage.setItem("nombre", "María");
// // localStorage.setItem("apellido", "Perez");
// // localStorage.setItem("edad", 30);

// const nombre = localStorage.getItem("nombre");
// console.log(nombre);

// const apellido = localStorage.getItem("apellido");
// console.log(apellido);

// if (apellido === null || apellido === "") {
//   console.log(`El usuario se llama ${nombre}`);
// } else {
//   console.log(`El usuario se llama ${nombre} ${apellido} !!!`);
// }

// // let edad = localStorage.getItem("edad");
// // console.log(typeof edad);
// // edad = Number(edad);
// // console.log(typeof edad);
// // console.log(edad);

// const edad = Number(localStorage.getItem("edad"));

// console.log("La edad del usuario es: " + (edad + 1));

// Ejercicio

// localStorage.setItem("ciudad", "Madrid");

// const ciudad = localStorage.getItem("ciudad") || "Barcelona";

// console.log(ciudad);

// Borrar keys

// localStorage.removeItem("ciudad");

// localStorage.clear();

// Ejercicio

// localStorage.setItem("moneda", "euro");

// let moneda = localStorage.getItem("moneda");
// console.log(moneda);

// localStorage.removeItem("moneda");

// moneda = localStorage.getItem("moneda");
// console.log(moneda);

// ---

// localStorage.setItem("producto", "coche");
// const producto = localStorage.getItem("producto");
// console.log("producto");

// localStorage.removeItem("producto");

// console.log(localStorage.getItem("producto"));

// DOM

// const form = document.querySelector("#agregar-nombre");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const input = document.querySelector("#nombre");

//   console.log(input.value);

//   //   const nombre = input.value;

//   localStorage.setItem("nombre", nombre);
// });

// Ejercicio

// const form = document.querySelector("#agregar-nombre");
// const input = document.querySelector("#nombre");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const nombre = input.value.trim();

//   localStorage.setItem("nombre", nombre);

//   //   console.log(input.value);
// });

// const nombre = localStorage.getItem("nombre");
// // console.log(nombre);

// input.value = nombre;

// sessionStorage

// sessionStorage.setItem("apellido", "Perez");

// let apellido = sessionStorage.getItem("apellido");
// console.log(apellido);

// sessionStorage.removeItem("apellido");

// apellido = sessionStorage.getItem("apellido");
// console.log(apellido);

// Ejercicio

// // sessionStorage.setItem("producto", "moto");

// const producto = sessionStorage.getItem("producto");
// console.log(producto);

// ---

// // sessionStorage.setItem("nombre", "Antonio");

// console.log(sessionStorage.getItem("nombre"));

// JSON

// const persona = {
//   nombre: `Juan`,
//   apellido: "Perez",
//   edad: 30,
//   admin: true,
//   roles: ["editor", "admin"],
//   direccion: {
//     calle: "Falsa",
//     numero: 123,
//   },
//   saludar() {
//     return `Hola ${this.nombre}`;
//   },
// };

// // console.log(persona.saludar());

// const jsonPersona = JSON.stringify(persona);

// console.log(jsonPersona);

// // {"nombre":"Juan","apellido":"Perez","edad":30,"admin":true,"roles":["editor","admin"],"direccion":{"calle":"Falsa","numero":123}}

// localStorage.setItem("persona", jsonPersona);

// ---

// const jsonPersona = localStorage.getItem("persona");

// const persona = JSON.parse(jsonPersona);

// console.log(persona);

// localStorage.setItem("ciudad", "Madrid");

// ---

// const ciudad = localStorage.getItem("ciudad");

// JSON.parse(ciudad);

// console.log("Otra sentencia");

// Ejercicio

// const usuario = {
//   nombre: "Josselyn",
//   edad: 22,
//   activo: true,
// };

// localStorage.setItem("usuario", JSON.stringify(usuario));
// const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
// console.log("Nombre:", usuarioGuardado.nombre);

// ---

// const persona = {
//   nombre: "Juan",
//   apellido: "Fernandes",
//   edad: 40,
// };
// const personaJSON = JSON.stringify(persona);

// localStorage.setItem("persona", personaJSON);

// const personaRecuperada = localStorage.getItem("persona");
// const personaObjeto = JSON.parse(personaRecuperada);

// console.log(personaObjeto);

// console.log(personaObjeto.nombre);

// ---

// const barbara = {
//   nombre: "Barbara",
//   edad: 30,
//   ciudad: "Madrid",
//   titulo: "Desarrolladora web",
// };

// localStorage.setItem("barbara", JSON.stringify(barbara));

// const personaRecuperada = localStorage.getItem("barbara");
// const personaObjeto = JSON.parse(personaRecuperada);

// console.log(personaObjeto.edad);

// ---

// const persona = {
//     nombre: "Vincenzo",
//     apellido:"Acconcia",
//     edad:38,
//     admin: true,
//     roles: ["baterista","percusionista"],

// };

// const jsonPersona = JSON.stringify(persona);

// console.log(jsonPersona)

// localStorage.setItem("persona", jsonPersona);

// const personaObjecto = localStorage.getItem("persona")

// const personaRecuperada = JSON.parse(personaObjecto)

// console.log(personaRecuperada.admin)

// ---

// const producto = {
//   nombre: "Mac",
//   precio: 2000,
// };

// localStorage.setItem("producto", JSON.stringify(producto));

// const productoMemoria = JSON.parse(localStorage.getItem("producto"));

// console.log("precio:", productoMemoria.precio);

// ---

const form = document.querySelector("#agregar-nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const persona = {};

  //   const inputNombre = document.querySelector("#nombre");
  //   persona.nombre = inputNombre.value;

  persona.nombre = document.querySelector("#nombre").value;

  //   localStorage.setItem("nombre", nombre);

  const inputApellido = document.querySelector("#apellido");
  persona.apellido = inputApellido.value;
  //   localStorage.setItem("apellido", apellido);

  console.log(persona);

  localStorage.setItem("persona", JSON.stringify(persona));
});

const persona = JSON.parse(localStorage.getItem("persona"));

console.log(persona);
