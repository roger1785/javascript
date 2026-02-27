export class Libro {
  constructor(id, titulo, autor) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  getId() {
    return this.id;
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
    if (!this.disponible) return false;
    this.disponible = false;
    return true;
  }

  devolver() {
    if (this.disponible) return false;
    this.disponible = true;
    return true;
  }
}
    