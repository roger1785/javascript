export class Store {
  constructor() {
    this.products = [];
    this.filtered = [];
    this.error = null;
    this.loading = false;
    this.loaded = false;
  }

  getProducts() {
    return this.filtered;
  }

  getLoading() {
    return this.loading;
  }

  getLoaded() {
    return this.loaded;
  }

  getError() {
    return this.error;
  }

  setProducts(products) {
    this.products = products;
    this.filtered = products;
    this.loaded = true;
  }

  setLoading(value) {
    this.loading = value;
  }

  setError(value) {
    this.error = value;
  }

  filter(query) {
    const q = query.trim().toLowerCase();

    if (q === "") {
      this.filtered = this.products;
      return;
    }

    this.filtered = this.products.filter((p) =>
      p.title.toLowerCase().includes(q),
    );
  }
}
