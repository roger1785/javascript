import { filterProducts } from "../js/logic.js";

describe("filterProducts", () => {
  it("filtra por coincidencia en el título", () => {
    const products = [{ title: "Camisa" }, { title: "Zapato" }];

    const result = filterProducts(products, "cam");

    assert.deepEqual(result, [{ title: "Camisa" }]);
  });

  it("devuelve todos si query está vacío", () => {
    const products = [{ title: "Camisa" }, { title: "Zapato" }];

    const result = filterProducts(products, "");

    assert.deepEqual(result, products);
  });

  it("devuelve array vacío si no hay coincidencias", () => {
    const products = [{ title: "Camisa" }];

    const result = filterProducts(products, "Laptop");

    assert.deepEqual(result, []);
  });

  it("ignora espacios en query", () => {
    const products = [{ title: "Camisa" }, { title: "Zapato" }];

    const result = filterProducts(products, "   cam   ");

    assert.deepEqual(result, [{ title: "Camisa" }]);
  });
});
