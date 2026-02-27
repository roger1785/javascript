export class Biblioteca {
  constructor(libros = []) {
    this.libros = libros;
  }

  getLibros() {
    return [...this.libros]; // devuelve una copia del array, evitando modificaciones externas
    // return this.libros;
  }

  addLibro(libro) {
    const exists = this.libros.some((l) => l.getId() === libro.getId());
    if (exists) return false;
    this.libros.push(libro);
    return true;
  }

  buscarPorTitulo(texto) {
    const q = String(texto ?? "")
      .trim()
      .toLowerCase();
    if (!q) return this.getLibros();
    return this.libros.filter((l) => l.getTitulo().toLowerCase().includes(q));
  }

  findById(id) {
    return this.libros.find((l) => l.getId() === id) ?? null;
  }

  prestarLibro(id) {
    const libro = this.findById(id);
    // console.log(libro, !null)
    if (!libro) return false;
    return libro.prestar();
  }

  devolverLibro(id) {
    const libro = this.findById(id);
    if (!libro) return false;
    return libro.devolver();
  }

  countDisponibles() {
    return this.libros.filter((l) => l.isDisponible()).length;
  }

  getPrestados() {
    return this.libros.filter((l) => !l.isDisponible());
  }

  eliminarLibro(id) {
    const before = this.libros.length; // 4
    this.libros = this.libros.filter((l) => l.getId() !== id); // 3
    return this.libros.length !== before;
  }

  getAutoresUnicos() {
    const autores = this.libros.map((l) => l.getAutor());
    return [...new Set(autores)];
  }
}
