// function capitalize(texto) {
//   if (!texto) return "";
//   return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
// }

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//     this.email = null;
//     this.admin = false;
//   }

//   saludar() {
//     return `Hola, me llamo ${this.nombre}`;
//   }

//   setNombre(nombre) {
//     this.nombre = nombre;
//   }

//   getNombre() {
//     return capitalize(String(this.nombre).toLowerCase());
//   }
// }

// const persona1 = new Persona("jUAN pAbLo");

// // persona1.nombre = "Juan Pablo";
// // persona1.setNombre("Juan Pablo");

// // console.log(persona1.nombre);
// console.log(persona1.getNombre());

// // console.log(persona1);
// // console.log(persona1.saludar());

// // const persona2 = new Persona("María");

// // console.log(persona2);
// // console.log(persona2.saludar());

// ---

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = 0;
//   }

//   addStock(cantidad) {
//     if (cantidad < 0) return;
//     this.stock += cantidad;
//   }
// }

// const celular = new Producto("Motorola X", 1000);

// ---

// Crear clase `Libro` con:

// - id
// - titulo
// - autor
// - disponible (true por defecto)

// class Product {
//   constructor(id, titulo, autor, disponible = true) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = disponible;
//   }
// }

// const Libro = new Product(1, "El Quijote", "Miguel de Cervantes");

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }
// }
// const libro1 = new Libro(1, "El profesor", "John Katzenbach");

// console.log(libro1);

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }
// }

// const libro1 = new Libro(1, "El señor de los anillos", "J.R.R. Tolkien");

// console.log(libro1);

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }
// }

// const libro1 = new Libro(22, "quijote", "cervantes");

// console.log(libro1);

// ---

// class Libro {
//   constructor(id, titulo, autor, disponible) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = disponible;
//   }
// }

// const libro1 = new Libro(1, "Juventud", "anonimo", true);

// console.log(libro1);

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }
// }

// const libro1 = new Libro(3, "Jean y sus secuaces", "JS");

// console.log(libro1);

// ---

// Métodos:

// - getTitulo()
// - getAutor()
// - isDisponible()
// - prestar() → cambia disponible a false
// - devolver() → cambia disponible a true

// ---

// class Product {
//   constructor(id, titulo, autor, disponible = true) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = disponible;
//   }

//   getTitulo() {
//     return this.titulo;
//   }

//   getAutor() {
//     return this.autor;
//   }

//   isDisponible() {
//     return this.disponible;
//   }

//   prestar() {
//     if (this.disponible) {
//       this.disponible = false;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   devolver() {
//     if (!this.disponible) {
//       this.disponible = true;
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const Libro = new Product(1, "El Quijote", "Miguel de Cervantes");

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }

//   getTitulo() {
//     return this.titulo;
//   }

//   getAutor() {
//     return this.autor;
//   }

//   isDisponible() {
//     return this.disponible;
//   }

//   prestar() {
//     this.disponible = false;
//   }

//   devolver() {
//     if (!this.disponible) {
//       this.disponible = true;
//       return true;
//     }
//     return false;
//   }
// }

// const libro1 = new Libro(1, "El profesor", "John Katzenbach");

// libro1.prestar();

// console.log(libro1.isDisponible());

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = true;
//   }
//   getTitulo() {
//     return this.titulo;
//   }
//   getAutor() {
//     return this.autor;
//   }
//   isDisponible() {
//     return this.disponible;
//   }
//   prestar() {
//     if (this.disponible) {
//       this.disponible = false;
//       return "Libro prestado correctamente";
//     } else {
//       return "No disponible";
//     }
//   }
//   devolver() {
//     this.disponible = true;
//     return "Libro devuelto";
//   }
// }

// const libro1 = new Libro(22, "Quijote", "Cervantes");

// ---

// class Libro {
//   getTitulo() {
//     return String(this.titulo);
//   }

//   getAutor() {
//     return String(this.autor);
//   }

//   isDisponible() {
//     return Boolean(this.disponible);
//   }

//   prestar() {
//     // if (this.disponible = false) {
//     //     return this.cantidad = true;
//     //     }
//     //     else{
//     //         return false;

//     // }

//     if (this.disponible == true) {
//       this.disponible = false;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   devolver() {
//     // this.disponible = false
//     // !this.disponible es true
//     if (!this.disponible) {
//       this.disponible = true;
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// ---

// class Libro {
//   constructor(id, titulo, autor) {
//     // estos son todos lo que necesitemos, si los vamos a usar
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = false;
//   }
//   getTitulo() {
//     return string(this.titulo).toLowerCase();
//   }

//   getAutor() {
//     return string(this.autor).toLowerCase();
//   }

//   isDisponible() {
//     if (true == this.disponible) {
//       return `${this.titulo} está disponible`;
//     } else {
//       return `Lo sentimos, ${this.titulo} no está disponible actualmente`;
//     }
//   }

//   prestar() {
//     if (!this.disponible) {
//       this.disponible = false;
//       return false;
//     } else {
//       return true;
//     }
//   }

//   devolver() {
//     if (this.disponible) {
//       this.disponible = true;
//       return this.disponible;
//     } else {
//       return false;
//     }
//   }
// }

// const libro1 = new Libro(1, "El señor de los anillos", "J.R.R. Tolkien");

// libro1.isDisponible();

// ---

// class Libro {
//   constructor(id, titulo, autor, disponible) {
//     this.id = id;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.disponible = disponible;
//   }

//   getTitulo() {
//     return this.titulo;
//   }
//   getAutor() {
//     return this.autor;
//   }
//   isDisponible(id) {
//     if (id == 1) {
//       return (this.disponible = true);
//     } else {
//       return (this.disponible = false);
//     }
//   }
// }

// const libro1 = new Libro(2, "Juventud", "anonimo", true);

// const titulo = libro1.getTitulo();
// const autor = libro1.getAutor();

// console.log(titulo);
// console.log(autor);
// console.log(libro1.isDisponible(2));

// ---

class Libro {
  constructor(id, titulo, autor) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
  getTitulo() {
    return this.titulo;
  }
  getAutor() {
    return this.autor;
  }
  isDisponible() {
    return this.disponible;
  }
  prestar() {
    if (this.disponible) {
      this.disponible = false;
      return true;
    } else {
      return false;
    }
  }
  devolver() {
    if (this.disponible) {
      return false;
    } else {
      this.disponible = true;
      return true;
    }
  }
}

// const libro1 = new Libro(22, "Quijote", "Cervantes");

// console.log(libro1.getTitulo());
// console.log(libro1.getAutor());
// console.log(libro1.isDisponible());

// console.log("Prestar 1: " + libro1.prestar());
// console.log(libro1.isDisponible());

// console.log("Prestar 2: " + libro1.prestar());
// console.log(libro1.isDisponible());

// console.log("Devolver: " + libro1.devolver());
// console.log(libro1.isDisponible());

// ---

// const libros = [
//   new Libro(1, "El Quijote", "Miguel de Cervantes"),
//   new Libro(2, "Cien años de soledad", "Gabriel García Márquez"),
//   new Libro(3, "La sombra del viento", "Carlos Ruiz Zafón"),
//   new Libro(4, "El amor en los tiempos del cólera", "Gabriel García Márquez"),
//   new Libro(5, "Don Juan Tenorio", "José"),
// ];

// ---

// class Biblioteca {
//   constructor(libros) {
//     this.libros = libros;
//   }

//   getLibros() {
//     return this.libros;
//   }
// }

// const bibliotecaPisoUno = new Biblioteca(libros);

// console.log(bibliotecaPisoUno);

// ---

// Crear clase `Biblioteca`:

// - constructor(libros)
// - getLibros()
// - addLibro(libro)
// - buscarPorTitulo(texto)
// - prestarLibro(id)
// - devolverLibro(id)

// - countDisponibles()
// - getPrestados()

// - eliminarLibro(id)

// - getAutoresUnicos()

// https://www.w3schools.com/js/js_sets.asp

class Biblioteca {
  constructor(libros = []) {
    this.libros = libros;
  }

  getLibros() {
    return this.libros;
  }

  addLibro(libro) {
    this.libros.push(libro);
  }

  buscarPorTitulo(texto) {
    return this.libros.filter((libro) =>
      libro.getTitulo().toLowerCase().includes(texto.toLowerCase()),
    );
  }

  //   buscarPorTituloEstricto(titulo) {
  //     return this.libros.find(
  //       (libro) => libro.getTitulo().toLowerCase() == titulo.toLowerCase(),
  //     );
  //   }

  findById(id) {
    return this.libros.find((libro) => libro.id === id);
  }

  prestarLibro(id) {
    const libro = this.findById(id);
    // console.log(libro);

    if (!libro) return false;
    return libro.prestar();

    // if (libro) {
    //   return libro.prestar(); // true o false dependiendo de si se pudo prestar o no
    // } else {
    //   return false;
    // }
  }

  devolverLibro(id) {
    const libro = this.findById(id);

    if (!libro) return false;
    return libro.devolver();
    // if (libro) {
    //   return libro.devolver();
    // } else {
    //   return false;
    // }
  }

  countDisponibles() {
    const disponibles = this.libros.filter((libro) => libro.isDisponible());
    return disponibles.length;
  }

  getPrestados() {
    const prestados = this.libros.filter((libro) => !libro.isDisponible());
    return prestados;
  }

  countPrestados() {
    const prestados = this.libros.filter(
      (libro) => libro.isDisponible() == false,
    );
    return prestados.length;
  }

  // eliminarLibro(id) {
  //   const libro = this.findById(id);
  //   if (libro) {
  //     this.libros = this.libros.filter((l) => l.id !== id);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // eliminarLibro(id) {
  //   const eliminado = this.libros.filter((libro) => libro.id != id);
  //   this.libros = eliminado;
  //   return true;
  // }

  eliminarLibro(id) {
    const libro = this.findById(id);
    if (!libro) return false;

    const cantidadAntes = this.libros.length;
    this.libros = this.libros.filter((libro) => libro.id != id);
    // console.log(this.libros.length, cantidadAntes);
    return this.libros.length < cantidadAntes;
  }

  // getAutoresUnicos() {
  //   const autores = this.libros.map((libro) => libro.getAutor());
  //   const autoresUnicos = new Set(autores);
  //   return autoresUnicos;
  // }

  // countAutoresUnicos() {
  //   const autores = this.libros.map((libro) => libro.getAutor());
  //   const autoresUnicos = new Set(autores);
  //   return autoresUnicos.size;
  // }

  getAutoresUnicos() {
    const autores = this.libros.map((libro) => libro.getAutor());
    console.log(new Set(autores));
    // Spread
    return [...new Set(autores)];
  }

  countAutoresUnicos() {
    const autores = this.libros.map((libro) => libro.getAutor());
    // console.log(new Set(autores));
    // Spread
    return [...new Set(autores)].length;
  }
}

const libros = [
  new Libro(1, "El Quijote", "Miguel de Cervantes"),
  new Libro(2, "Cien años de soledad", "Gabriel García Márquez"),
  new Libro(3, "La sombra del viento", "Carlos Ruiz Zafón"),
  new Libro(4, "El amor en los tiempos del cólera", "Gabriel García Márquez"),
];

const bibliotecaPisoUno = new Biblioteca(libros);

console.log(bibliotecaPisoUno.getAutoresUnicos());

// console.log(bibliotecaPisoUno.eliminarLibro(45));

// bibliotecaPisoUno.prestarLibro(2);
// bibliotecaPisoUno.prestarLibro(4);

// // console.log(bibliotecaPisoUno.countDisponibles());
// console.log(bibliotecaPisoUno.getPrestados());
// console.log(bibliotecaPisoUno.countPrestados());

// const libroNuevo = new Libro(3, "El principito", "Antoine de Saint-Exupéry");
// bibliotecaPisoUno.addLibro(libroNuevo);

// console.log(bibliotecaPisoUno.getLibros());

// const filtrados = bibliotecaPisoUno.buscarPorTitulo("el");
// console.log(filtrados);

// const elLibro = bibliotecaPisoUno.buscarPorTituloEstricto("El Quijote");
// console.log(elLibro);

// let prestar = bibliotecaPisoUno.prestarLibro(2);
// console.log(prestar);

// prestar = bibliotecaPisoUno.prestarLibro(1);
// console.log(prestar);
