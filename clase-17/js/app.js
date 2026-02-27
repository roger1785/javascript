import { getProducts } from "./api.js";
import { renderProducts, setStatus } from "./dom.js";
import { filterProducts } from "./logic.js";
import { Store } from "./store.js";

const load = document.querySelector("#load");
const search = document.querySelector("#search");
const list = document.querySelector("#list");
const status = document.querySelector("#status");
const btnClear = document.querySelector("#clear");

const store = new Store();

const state = {
  products: [],
  filtered: [],
  error: null,
  loading: false,
  loaded: false,
};

function reset() {
  search.value = "";
  state.error = null;
  state.filtered = state.products;
  setStatus(status, "");
}

function handleClear() {
  reset();
  state.filtered = state.products;
  renderProducts(state.filtered, list);
}

async function loadProducts() {
  try {
    reset();
    store.setLoading(true);
    store.setError(null);
    setStatus(status, "Cargando...");

    const data = await getProducts();

    store.setProducts(data);

    renderProducts(store.getProducts(), list);
    setStatus(status, "");
  } catch (error) {
    store.setError(error.message);
    setStatus(status, store.getError());
  } finally {
    store.setLoading(false);
    // console.log(store.getLoading());
  }
}

function handleSearch(e) {
  if (!store.getLoaded()) {
    setStatus(status, "Primero tenes que cargar los productos");
    return;
  }

  const query = e.target.value;
  // state.filtered = filterProducts(state.products, query);
  store.filter(query);

  if (state.filtered.length == 0) {
    setStatus(status, "Sin resultados");
  } else {
    setStatus(status, "");
  }

  renderProducts(store.getProducts(), list);
}

btnClear.addEventListener("click", handleClear);
load.addEventListener("click", loadProducts);
search.addEventListener("input", handleSearch);
