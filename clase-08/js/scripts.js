// var num; // Declaración de la variable num, no usar var
// num2 = 1; // Declaración de la variable num2, no usar var

// const num3 = 3; // Declaración de la variable num3 usando const
// let contador = 0; // Declaración de la variable contador usando let

// const products = [];

// --- querySelector y querySelectorAll ---

// const h1 = document.getElementById("titulo");
// const h1 = document.querySelector("#titulo");

// console.log(h1);

// const items = document.querySelectorAll("p");
// console.log(items);

// --- classList ---

// const p = document.querySelector("p");

// // console.log(p.classList);

// p.classList.add("activo");

// Ejercicio

// const p = document.querySelector(`p`);

// p.classList.add(`activo`);

// console.log(p);
// console.log(p.classList);

// --- classList.remove

// const activo = document.querySelector(".activo");
// activo.classList.remove("activo");
// console.log(p.classList);

// Ejercicio

// const p = document.querySelector("p");
// p.classList.add("activo");
// console.log(p.classList);

// p.classList.remove("activo");
// console.log(p.classList);

// classList.contains

// const p = document.querySelector(`p`);

// console.log(p.classList.contains("activo"));

// Ejercicio

// const p = document.querySelector(`p`);

// console.log(p.classList.contains(`activo`));
// console.log(p.classList.contains(`item`));

// --- classList.toggle ---

// const p = document.querySelector(`p`);

// p.classList.toggle("activo");

// Ejercicio

// const p = document.querySelector("p");
// p.classList.toggle("activo");
// console.log(p.classList);

// --- classList.replace

// const p = document.querySelector("p");

// p.classList.replace("item", "destacado");

// Ejercicio

// const p = document.querySelector("p");
// console.log(p.classList.contains("activo"));
// p.classList.toggle("activo");
// console.log(p.classList);

// p.classList.replace("activo", "resaltado");
// console.log(p.classList);

// ---

// const p = document.querySelector("p");
// p.classList.add("activo");
// console.log(p.classList);
// p.classList.replace("activo", "item");
// console.log(p.classList);

// const div = document.querySelector(".inactivo");
// div.classList.replace("activo", "item");
// console.log(div.classList);

// const p = document.querySelector("p");

// p.classList.add("activo");
// console.log(p.classList);

// p.classList.replace("activo", "resaltado");
// console.log(p.classList);

// ---

// const p = document.querySelector("p");

// // p.style.color = "green";
// // p.style.fontWeight = "bold";
// // p.style.fontSize = "20px";
// // p.style.backgroundColor = "lightgrey";

// p.classList.add("resaltado");

// --- createElement

// const p = document.createElement("p");
// p.textContent = "Nuevo Párrafo";
// p.classList.add("activo");

// // console.log(p);

// // const body = document.body;
// // body.append(p);
// // body.prepend(p);

// const div = document.querySelector("#contenedor");
// div.append(p);

// Ejercicio

// const p = document.createElement(`p`);
// p.textContent = `muevo parrafo`;

// const body = document.body;

// body.append(p);

// ---

// const p = document.createElement("p");
// p.textContent = "Nuevo Párrafo";
// p.classList.add("activo");

// const div = document.querySelector("#contenedor");
// div.prepend(p);

// p.textContent = "otro texto";

// // document.body.append(p);

// --- after y before

// const p = document.createElement("p");
// p.textContent = "Nuevo Párrafo";
// p.classList.add("activo");

// const item1 = document.querySelector(".item-1");

// // item1.after(p);
// item1.before(p);

// Ejercicio

// const p = document.createElement("p");
// p.textContent = "Párrafo delante";
// p.classList.add("activo");

// const p2 = document.createElement("p2");
// p2.textContent = "Párrafo detrás";
// p2.classList.add("activo");

// const item1 = document.querySelector(".item");

// item1.after(p2);
// item1.before(p);

// ---

// const p = document.createElement("p");
// p.textContent = "Párrafo creado dinámicamente";
// p.style.color = "blue";
// p.classList.add("activo");

// const body = document.body;
// body.append(p);

// const p1 = document.createElement("p");
// p1.textContent = "Hola";
// const item1 = document.querySelector(".item");

// item1.after(p1);
// item1.before(p);

// ---

// const contenedor = document.querySelector("#contenedor");

// const elementoNuevo = document.createElement(`section`);
// elementoNuevo.classList.add(`rojo`);

// elementoNuevo.innerHTML = `<h3>Contenido de elemento nuevo </h3>`;

// contenedor.after(elementoNuevo);

// remove

// const item2 = document.querySelector(".item-2");

// item2.remove();

// children

// const contenedor = document.querySelector("#contenedor");

// const p = document.createElement("p");
// p.textContent = "Párrafo creado dinámicamente";
// p.style.color = "blue";
// p.classList.add("activo");

// contenedor.appendChild(p);

// const items = contenedor.children;
// // contenedor.removeChild(items[1]);

// // const item2 = document.querySelector(".item-2");
// // contenedor.removeChild(item2);

// // const div = document.querySelector(".inactivo");
// // console.log(div);
// // contenedor.removeChild(div);

// console.log(items);

// Ejercicio

// const p1 = document.createElement("p");
// p1.textContent = "Hola";

// const contenedor = document.querySelector("#contenedor");
// contenedor.appendChild(p1);

// const eliminar = document.createElement("p");
// eliminar.textContent = "Este párrafo será eliminado";
// document.body.appendChild(eliminar);

// document.body.removeChild(eliminar);

// ---

// const div = document.querySelector("#contenedor");

// console.log(div.children);
// const items = div.children;

// div.removeChild(items[0]);

// console.log(div.children);

// div.removeChild(items[0]);

// console.log(div.children);

// ---

// const p = document.createElement("p");
// const contenedor = document.querySelector("#contenedor");
// p.textContent = "Parrafo creado dinamicamente";
// p.style.color = "blue";
// p.classList.add("activo");
// contenedor.appendChild(p);
// const items = contenedor.children;
// console.log(items);

// items[0].remove(); // elimina
// items[items.length - 1].remove(); // elimina
