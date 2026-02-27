// let i = 1;

// // Cuidado con el ciclo infinito
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// ---

// let num = 0;

// num = num + 1;
// num += 1;
// num++; // incremento de 1

// num = num + 2;
// num += 2; // incremento de 2

// num -= 3; // decremento de 3
// num--; // decremento de 1

// console.log(num);

// ---

// let i = 3;

// // console.log(i, i > 0);

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// --- prompt

// let palabra = prompt("Ingrese un palabra que comience con H");

// console.log("Palabra ingresada: " + palabra, palabra != "Hola");

// // Hello
// while (palabra != "Hola") {
//   palabra = prompt("Ingrese un palabra que comience con H");
//   console.log("La palabra ingresada es: " + palabra);
// }

// Ejercicio

// let number = 1;

// while (number <= 5) {
//   console.log("el numero es: " + number);
//   number++;
// }

// let palabra = prompt("ingresa js");

// while (palabra != "js") {
//   palabra = prompt("ingresa js");
//   console.log("la palabra es: " + palabra);
// }

// do ... while

// let text;

// do {
//   text = prompt("Ingresa otra palabra:");
//   console.log(text);
// } while (text !== "js");

// let numero = 1;

// do {
//   console.log(numero);
//   numero++;
// } while (numero <= 3);

// Ejercicio

// let num2;

// do {
//   num2 = prompt("Ingresa el numero 5");
//   console.log("Ingresaste: " + num2);
// } while (num2 !== "5");

// ---

// let numero = 1;

// do {
//   console.log(numero);
//   numero++;
// } while (numero <= 3);

// while (numero <= 3) {
//   console.log(numero);
//   numero++;
// }

// Ejercicio

// let num3 = 2;
// do {
//   console.log(num3);
//   ++num3;
//   ++num3;
// } while (num3 <= 20);

// let numero = 2;
// do {
//   console.log("el numero es: " + numero);
//   numero += 2;
// } while (numero <= 20);

// let i = 2;

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);

// for

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let num1 = 3, num3 = 4;

// for (let i = 20, j = 1; i >= 2; i -= 2, j++) {
//   console.log(i, j);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   if (i === 2) {
//     break;
//   }

//   console.log(i);
// }

// Ejercicio

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//   i++;

//   if (i === 5) {
//     continue;
//   } else if (i === 8) {
//     break;
//   }

//   console.log("el numero es: " + i);
// }

// let num = 1;

// while (num <= 10) {
//   console.log(num);
//   num++;
//   if (num === 5) {
//     continue;
//   } else if (num === 8) {
//     break;
//   }
// }

// let i = 0;

// while (i <= 10) {
//   i++;
//   if (i === 5) {
//     continue;
//   } else if (i === 8) {
//     break;
//   }
//   console.log("el numero es: " + i);
// }

// let i = 0;

// while (i <= 10) {
//   i++;
//   if (i === 5) {
//     continue;
//   } else if (i === 8) {
//     break;
//   }
//   console.log(i);
// }

// ---

debugger;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}
