// const user = {
//   name: "Juan",
//   saludar() {
//     return `Mi nombre es: ${this.name}`;
//   },
// };

// console.log(user, user.saludar());

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   saludar() {
//     return `Mi nombre es: ${this.name}`;
//   }
// }

// const userJuan = new User("Juan"); // instancia

// console.log(userJuan, userJuan.saludar());

// ---

// const producto = {
//   nombre: "Producto genérico",
//   precio: 100,
//   descripcion: "Sin descripción",
//   enStock: false,
//   detalle() {
//     return `El ${this.nombre} tiene valor de: $${this.precio}`;
//   },
// };

// console.log(producto);
// console.log(producto.detalle());

// ---

// class Producto {
//   constructor(nombre, precio, descripcion) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.descripcion = descripcion;
//     this.enStock = false;
//     this.stock = 0;
//   }

//   detalle() {
//     return `El ${this.nombre} tiene valor de: $${this.precio}`;
//   }
// }

// const productoGenerico = new Producto(
//   "Producto Genérico",
//   150,
//   "Sin descripción",
// );

// console.log(productoGenerico);
// console.log(productoGenerico.detalle());

// ---

// class Session {
//   constructor() {
//     this.userId = null;
//   }

//   check(email, password) {
//     const userFind = users.find(
//       (u) => email === u.email && password === u.password,
//     );

//     if (userFind) {
//       this.userId = userFind.id;
//       return true;
//     }

//     return false;
//   }
// }

// ---

// class Session {
//   constructor() {
//     this.iniciada = false;
//     this.userId = null;
//   }

//   Check(email, password) {
//     const user = users.find(
//       (u) => u.email === email && u.password === password,
//     );

//     if (user) {
//       this.userId = user.id;
//       this.iniciada = true;
//       return true;
//     }

//     return false;
//   }
// }

// ---

// class Session {
//   constructor() {
//     this.user = null;
//   }
//   check(email, password) {
//     const usersFind = users.find(
//       (user) => user.email === email && user.password === password,
//     );
//     if (usersFind) {
//       this.user = usersFind;
//       return true;
//     } else {
//       return false;
//     }
//   }
//   getUser() {
//     return this.user;
//   }
// }

// ---

// class checkUser {
//   constructor() {
//     this.userId = null;
//   }

//   check(email, password) {
//     const userFind = users.find(
//       (u) => email == u.email && password == u.password,
//     );

//     if (userFind) {
//       this.userId = userFind.id;
//       return true;
//     }

//     return false;
//   }
// }

// ---

// const usuarios = [
//   { id: 1, email: "maria@example.com", password: "qwe" },
//   { id: 3, email: "juan@example.com", password: "1234" },
// ];

// const user = {
//   name: "Juan",
//   email: "juan@example.com",
//   password: "1234",
// };

// // const session = {
// //   userId: null,
// //   check(email, password) {
// //     const userFind = users.find(
// //       (u) => email == u.email && password == u.password,
// //     );

// //     if (userFind) {
// //       this.userId = userFind.id;
// //     }
// //   },
// // };

// // session.check(user.email, user.password);

// class checkUser {
//   constructor(users) {
//     this.users = users;
//     this.userId = null;
//   }

//   check(email, password) {
//     const userFind = this.users.find(
//       (u) => email == u.email && password == u.password,
//     );

//     if (userFind) {
//       this.userId = userFind.id;
//       return true;
//     }

//     return false;
//   }
// }

// const session = new checkUser(usuarios);

// console.log(session);

// session.check(user.email, user.password);

// console.log(session);

// // ---

// // class Producto {
// //   constructor(nombre) {
// //     this.nombre = nombre;
// //   }
// // }

// // const producto1 = new Producto("Producto 1");

const jsonProductos = [
  { id: 1, title: "Producto 1", price: 100, oferta: true },
  { id: 2, title: "Producto 2", price: 200, oferta: false },
  { id: 3, title: "Producto 3", price: 300, oferta: true },
  { id: 4, title: "Producto 4", price: 400, oferta: false },
  { id: 5, title: "Producto 5", price: 500, oferta: true },
];

class Producto {
  constructor(id, title, price, oferta) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.oferta = oferta;
  }

  getOferta() {
    this.oferta;
  }
}

class Catalogo {
  // Array de instancias de Producto
  constructor(productos) {
    this.productos = productos;
  }

  getOfertas() {
    return this.productos.filter((p) => p.getOferta() == true);
  }
}

// const productos = [];

// jsonProductos.forEach((p) => {
//   // { id: 1, title: "Producto 1", price: 100, oferta: true }
//   const producto = new Producto(p.id, p.title, p.price, p.oferta);
//   // console.log(producto);
//   productos.push(producto);
// });

// p = { id: 1, title: "Producto 1", price: 100, oferta: true }
const productos = jsonProductos.map(
  (p) => new Producto(p.id, p.title, p.price, p.oferta),
);

console.log(productos);

const catalogo = new Catalogo(productos);

console.log(catalogo);
console.log(catalogo.getOfertas());
