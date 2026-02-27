// Sincrónico

// console.log("Paso 1");
// console.log("Paso 2");
// console.log("Paso 3");

// Asincrónico

// console.log("Paso 1"); // 500ms
// console.log("Paso 2"); // 2s
// console.log("Paso 3"); // 100ms

// setTimeout

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Esto aparece después");
// }, 2000);

// console.log("Fin");

// ---

// setTimeout(() => {
//   console.log("A");
// }, 0); // milisegundos

// console.log("B");

// Ejercicio

// console.log("Antes");

// setTimeout(() => {
//   console.log("Al final, después de 3s");
// }, 3000);

// console.log("Después");

// ---

// setTimeout(() => {
//   console.log("hola antes");
// }, 3000);

// console.log("ciao");

// Callbacks

// --- Función declarada

// function saludar(callback) {
//   console.log("Preparando saludo");
//   callback();
// }

// function hola() {
//   console.log("Hola!!!");
// }

// saludar(hola);

// --- función expresada

// const saludar = function (callback) {
//   console.log("Preparando saludo");
//   callback();
// };

// const hola = function () {
//   console.log("Hola!!!");
// };

// saludar(hola);

// --- función flecha

// const saludar = (callback) => {
//   console.log("Preparando saludo");
//   callback();
// };

// const hola = () => console.log("Hola!!!");

// saludar(hola);

// ---

// const saludar = (callback) => {
//   console.log("Preparando saludo");
//   callback();
// };

// saludar(() => {
//   console.log("Hola!!!");
// });

// Ejercicio

// function saludar(callback) {
//   setTimeout(() => {
//     callback();
//   }, 3000);
// }

// const hola = function () {
//   console.log("Hola, soy una función que saluda");
// };

// const hola2 = function () {
//   console.log("Hola, soy otra función que saluda");
// };

// saludar(hola);
// saludar(hola2);

// ---

// const saludo = function (callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// saludo(() => {
//   console.log("prueba");
// });

// ---

// function saludar(cb) {
//   setTimeout(() => {
//     console.log("ciao 2");
//     cb();
//   }, 2000);
// }

// function hola() {
//   console.log("Ciao 1");
// }

// saludar(hola);

// ---

// const mensaje = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 3000);
// };

// mensaje(() => console.log("Este es el mensaje con retraso"));

// Promesas

// const promesa = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Operación exitosa");
//   } else {
//     reject("Error");
//   }
// });

// console.log(promesa);

// Ejercicio

// const promesas = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve("Se ha solucionado");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// console.log(promesas);

// ---

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve("Operacion exitosa");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// console.log(promesa);

// ---

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve("La operación se ejecuto normalmente");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Ejercicio

// const num = 1;

// // const comprobador = (num) => {
// const comprobador = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (num > 10) {
//       resolve("El número es mayor que 10");
//     } else {
//       reject("El número es menor o igual a 10");
//     }
//   }, 2000);
// });
// // };

// // console.log(typeof comprobador);

// comprobador
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = 2;
//     if (success > 10) {
//       resolve("El numero es mayor a 10");
//     } else {
//       reject("el numero NO es mayor a 10");
//     }
//   }, 2000);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---

// function verificarNumero(numero) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (numero > 10) {
//         resolve("El número es mayor que 10 ");
//       } else {
//         reject("El número NO es mayor que 10 ");
//       }
//     }, 2000);
//   });
// }

// verificarNumero(15)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const promesas = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = 5;
//     if (success > 10) {
//       resolve("succees");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// promesas
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---

// function multiplicar(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//       return reject("Los argumentos no son números");
//     }

//     // console.log("1");

//     setTimeout(() => {
//       resolve({
//         num1: num1,
//         num2,
//         resultado: num1 * num2,
//       });
//     }, 1000);
//   });
// }

// const promise = multiplicar(3, 2);

// promise
//   .then((response) => {
//     console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // console.log("3");

// // // console.log(algo);

// // setTimeout(() => {
// //   console.log("2");
// // }, 3000);

// --- finally

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;

//     if (success) {
//       resolve("OK");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// promesa
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Siempre se ejecuta");
//   });

// Ejercicio

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("OK");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("proceso terminado");
//   });

// ---

// // Obtener un número entero aleatorio entre dos valores (incluyendo ambos)

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const comprobador = new Promise((resolve, reject) => {
//   const numero = getRandomIntInclusive(1, 20);
//   if (numero > 10) {
//     resolve("El número es mayor que: " + numero);
//   } else {
//     reject("El número es menor o igual a: " + numero);
//   }
// });

// comprobador
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Esto se ejecuta siempre, independientemente del resultado");
//   });

// ---

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = 2;
//     if (success > 10) {
//       resolve("El numero es mayor a 10");
//     } else {
//       reject("el numero NO es mayor a 10");
//     }
//   }, 2000);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Punto final");
//   });

// const promesas = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = 5;
//     if (success > 10) {
//       resolve("succees");
//     } else {
//       reject("Error");
//     }
//   }, 2000);
// });

// promesas
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Ejecucion finalizada");
//   });

// ---

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({ datos: [1, 2, 3] });
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

const promise = getData();

console.log("Antes de la promesa");

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fin del proceso");
  });

console.log("Después de la promesa");
