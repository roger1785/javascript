const titulo = document.getElementById("tituloLista");
const lista = document.querySelector("#lista");

titulo.textContent = "Mis tareas";
titulo.classList.add("activo");
titulo.classList.add("destacado");

const p = document.createElement("p");
p.textContent = "Nuevo párrafo";
p.classList.add("item");

lista.appendChild(p);

// console.log(lista.children);

const items = lista.children;

for (let i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  items[i].classList.add("activo");
}

// items[1].remove();

lista.removeChild(items[1]);
