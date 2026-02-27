// Valor booleano

// let verdadero = true;
// let falso = false;

// Operador de asignación

// let num = "5";

// Operadores de comparación

// console.log(5 == 5); // Igualdad simple
// console.log(5 === "5"); // Igualdad estricta
// console.log(5 > 5); // Mayor que
// console.log(5 < 7); // Menor que
// console.log(5 >= 5); // Mayor o igual que
// console.log(3 <= 3); // Menor o igual que
// console.log(5 != 5); // Diferente que simple
// console.log(5 !== "5"); // Diferente que estricta

//  Ejercicio

// let edad = 16;
// const mayoriaDeEdad = 18;

// //           16          18
// console.log(edad >= mayoriaDeEdad);

// let edad = 18;
// const mayoriaDeEdad = 18;
// let esAdulto = edad >= mayoriaDeEdad;
// console.log(esAdulto);

// Condicional simple

// let edad = 18;
// const mayoriaDeEdad = 18;

// //  18          18
// if (edad >= mayoriaDeEdad) {
//   // código a ejecutar si la condición es verdadera
//   console.log("Eres mayor de edad");
// }

// let temperatura = 3;

// if (temperatura <= 5) {
//   console.log("Hace mucho frío");
// }

// Scope de bloque

// let temperatura = 3;
// let mensaje = "La temperatura es agradable";

// if (temperatura <= 5) {
//   let mensaje = "Hace mucho frío";
//   mensaje = mensaje + " ¡Abrígate bien!";
//   console.log(mensaje, temperatura);
// }

// console.log(mensaje);

// Condicional compuesto

// let temperatura = 5;

// if (temperatura <= 10) {
//   console.log("Hace frío");
// } else { // si no
//   console.log("Hace calor");
// }

// Ejercicios

// let nota = 6;
// const notaAprobacion = 5;

// if (nota >= notaAprobacion) {
//   console.log("Aprobado");
// } else {
//   console.log("Desaprobado");
// }

// else if

// let temperatura = 10; // Templado

// // console.log(typeof temperatura);

// if (typeof temperatura == "number") {
//   if (temperatura <= 10) {
//     console.log("Hace mucho frío");
//   } else if (temperatura <= 30) {
//     console.log("Hace un clima templado");
//   } else {
//     console.log("Hace mucho calor");
//   }
// } else {
//   console.log("El valor de temperatura no es un número");
// }

// Ejercicio

// let edad = 30;

// if (edad < 13) {
//   console.log("niño");
// } else if (edad < 18) {
//   console.log("adolescente");
// } else {
//   console.log("adulto");
// }

// Operador lógico OR (O) ||

// let temperatura = 3;
// let lluvia = false;
// let noche = false;

// if (temperatura > 25 || lluvia == true || noche == true) {
//   console.log("Mensaje...");
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend == true) {
//   console.log("La oficina esta cerrada.");
// }

// let edad = 12;
// let autorizacion = true;

// if (edad > 13 || autorizacion == true) {
//   console.log("Va a la excursión de verano");
// }

// Operador lógico AND (Y) &&

// let edad = 19;
// let tieneEntrada = true;

// if (edad >= 18 && tieneEntrada == true) {
//   console.log("Puede pasar");
// } else {
//   console.log("No puede pasar");
// }

// let hour = 12;
// let minute = 29;

// if (hour == 12 && minute == 30) {
//   console.log("La hora es 12:30");
// }

// ---

// let llueve = false; // boolean

// //   true == true = true
// // if (llueve == true) {
// if (llueve) {
//   console.log("Debes salir con paraguas");
// } else {
//   console.log("Puedes salir sin paraguas");
// }

// Operador módulo (%)

// El operador `%` devuelve el **resto de una división**.

// console.log(10 % 2 == 0); // es par
// console.log(9 % 2 == 1); // es impar

// Ejercicio

// let numero = 22;

// if (numero % 2 == 0) {
//   console.log(numero + " es par");
// } else {
//   console.log(numero + " es impar");
// }

// switch

// let dia = 1;

// if (dia == 1) {
//   console.log("Lunes");
// } else if (dia == 2) {
//   console.log("Martes");
// } else if (dia == 3) {
//   console.log("Miércoles");
// } else {
//   console.log("No existe el dia");
// }

// switch (dia) {
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miércoles");
//     break;
//   default:
//     console.log("No existe el dia");
// }

let nota = 3;

// switch (nota) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("desaprobado");
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//     console.log("aprobado");
//     break;
//   case 9:
//   case 10:
//     console.log("sobresaliente");
//     break;
//   default:
//     console.log("nota no válida");
// }

// if (nota >= 1 && nota <= 4) {
//   console.log("desaprobado");
// } else if (nota >= 5 && nota <= 8) {
//   console.log("aprobado");
// } else if (nota == 9 || nota == 10) {
//   console.log("sobresaliente");
// } else {
//   console.log("nota no válida");
// }

// Ejercicio

let color = "naranja";

switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("Color no reconocido");
}
