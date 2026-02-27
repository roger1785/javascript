// let nombre = "Juan";
// let apellido = "Pérez";
// let edad = 30;
// let ciudad = "Madrid";

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   edad: 30,
//   permisos: ["admin", "editor"],
//   direccion: {
//     calle: "Calle Falsa 123",
//     codigoPostal: "28080",
//     pais: "España",
//     ciudad: "Madrid",
//   },
// };

// console.log(usuario.nombre);

// usuario.nombre = "Juan Pablo";

// console.log(usuario);

// Ejercicio

// const alumno = { nombre: `Francesco`, edad: 38 };

// alumno.edad = 40;

// const producto = { nombre: `guitarra`, precio: 300 };

// producto.nombre = `bajo`;

// console.log(alumno.edad);
// console.log(producto.nombre);

// ---

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
// };

// usuario.edad = 30;
// delete usuario.apellido;

// // const numeros = [10, 20, 30];
// // console.log(numeros, numeros.length);

// // Notación de corchetes

// console.log(usuario["edad"]);

// usuario["edad"] = 31;

// console.log(usuario);

// Ejercicio

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   edad: 38,
// };

// // Acceder a las propiedades con notación de punto y corchetes
// console.log(usuario.nombre);
// console.log(usuario["nombre"]);

// // Modificar las propiedades con notación de punto y corchetes
// usuario.edad = 39;
// usuario["edad"] = 40;

// // Agregar nuevas propiedades con notación de punto y corchetes
// usuario.ciudad = "Buenos Aires";
// usuario["pais"] = "Argentina";

// // Usar una variable con notación de corchetes
// let key = "pais";
// console.log(usuario[key]);

// console.log(usuario);

// Métodos

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   nombreCompleto: function () {
//     console.log(`${usuario.nombre} ${usuario.apellido}`);
//   },
//   //   nombreCompleto() {
//   //     console.log(`${usuario.nombre} ${usuario.apellido}`);
//   //   },
//   //   nombreCompleto: () => { No usar arrow functions en métodos de objetos
//   //     console.log(`${usuario.nombre} ${usuario.apellido}`);
//   //   },
// };

// console.log(usuario);

// console.log(usuario.nombre);

// usuario.nombreCompleto();
// // usuario["nombreCompleto"]();

// Ejercicio

// const usuario = {
//   nombre: "Carlos",
//   apellido: "López",
//   años: 28,
//   nombreCompleto: function () {
//     console.log(
//       `${usuario.nombre} ${usuario.apellido}` +
//         " tiene " +
//         `${usuario.años}` +
//         " años",
//     );
//   },
// };
// usuario.nombreCompleto();

// this

// const user = {
//   nombre: "Juan Pablo",
//   apellido: "Pérez",
//   //   nombreCompleto: function () {
//   //     console.log(`${this.nombre} ${this.apellido}`);
//   //   },
//   nombreCompleto() {
//     console.log(`${this.nombre} ${this.apellido}`);
//   },
//   // No usar arrow functions en métodos de objetos
//   //   nombreCompleto: () => {
//   //     console.log(`${this.nombre} ${this.apellido}`);
//   //   },
// };

// user.nombreCompleto();

// Ejercicio

// const usuario = {
//   nombre: "Carlos",
//   apellido: "López",
//   años: 28,
//   nombreCompleto() {
//     console.log(`${this.nombre} ${this.apellido} tiene ${this.años} años`);
//   },
// };

// usuario.nombreCompleto();

// ---

// const user = {
//   username: "User 1",
//   email: "x@x.com",
//   password: 1234,
//   mostrarUsername() {
//     console.log(this.username);
//   },
//   obtenerEmail() {
//     return this.email;
//   },
//   cambiarPassword(newPassword) {
//     this.password = newPassword;
//   },
// };

// console.log(user["username"]);
// console.log(user["email"]);
// console.log(user["password"]);

// debugger;

// property = 'username';

// for (const property in user) {
//   console.log(property, user[property]);
// }

// user.mostrarUsername();

// const correo = user.obtenerEmail();
// console.log(correo);

// user.cambiarPassword(54232);

// console.log(user);

// Ejercicio

// const usuario = {
//   nombre: `giorgio`,
//   apellido: `rosii`,
//   edad: 35,
//   ciudad: `barcelona`,
//   permisos: [`admin`, `editor`],
// };

// for (let key in usuario) {
//   console.log(key);
// }

// for (let key in usuario) {
//   console.log(usuario[key]);
// }

// for (let key in usuario) {
//   console.log(key, usuario[key]);
// }

// ---

// console.log(typeof user.cambiarPassword !== "function");

// const user = {
//   username: "User 1",
//   email: "x@x.com",
//   password: 1234,
//   mostrarUsername() {
//     console.log(this.username);
//   },
//   obtenerEmail() {
//     return this.email;
//   },
//   cambiarPassword(newPassword) {
//     this.password = newPassword;
//   },
// };

// for (const key in user) {
//   if (typeof user[key] !== "function" && key != "password") {
//     console.log(key, user[key]);
//   }
// }

// clonar

// let a = 10;

// let b = a;

// console.log(a, b);

// b = 20;

// console.log(a, b);

const user1 = {
  nombre: "Juan",
  edad: 30,
};

const user2 = { ...user1 }; // Spread operator

// const user2 = Object.assign({}, user1); // Object.assign

user2.nombre = "Pedro";
user2.edad = 40;

console.log(user1, user2);
