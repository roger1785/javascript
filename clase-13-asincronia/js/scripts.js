// console.log("Inicio");

// setTimeout(() => {
//   console.log("Tarea terminada");
// }, 2000);

// console.log("Fin");

// Ejercicio

// console.log("hola soy la A");

// setTimeout(() => {
//   console.log("hola soy la B");
// }, 2000);

// console.log("hola soy la C");

// ---

// console.log("esto va primero");

// setTimeout(() => {
//   console.log("mensaje de retraso");
// }, 2000);

// ---

// function login(usuario) {
//   //   console.log(usuario);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// console.log("Validar usuario");

// // const promesa = login("Juan");

// // promesa.then((mensaje) => {
// //   console.log(mensaje);
// // });

// login("Juan").then((mensaje) => {
//   console.log(mensaje);
// });

// console.log("Otras tareas");

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 2000);
//   });
// }

// console.log("Iniciar pedido");

// procesarPedido().then((pedido) => {
//   console.log(pedido);
// });

// ---

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 2000);
//   });
// }

// validarPago()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---

// function login(usuario) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// // login("Juan").then((mensaje) => {
// //   console.log(mensaje);
// // });

// async function iniciarSeccion() {
//   const mensaje = await login("María");
//   console.log(mensaje);
// }

// iniciarSeccion()

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 2000);
//   });
// }

// // procesarPedido().then((pedido) => {
// //   console.log(pedido);
// // });

// async function iniciar() {
//   const pedido = await procesarPedido();
//   console.log(pedido);
// }

// iniciar();

// ---

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 2000);
//   });
// }

// // validarPago()
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function iniciar() {
//   try {
//     const response = await validarPago();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// iniciar();

// ---

// function validar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });
// }

// // then
// validar().then((response) => {
//   console.log(response);
// });

// // await
// // async function iniciar() {
// //   const response = await validar();
// //   console.log(response);
// // }

// async function validarPago() {
//   const response = await validar();
//   console.log(response);
// }

function validarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Usuario validado");
    }, 2000);
  });
}

function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos cargados");
    }, 1500);
  });
}

// validarUsuario().then((response) => {
//   console.log(response);

//   cargarDatos().then((datos) => {
//     console.log(datos);
//   });
// });

// validarUsuario()
//   .then((response) => {
//     console.log(response);

//     return cargarDatos();
//   })
//   .then((datos) => {
//     console.log(datos);
//   });

// async function usuario() {
//   console.log("Iniciar proceso");

//   const response = await validarUsuario();
//   console.log(response);

//   const datos = await cargarDatos();
//   console.log(datos);

//   console.log("Fin del proceso");
// }

// usuario();

// Ejercicio

// function guardarPerfil() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Perfil guardado");
//     }, 1000);
//   });
// }

// async function validar() {
//   console.log("Validando...");
//   const resultado = await guardarPerfil();
//   console.log(resultado);
// }

// validar();

// ---

// function guardarPerfil() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Perfil guardado");
//     }, 1000);
//   });
// }

// // guardarPerfil().then((response) => {
// //   console.log(response);
// // });

// async function guardar() {
//   console.log("Guardando...");

//   const perfil = await guardarPerfil();
//   console.log(perfil);
// }

// guardar();

// Ejercicio

// async function iniciar() {
//   const resultado1 = await validarUsuario();
//   console.log(resultado1);

//   const resultado2 = await cargarDatos();
//   console.log(resultado2);

//   const resultado3 = await guardarPerfil();
//   console.log(resultado3);

//   console.log("Sessión iniciada");
// }

// iniciar();

// ---

// async function Usuario() {
//   console.log("Iniciando proceso");

//   const response = await validarUsuario();
//   console.log(response);

//   const datos = await cargarDatos();
//   console.log(datos);

//   const perfil = await guardarPerfil();
//   console.log(perfil);

//   console.log("sesión iniciada");
// }

// Usuario();

// function validarUsuario() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Usuario validado");
//     }, 2000);
//   });
// }

// function cargarDatos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Datos cargados");
//     }, 1500);
//   });
// }

// function guardarPerfil() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Perfil guardado");
//     }, 1000);
//   });
// }

// async function user() {
//   const response = await validarUsuario();
//   console.log(response);

//   const datosCargados = await cargarDatos();
//   console.log(datosCargados);

//   const perfilValidado = await guardarPerfil();
//   console.log(perfilValidado);
// }

// user();

// ---

// function procesarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pedido procesado");
//     }, 3000);
//   });
// }

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pago validado");
//     }, 2000);
//   });
// }

// function confirmarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pedido confirmado");
//     }, 1000);
//   });
// }

// async function realizarCompra() {
//   const resultado1 = await procesarPedido();
//   console.log(resultado1);

//   const resultado2 = await validarPago();
//   console.log(resultado2);

//   const resultado3 = await confirmarPedido();
//   console.log(resultado3);

//   console.log("Compra realizada");
// }

// realizarCompra();

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 2000);
//   });
// }

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 1000);
//   });
// }

// function confirmarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Este es el pedido");
//     }, 1500);
//   });
// }

// async function pedido() {
//   const procesar = await procesarPedido();
//   console.log(procesar);

//   const pago = await validarPago();
//   console.log(pago);

//   const confirmar = await confirmarPedido();
//   console.log(confirmar);
// }

// pedido();

// ---

// function procesarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("procesando pedido");
//     }, 2000);
//   });
// }

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("validando pago");
//     }, 2000);
//   });
// }

// function confirmarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pedido confirmado exitosamente");
//     }, 1000);
//   });
// }

// async function pedido() {
//   const procesado = await procesarPedido();
//   console.log(procesado);

//   const validacionPago = await validarPago();
//   console.log(validacionPago);

//   const pedidoConfirmado = await confirmarPedido();
//   console.log(pedidoConfirmado);
// }

// pedido();

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 1000);
//   });
// }

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 2000);
//   });
// }

// function confirmarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("pedido procesado");
//     }, 3000);
//   });
// }

// async function checkout() {
//   const response = await procesarPedido();
//   console.log(response);

//   const datosCargados = await validarPago();
//   console.log(datosCargados);

//   const perfilValidado = await confirmarPedido();
//   console.log(perfilValidado);
// }

// checkout();

// ---

// function confirmarPedido() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("pedido procesado");
//     }, 3000);
//   });
// }

// confirmarPedido().then((response) => {
//   console.log(response);
// });

// const pedido = confirmarPedido();
// console.log(pedido);

// const response = fetch("https://fakestoreapi.com/products/1");
// console.log(response);

// const promesa = fetch("https://fakestoreapi.com/products/1");

// promesa.then((response) => {
//   console.log(response);
// });

// fetch("https://fakestoreapi.com/products/1").then((response) => {
//   console.log(response);

//   response.json().then((datos) => {
//     console.log(datos);
//   });
// });

// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((datos) => {
//     console.log(datos);
//   });

// ---

// async function obtenerProducto() {
//   const response = await fetch("https://fakestoreapi.com/products/1");
//   console.log(response);

//   const datos = await response.json();
//   console.log(datos);
// }

// obtenerProducto();

// ---

// async function datos() {
//   const procesaFetch = await fetch("https://fakestoreapi.com/products/1");
//   console.log(procesaFetch);

//   const procesaJson = await procesaFetch.json();
//   console.log(procesaJson);
// }

// datos();

// --_

// async function recuperarDatos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const datos = await response.json();
//   console.log(datos);
// }
// recuperarDatos();

// ---

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);

//   const datos = await response.json();
//   console.log(datos);
// }

// getData();
