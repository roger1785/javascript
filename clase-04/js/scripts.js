// función declarada
// function saludar() {
//   console.log("¡Hola, bienvenido a la clase 04!");
// }

// saludar(); // Llamada a la función
// saludar(); // Llamada a la función nuevamente
// saludar(); // Llamada a la función una vez más

// Ejercicio

// function saludar() {
//   console.log("Hola mundo");
// }
// saludar();
// saludar();

// Parametros y argumentos

// function saludar(nombre) {
//   console.log("Hola, " + nombre);
// }

// // console.log(nombre); // Error: nombre no está definido

// saludar("Pedro"); // Argumento "Pedro" pasado al parámetro nombre
// saludar("María"); // Argumento "María" pasado al parámetro nombre

// function sumar(num1, num2) {
//   const suma = num1 + num2;
//   console.log("La suma es: " + suma);
// }

// sumar(5, 10); // Argumentos 5 y 10 pasados a los parámetros num1 y num2
// sumar(20, 30); // Argumentos 20 y 30 pasados a los parámetros num1 y num2
// sumar(2, "4"); // Concatena 2 y "4" como cadena de texto

// Ejercicio

// function muestraEdad(edad) {
//   console.log("La edad es: " + edad);
// }

// muestraEdad(25);
// muestraEdad(30);

// function resta(num1, num2) {
//   const resultado = num1 - num2;
//   console.log("El resultado es: " + resultado);
// }

// resta(1, 4);
// resta(10, 3);
// resta(7, 2);

// debugger;

// function multiplicar(a, b) {
//   const resultado = a * b;
//   console.log("El resultado de la multiplicación es: " + resultado);
// }

// multiplicar(3, 5);

// Valores por defecto o predeterminados

// debugger;

// function saludar(nombre = "Invitado") {
//   console.log("Hola, " + nombre);
// }

// saludar(); // Usa el valor por defecto "Invitado"
// saludar("Ana"); // Usa el valor proporcionado "Ana"

// ---

// function mensaje(mensaje, consola) {
//   if (consola == true) {
//     console.log(mensaje);
//   } else {
//     alert(mensaje);
//   }
// }

// mensaje("¡Hola a todos!", true);
// mensaje("¡Atención! Este es un mensaje importante.", false);

// ---

// function mensajeConsole(mensaje) {
//   console.log(mensaje);
// }

// function mensajeAlert(mensaje) {
//   alert(mensaje);
// }

// mensajeConsole("Este es un mensaje para la consola.");
// mensajeAlert("Este es un mensaje de alerta.");

// const edad = prompt("Ingresa tu edad:");

// return

// debugger;

// function mensaje(mensaje) {
//   return mensaje + "!!!";
// }

// const texto = mensaje("Hola mundo");

// console.log(texto);

// function mostrarSuma(a, b) {
//   console.log(a + b);
// }

// debugger;

// function devolverSuma(a, b) {
//   return a + b;
// }

// // mostrarSuma(3, 4); // Muestra 7 en la consola
// const suma = devolverSuma(3, 4); // Devuelve 7 pero no lo muestra
// console.log("La suma es:", suma);

// Ejercicio

// function suma(num1, num2) {
//   return num1 + num2;
// }

// const Suma = suma(20, 5);

// console.log(Suma);

// Resumen

// function sumar(a, b) {
//   return a + b;
// }

// let resultado = sumar(5, 7);
// console.log("El resultado de la suma es:", resultado);

// Función expresada

// función declarada
// function sumar(a, b) {
//   return a + b;
// }

// función expresada
// const sumar = function (a, b) {
//   return a + b;
// };

// let suma = sumar(10, 15); // Llamada a la función expresada
// console.log(suma);

// ---

// const saludar = function () {
//   console.log("¡Hola desde una función Uno");
// };

// const saludar = function () {
//   console.log("¡Hola desde una función Dos");
// };

// saludar(); // Llamada a la función

// Ejercicio

// const horario = function () {
//   console.log("Hoy es lunes y son las 10am");
// };
// horario();

// arrow function o función flecha

// función declarada
// function sumar(a, b) {
//   return a + b;
// }

// función expresada
// const sumar = function (a, b) {
//   return a + b;
// };

// función flecha
// const sumar = (a, b) => a + b;

// let suma = sumar(10, 15); // Llamada a la función expresada
// console.log(suma);

// ---

// function saludo() {
//   console.log("¡Hola desde una función flecha!");
// }

// const saludo = function () {
//   console.log("¡Hola desde una función flecha!");
// };

// const saludo = () => console.log("¡Hola desde una función flecha!");

// const resultado = saludo(); // Llamada a la función
// console.log(resultado);

// ---

// function saludo(nombre) {
//   return "¡Hola, " + nombre + "!";
// }

// const saludo = function (nombre) {
//   return "¡Hola, " + nombre + "!";
// };

// const saludo = nombre => "¡Hola, " + nombre + "!";

// ---

// function saludo(nombre) {
//   const mensaje = "¡Hola, " + nombre + "!";
//   return mensaje;
// }

// const saludo = function (nombre) {
//   const mensaje = "¡Hola, " + nombre + "!";
//   return mensaje;
// };

// const saludo = (nombre) => {
//   const mensaje = "¡Hola, " + nombre + "!";
//   return mensaje;
// };

// const saludo = nombre => "¡Hola, " + nombre + "!";

// const textoSaludo = saludo("Carlos");
// console.log(textoSaludo);

// Callback functions

// function calculadora(num1, num2, operacion) {
//   let resultado;

//   if (operacion === "sumar") {
//     resultado = num1 + num2;
//   } else if (operacion === "restar") {
//     resultado = num1 - num2;
//   }

//   return resultado;
// }

// const suma = calculadora(10, 5, "sumar");
// console.log("La suma es: " + suma);

// const resta = calculadora(10, 5, "restar");
// console.log("La resta es: " + resta);

// const result = calculadora(10, 5, "multiplicar");
// console.log("El resultado es: " + result);

// ---

// debugger;

// function calculadora(num1, num2, operacion) {
//   return operacion(num1, num2);
// }

// function sumar(a, b) {
//   return a + b;
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// const suma = calculadora(10, 5, sumar);
// console.log("La suma es: " + suma);

// const producto = calculadora(10, 5, multiplicar);
// console.log("El producto es: " + producto);

// ---

// function ejecutarFuncion(fn) {
//   fn();
// }

// ejecutarFuncion(function () {
//   console.log("Hola desde el callback");
// });

// Ejercicio

// function sumar(num1, num2, callback) {
//   let resultado = num1 + num2;
//   callback(resultado);
// }

// function mostrarResultado(resultado) {
//   console.log("El resultado de la suma es: " + resultado);
// }

// sumar(3, 7, mostrarResultado);

// ---

// function funcionCallback(fn) {
//   fn("¡Hola desde la función callback!");
// }

// function mensajeConsola(mensaje) {
//   console.log(mensaje);
// }

// funcionCallback(mensajeConsola)

// const texto = mensajeConsola("Este es un mensaje");
// console.log(texto);

// ---

// function multiplicar(num1, num2, callback) {
//   let resultado = num1 * num2;
//   callback(resultado);
// }

// function mostrarResultado(resultado) {
//   console.log("El resultado de la multiplicación es: " + resultado);
// }

// multiplicar(4, 5, mostrarResultado);

// Ejercicio Nro 2

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

let numA = prompt("Ingresa el primer número:");
let numB = prompt("Ingresa el segundo número:"); // retorna string

numA = Number(numA);
numB = Number(numB);

// console.log(isNaN(numA)); // no es un número
// console.log(isNaN(numB), !isNaN(numB)); // es un número

console.log(typeof numA, numA, typeof numB, numB);

if (
  typeof numA === "number" &&
  typeof numB === "number" &&
  !isNaN(numA) &&
  !isNaN(numB)
) {
  const resultadoSuma = sumar(numA, numB);
  const resultadoResta = restar(numA, numB);
  console.log("La suma es: " + resultadoSuma);
  console.log("La resta es: " + resultadoResta);
}

// if (!isNaN(numA) && !isNaN(numB)) {
//   numA = Number(numA);
//   numB = Number(numB);
//   const resultadoSuma = sumar(numA, numB);
//   const resultadoResta = restar(numA, numB);
//   console.log("La suma es: " + resultadoSuma);
//   console.log("La resta es: " + resultadoResta);
// }
