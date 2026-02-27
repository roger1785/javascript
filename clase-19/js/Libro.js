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
