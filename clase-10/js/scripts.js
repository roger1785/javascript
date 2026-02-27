// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(`Has hecho clic en el ${item.textContent}`);
//   });
// });

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("item")) {
//     console.log(`Has hecho clic en el ${event.target.textContent}`);
//   }

//   //   console.log(event.target.id);
//   //   console.log("Has hecho clic en algún lugar del documento");
// });

// const p = document.createElement("p");
// p.textContent = "Este es un nuevo párrafo creado con JavaScript.";
// p.classList.add("item");

// const contenedor = document.getElementById("contenedor");
// contenedor.appendChild(p);

// --- Desestructuración ---

// --- Arrays ---

// const colores = ["red", "green", "blue"];

// // console.log(colores[0]);
// // console.log(colores[1]);
// // console.log(colores[2]);

// // let rojo = colores[0];
// // let azul = colores[2];

// // let [rojo, , azul] = colores;

// rojo = "Un color rojo";

// console.log(colores[0]);
// console.log(rojo);

// console.log(colores[1]);
// // console.log(verde);

// console.log(colores[2]);
// console.log(azul);

// ---

// const personas = [
//   { nombre: "Ana", edad: 22 },
//   { nombre: "Juan", edad: 17 },
//   { nombre: "Pedro", edad: 30 },
// ];

// // const userAna = personas[0];
// // const userJuan = personas[1];
// // const userPedro = personas[2];

// const [userAna, userJuan, userPedro] = personas;

// // userAna.nombre = "Ana María";
// // personas[1].edad = 18;

// // const user = personas;
// // user.push({ nombre: "María", edad: 29 });

// Ejercicio

// const numeros = [10, 20, 30];

// let [a, b, c] = numeros;

// b += 2;

// console.log(a, b, c, numeros);

// --- Objetos

// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 17,
// };

// // const nombre = persona.nombre;
// // const edad = persona.edad;

// let { edad, nombre } = persona;

// // nombre = "Juan Pablo";

// console.log(edad, nombre);

// Ejercicio

// const precio = 1000;

// const producto = {
//   nombre: "Mouse",
//   precio: 5000,
//   stock: 10,
// };

// const {
//   nombre: nombreProducto,
//   precio: precioProducto,
//   stock: stockProducto,
// } = producto;

// console.log(nombreProducto);
// console.log(precioProducto);
// console.log(stockProducto);

// const producto = {
//   nombre: "Mouse",
//   precio: 5000,
//   stock: 10,
// };

// let { nombre, precio } = producto;
// console.log(`El producto ${nombre} cuesta ${precio} $`);

// console.log(
//   new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(
//     precio,
//   ),
// );

// ---

// const productos = [
//   { nombre: "Mouse", precio: 5000, stock: 10 },
//   { nombre: "Teclado", precio: 8000, stock: 5 },
//   { nombre: "Monitor", precio: 15000, stock: 3 },
// ];

// const [, { precio }] = productos;

// const [, producto] = productos;
// const { precio } = producto;

// console.log(8000)

// let [mouse, teclado, monitor] = productos;
// console.log(teclado.precio);

// const { precio } = teclado;

// console.log(precio); // 8000
// console.log(productos[1].precio); // 8000

// const [, , { nombre, stock }] = productos;

// console.log(nombre, stock);

// ---

// const numeros = [1, 2, 5];

// const [a, b, c] = numeros;

// const user = {
//   email: "x@x.com",
//   password: "1234",
// };

// const { password, email } = user;

// Rest Operator

// const numeros = [1, 2, 3, 4, 5];

// const [a, b, ...nums] = numeros;

// // nums[1] = 30;

// console.log(a, b, nums);

// Ejercicio

// let nombres = ["Ana", "Juan", "Pedro", "Lucía"];

// let [primero, ...resto] = nombres;
// console.log(primero);
// console.log(resto);

// let nombres = ["Ana", "Juan", "Pedro", "Lucía"];

// let [primero, ...resto] = nombres;

// console.log("Primero:", primero);
// console.log("Resto:", resto);

// let nombres = ["Ana", "Juan", "Pedro", "Lucía"];

// const [user1, user2, user3, user4, ...resto] = nombres;

// console.log(user1, user2, user3, user4, resto);

// let nombres = ["Ana", "Juan", "Pedro", "Lucía"];

// const [nombre1, ...otrosNombres] = nombres;

// console.log(nombre1);
// console.log(otrosNombres[2]);

// Rest Operator en funciones

// let num = 0;

// // num++

// num = num + 3
// num += 3;

// function sumar(num1, num2, ...numeros) {
//   console.log(num1, num2);
//   let suma = num1 + num2;
//   //   for (let i = 0; i < numeros.length; i++) {
//   //     suma += numeros[i];
//   //   }
//   numeros.forEach((numero) => {
//     suma += numero;
//   });
//   return suma;
// }

// function sumar(...numeros) {
//   let suma = 0;
//   //   for (let i = 0; i < numeros.length; i++) {
//   //     suma += numeros[i];
//   //   }
//   numeros.forEach((numero) => {
//     suma += numero;
//   });
//   return suma;
// }

// const suma = sumar(2, 5, 7, 6, 8, 10, 16);

// console.log("La suma es:", suma);

// Ejercicio

// const promedioNotas = (...notas) => {
//   let suma = 0;

//   for (let nota of notas) {
//     suma += nota;
//   }

//   return suma / notas.length;
// };

// console.log(promedioNotas(7, 8, 9, 10));

// const notas = getPromedio(0, 5, 9, 10, 5, 6);
// console.log(notas.toFixed(2));

// function getPromedio(...notas) {
//   let promedio = 0;
//   notas.forEach((nota) => {
//     promedio += nota;
//   });
//   promedio = promedio / notas.length;
//   return promedio;
// }

// Spread Operator

// Array

// Combinando un array

// const nums1 = [1, 2];
// const nums2 = [3, 4];

// const numeros = [...nums1, ...nums2];

// // const numeros = [1, 2, 3, 4]

// console.log(numeros);

// Clonando un array

// const nums1 = [1, 2];

// const numeros = [...nums1];

// Objetos

// const persona = { nombre: "Ana", edad: 25 };

// const user = { ...persona };

// --- 

// let personas = [
//   { nombre: "Ana", edad: 22 },
//   { nombre: "Juan", edad: 17 },
// ];

// function agregarPersona(...elementos) {
//   personas = [...personas, ...elementos];
// }

// // const users = [
// //   { nombre: "Pedro", edad: 30 },
// //   { nombre: "María", edad: 29 },
// // ];

// // agregarPersona(users);

// agregarPersona({ nombre: "Pedro", edad: 30 }, { nombre: "María", edad: 29 });

// console.log(personas);
