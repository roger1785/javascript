function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function esperar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         resolve({ mensaje: "OK" });
//       },
//       getRandomIntInclusive(500, 1500),
//     );
//   });
// }

// const promise = esperar();

// promise.then((res) => {
//   console.log(res);
// });

// Ejercicio

function obtenerNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero == 7) {
        resolve(numero);
      } else if (numero == 8) {
        resolve(numero);
      }
    }, 2000);
  });
}

// obtenerNumero(8)
//   .then(function (mensaje) {
//     console.log("THEN:", mensaje);
//   })
//   .catch((error) => console.log(error));

// Ejercicio

// async function ejecutar() {
//   const resultado = await obtenerNumero(8);
//   console.log(resultado);
// }

// ejecutar();

// ---

// async function main() {
//   const mensaje = await obtenerNumero(7);
//   console.log(mensaje);

//   const response = await obtenerNumero(8);
//   console.log(response);
// }

// main();

// --- async / await

// function esperar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         resolve({ mensaje: "OK" });
//       },
//       getRandomIntInclusive(500, 1500),
//     );
//   });
// }

// const ejecutar = async () => {
//   //   esperar().then((response) => {
//   //     console.log(response);
//   //   });

//   const response = await esperar();
//   console.log(response);
// };

// ejecutar();

// ---

// const multiplicar = (num1, num2) => {
//   return new Promise((resolve, reject) => {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//       return reject(new Error("Los argumentos deben ser números"));
//     }

//     setTimeout(
//       () => {
//         resolve({
//           num1,
//           num2,
//           result: num1 * num2,
//         });
//       },
//       getRandomIntInclusive(500, 1500),
//     );
//   });
// };

// // multiplicar("a", 3)
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("Siempre se ejecuta");
// //   });

// // multiplicar(2, 3).then((response) => {
// //   console.log(response);
// // });

// // multiplicar(3, 3).then((response) => {
// //   console.log(response);
// // });

// // multiplicar(1, 3).then((response) => {
// //   console.log(response);

// //   multiplicar(2, 3).then((response) => {
// //     console.log(response);

// //     multiplicar(3, 3).then((response) => {
// //       console.log(response);
// //     });
// //   });
// // });

// // multiplicar(1, 3)
// //   .then((response) => {
// //     console.log(response);

// //     return multiplicar('b', 3);
// //   })
// //   .then((response) => {
// //     console.log(response);

// //     return multiplicar(3, 3);
// //   })
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function tabla() {
//   try {
//     let response = await multiplicar(1, 3);
//     console.log(response);

//     response = await multiplicar(2, "b");
//     console.log(response);

//     response = await multiplicar(3, 3);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Siempre se ejecuta");
//   }
// }

// tabla();

// Ejercicio

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("OK");
//       } else {
//         reject("Error");
//       }
//     }, 2000);
//   });
// }

// // const promise = getData();

// // console.log("Antes de la promesa");

// // promise
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("Fin del proceso");
// //   });

// // console.log("Después de la promesa");

// // async function getData2() {
// //   try {
// //     let response = await getData();
// //     console.log(response);
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     console.log("final del proceso");
// //   }
// // }

// // getData2();

// // ---

// // async function ejecutar() {
// //   try {
// //     const respuesta = await getData();
// //     console.log("Datos recibidos:", respuesta);
// //   } catch (error) {
// //     console.log("Hubo un error:", error);
// //   }
// // }

// // ejecutar();

// // ---

// // async function resuelve() {
// //   try {
// //     let response = await getData();
// //     console.log(response);
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     console.log("Fin del proceso");
// //   }
// // }

// // resuelve();

// // ---

// async function fetchData() {
//   try {
//     const data = await getData();
//     console.log("Datos obtenidos:", data);
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//   } finally {
//     console.log("Operación finalizada");
//   }
// }

// fetchData();

// Promesa

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("OK");
//     // reject("Error");
//   }, 500);
// });

// console.log(promise);

// promise.then((response) => {
//   console.log(response);
// });

// fetch

// const promiseFetch = fetch("https://fakestoreapi.com/products");

// console.log(promiseFetch);

// promiseFetch.then((response) => {
//   console.log(response);
//   //   console.log(response.json());

//   response.json().then((products) => {
//     console.log(products);
//   });
// });

// ---

const promise = fetch("https://fakestoreapi.com/products");

promise.then((response) => {
  response.json().then((products) => {
    console.log(products);
  });
});

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => console.log(products));
