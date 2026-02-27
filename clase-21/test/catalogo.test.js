import { Biblioteca } from "../js/Biblioteca.js";
import { Libro } from "../js/Libro.js";

import { countResults, isValidQuery } from "../js/logic.js";

describe("Clase Biblioteca", () => {
  let b;

  beforeEach(() => {
    b = new Biblioteca([
      new Libro(1, "Clean Code", "Robert"),
      new Libro(2, "Eloquent JavaScript", "Marijn"),
      new Libro(3, "You Don't Know JS", "Kyle"),
      new Libro(4, "Otro JS", "Kyle"),
    ]);
  });

  it("countDisponibles devuelve 4 al inicio", () => {
    assert.equal(b.countDisponibles(), 4);
  });

  it("prestarLibro reduce disponibles", () => {
    assert.isTrue(b.prestarLibro(3));
    assert.equal(b.countDisponibles(), 3);
  });

  it("devolverLibro vuelve a aumentar disponibles", () => {
    assert.isTrue(b.prestarLibro(3));
    // assert.equal(b.countDisponibles(), 3);

    assert.isTrue(b.devolverLibro(3));
    assert.equal(b.countDisponibles(), 4);
  });

  it("prestarLibro con id inexistente devuelve false", () => {
    assert.isFalse(b.prestarLibro(33));
  });

  it("buscarPorTitulo filtra por texto (case-insensitive)", () => {
    const results = b.buscarPorTitulo("js");

    // [
    //   new Libro(3, "You Don't Know JS", "Kyle"),
    //   new Libro(4, "Otro JS", "Kyle"),
    // ]

    const ids = results.map((libro) => libro.id);

    // console.log(ids);
    // [3, 4];

    assert.deepEqual(ids, [3, 4]);
  });

  it("getPrestados devuelve solo los no disponibles", () => {
    assert.isTrue(b.prestarLibro(2));
    assert.isTrue(b.prestarLibro(3));

    const prestados = b.getPrestados();

    // console.log(prestados);

    const ids = prestados.map((libro) => libro.id);

    assert.deepEqual(ids, [2, 3]);
  });

  it("eliminarLibro elimina y devuelve true si existía", () => {
    assert.isTrue(b.prestarLibro(2));
    assert.isTrue(b.eliminarLibro(3));

    // const disponibles = b.countDisponibles();
    // // console.log(disponibles);
    // assert.equal(disponibles, 3);

    const libros = b.getLibros();
    // console.log(libros);

    assert.equal(libros.length, 3);

    const ids = libros.map((libro) => libro.id);

    assert.deepEqual(ids, [1, 2, 4]);
  });
});

describe("Clase Libro", function () {
  let libro;

  beforeEach(() => {
    libro = new Libro(5, "Uno", "Dos");
  });

  it("inicia disponible en true", () => {
    assert.isTrue(libro.isDisponible());
  });

  it("prestar cambia disponible a false", () => {
    assert.isTrue(libro.prestar());
    assert.isFalse(libro.isDisponible());
  });

  it("prestar dos veces: la segunda falla", () => {
    assert.isTrue(libro.prestar());
    assert.isFalse(libro.prestar());
  });

  it("devolver vuelve disponible a true", () => {
    assert.isTrue(libro.prestar());

    assert.isTrue(libro.devolver());
    assert.isTrue(libro.isDisponible());
  });
});

describe("Lógica", () => {
  it("countResults devuelve cantidad", () => {
    const numbers = [1, 4, 5, 6];
    let cantidad = countResults(numbers);

    assert.equal(cantidad, 4);
  });

  it("countResults devuelve 0 en un array vacío", () => {
    const empty = [];
    let cantidad = countResults(empty);

    assert.equal(cantidad, 0);
  });

  it("isValidQuery requiere al menos 3 caracteres", () => {
    assert.isFalse(isValidQuery());
    assert.isFalse(isValidQuery("ab"));
    assert.isFalse(isValidQuery("   ab   "));

    assert.isTrue(isValidQuery("abc"));
    assert.isTrue(isValidQuery("    abcd   "));
  });
});
