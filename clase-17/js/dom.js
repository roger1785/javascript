export function renderProducts(products, listEl) {
  listEl.textContent = "";

  products.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title} — $${p.price}`;
    listEl.appendChild(li);
  });
}

export function setStatus(statusEl, message) {
  if (!message) {
    statusEl.hidden = true;
    statusEl.textContent = "";
    return;
  }
  statusEl.hidden = false;
  statusEl.textContent = message;
}
