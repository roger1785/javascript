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
}
