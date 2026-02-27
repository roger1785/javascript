// data
const products = [
  { id: 1, title: "Camisa", price: 100, oferta: true },
  { id: 2, title: "Zapato", price: 200, oferta: false },
  { id: 3, title: "Gorra", price: 50, oferta: true },
  { id: 4, title: "Pantalón", price: 150, oferta: false },
];

/*
- DOM
  - document.querySelector
  - list.innerHTML = "";
  - const li = document.createElement("li");

- Lógica
  - filtered = filtered.filter((p) => p.title.toLowerCase().includes(query));

- Internet
  - fetch()

- Coordinación
  - loadProducts()
*/

// DOM
function getQuery() {
  // const input = document.querySelector("#search");
  // return input.value.trim().toLowerCase();

  return document.querySelector("#search").value.trim().toLowerCase();
}

// DOM
function getOnlyOffers() {
  // const checkBox = document.querySelector("#onlyOffers");
  // return checkBox.checked;

  return document.querySelector("#onlyOffers").checked;
}

// Lógica
function filterByQuery(products, query) {
  return products.filter((p) => p.title.toLowerCase().includes(query));
}

// Lógica
function filterByOffers(products, onlyOffers) {
  // if (!onlyOffers) return products;
  // return products.filter((p) => p.oferta === true);

  let filtered = products;

  if (onlyOffers) {
    filtered = products.filter((p) => p.oferta === true);
  }

  return filtered;
}

function countProducts(products) {
  return products.length;
}

// Coordinación
function applyFilters(products, query, onlyOffers) {
  const filtered = filterByQuery(products, query);
  return filterByOffers(filtered, onlyOffers);
}

// DOM
function renderList(products) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  products.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title} - $${p.price} ${p.oferta ? "(Oferta)" : ""}`;
    list.appendChild(li);
  });
}

// DOM
function renderMessage(products) {
  const msg = document.querySelector("#msg");
  msg.textContent = products.length === 0 ? "Sin resultados" : "";
}

function renderResults(total) {
  const counter = document.querySelector("#counter");
  counter.textContent = `Resultados: ${total}`;
}

// Coordinación
function renderAndFilter() {
  const query = getQuery();
  const onlyOffers = getOnlyOffers();

  // let filtered = filterByQuery(products, query);
  // filtered = filterByOffers(filtered, onlyOffers);

  const filtered = applyFilters(products, query, onlyOffers);

  const total = countProducts(filtered);
  renderResults(total);

  renderList(filtered);
  renderMessage(filtered);
}

renderAndFilter();

document.querySelector("#search").addEventListener("keyup", renderAndFilter);

document
  .querySelector("#onlyOffers")
  .addEventListener("change", renderAndFilter);

// Crear archivos para dom, logic, products y pasar lo que corresponda a cada uno. Importar lo necesario en app.js y probar que todo siga funcionando.
