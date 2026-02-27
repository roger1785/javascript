// let nombre1 = "Juan";
// let nombre2 = "Ana";
// let nombre3 = "Luis";
// let nombre4 = "Marta";
// let nombre5 = "Carlos";

// const nombres = ["Juan", "Ana", "Luis", "Marta", "Carlos"];
// const numeros = [-5, 1, 5, 7, 20, "3", 15];
// const dias = ["Lunes", 2, "Miércoles", true, "Viernes"];
// const meses = [];

// Ejercicio

// const nombres = ["Ana", "Luis", "Carlos"];
// const dias = ["Lunes", "Martes", "Miércoles"];
// const vaio = [];
// const numetos = [1, 2, 3, 4, 5];

// indices

// let num = 5;
// console.log(num);

// // Elemento        1      2       3
// const nombres = ["Ana", "Luis", "Carlos"];
// // Indice          0      1       2

// console.log(nombres[1]);
// nombres[1] = "Jose Luis";

// console.log(nombres);

// Ejercicio

// const nombres = ["Ana", "Luis", "Carlos", "Marta"];

// console.log(nombres[0]);
// console.log(nombres[1]);
// nombres[2] = "Pedro";
// console.log(nombres[2]);

// length

// const nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];

// console.log(nombres);
// console.log(nombres.length);

// console.log(nombres[nombres.length - 1]);

// Ejercicio

// const nombres = ["Ana", "Juan", "Pedro"];

// console.log(nombres.length);
// console.log(nombres[nombres.length - 1]);

// Métodos

// Elemento        1      2       3        4
// const nombres = ["Ana", "Luis", "Carlos"];
// Indice          0      1       2        3

// nombres[3] = "Marta";
// nombres[nombres.length] = "María";

// nombres.push("Marta"); // Agrega al final del array
// nombres.push("Marta", "María");

// console.log(nombres[2]);

// let nombre = nombres.pop(); // Elimina el último elemento del array
// console.log(nombres.length)
// console.log(nombre);
// nombres.pop();

// nombres.unshift("Marta"); // Agrega al inicio del array

// const nombre = nombres.shift(); // Elimina el primer elemento del array
// console.log(nombre);

// console.log(nombres);

// Ejercicio

// const frutas = [];
// frutas.push("Manzana", "Banana", "Naranja");
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);
// frutas.unshift("Uva");
// console.log(frutas);

// for

// Elemento        1      2       3        4         5
// const nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];
// Indice          0      1       2        3         4

// console.log(nombres[0])
// console.log(nombres[1])

//                           5
// for (let i = 0; i < nombres.length; i++) {
//   console.log(i, nombres[i]);
// }

// Ejercicio

// const numeros = [25, 30, 15, 40, 12, 13];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 15) {
//     console.log(numeros[i]);
//   }
// }

// forEach

// const nombres = ["Ana", "Luis", "Carlos", "Marta", "Pedro"];

// console.log(nombres);

// funcion declarada
// function mostrarNombre(nombre) {
//   console.log(nombre);
// }

// funcion expresada
// const mostrarNombre = function (nombre) {
//   console.log(nombre);
// };

// funcion flecha
// const mostrarNombre = nombre => console.log(nombre);

// nombres.forEach(mostrarNombre);

// nombres.forEach((nombre) => console.log(nombre));

// Ejercicio

// const nombres = ["luca", "mario", "juan", "pepe", "aldo"];

// function mostrarNombre(nombre) {
//   nombre = `el nombre es ${nombre}`;
//   console.log(nombre);
// }

// nombres.forEach(mostrarNombre);

// map

// const numeros = [1, 2, 3, 4, 5];

// function multiplicar(numero) {
//   return numero * 2;
// }

// const multiplicar = function (numero) {
//   return numero * 2;
// };

// const multiplicar = numero => numero * 2;

// // const porDos = numeros.map(multiplicar);

// const porDos = numeros.map(numero => numero * 2);

// console.log(numeros, porDos);

// Ejercicio

// const numeros = [10, 20, -30, 40, 50];

// numeros.map((numero) => console.log(3 * numero));

// // numeros.map((numero) => console.log((numero = -Math.abs(numero))));
// numeros.map((numero) => console.log((numero = numero < 0 ? numero : -numero)));

// Operador ternario

// let edad = 27;
// // let mensaje = "";

// // if (edad >= 18) {
// //   mensaje = "Es mayor de edad";
// // } else {
// //   mensaje = "Es menor de edad";
// // }

// let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

// console.log(mensaje);

// filter

// const numeros = [10, 20, 25, 12, 30, 35, 40];

// function filtrarNumeros(numero) {
//   if (numero >= 19) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filtrarNumeros(numero) {
//   if (numero >= 19) {
//     return true;
//   }

//   return false;
// }

// function filtrarNumeros(numero) {
//   return numero >= 19;
// }

// const filtrarNumeros = function (numero) {
//   return numero >= 19;
// };

// const filtrarNumeros = numero => numero >= 19;

// // const numerosFiltrados = numeros.filter(filtrarNumeros);
// const numerosFiltrados = numeros.filter((numero) => numero >= 19);

// console.log(numeros, numerosFiltrados);

// Ejercicio

const numeros = [1, 2, 3, 4, 15, 16, 7, 18, 29, 10];

const numerosMayores = numeros.filter((num) => num > 10);

console.log(numerosMayores);

const edades = [10, 12, 35, 40, 45];

const edadesMayores = edades.filter((edad) => edad >= 18);

console.log(edadesMayores);
