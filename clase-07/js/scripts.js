// const titulo = document.getElementById("titulo");

// console.log(titulo.textContent);

// titulo.textContent = "JavaScript básico";

// Ejercicio

// const titulo = document.getElementById("subtitulo");

// console.log(titulo.textContent);

// titulo.textContent = "subtitulo modificado";

// ---

// const textos = document.getElementsByClassName("texto");

// console.log(textos);
// console.log(textos.length);
// console.log(textos[1])

// for (let i = 0; i < textos.length; i++) {
//     console.log(textos[i])
// }

// Ejercicio

// const descripciones = document.getElementsByClassName("textos");

// console.log(descripciones);

// console.log(descripciones.length);

// // console.log(descripciones.length, 2);

// if (descripciones.length >= 2) {
//   descripciones[0].textContent = "Descripción de autos";
//   descripciones[1].textContent = "Descripción de motos";

//   console.log(descripciones[0]?.textContent);
//   console.log(descripciones[1]?.textContent);

//   for (let i = 0; i < descripciones.length; i++) {
//     console.log(descripciones[i]);
//   }
// }

// const textos = document.getElementsByClassName("texto");

// console.log(textos);

// console.log(textos.length);

// for (let i = 0; i < textos.length; i++) {
//   textos[i];
// }

// ---

// const subtitulo = document.getElementById("subtitulo");

// console.log(subtitulo.style);

// subtitulo.style.color = "red";
// subtitulo.style.fontSize  = '5px'

// Ejercicio

// const descripciones = document.getElementsByClassName("texto");

// descripciones[0].style.color = "red";
// descripciones[0].style.fontSize = "20px";
// descripciones[1].style.color = "blue";
// descripciones[1].style.fontSize = "30px";

// descripciones[0].style.backgroundColor = "yellow";
// descripciones[1].style.backgroundColor = "lightgrey";

// const estiloParrafo = document.getElementsByClassName("texto");

// for (let i = 0; i < estiloParrafo.length; i++) {
//   estiloParrafo[i].style.fontSize = "30px";
//   estiloParrafo[i].style.color = "red";
// }

// const parrafos = document.getElementById("subtitulo");

// console.log(parrafos);
// parrafos.style.color = "blue";
// parrafos.style.fontSize = "20px";
// parrafos.style.backgroundColor = "lightgray";

// const parrafos = document.getElementsByClassName("texto");

// console.log(parrafos);

// parrafos[0].style.color = "red";
// parrafos[1].style.color = "blue";

// console.log(parrafos);

// for (let i = 0; i < parrafos.length; i++) {
//   parrafos[i].style.color = "green";
// }

// ---

// const textos = document.getElementsByTagName("p");

// console.log(textos);

// Ejercicio

// const estiloParrafo = document.getElementsByTagName("p");
// for (let i = 0; i < estiloParrafo.length; i++) {
//   estiloParrafo[i].style.fontSize = "30px";
//   estiloParrafo[i].style.color = "red";
// }

// const pararafos = document.getElementsByTagName("p");

// for (let i = 0; i < pararafos.length; i++) {
//   pararafos[i].style.color = "green";
// }

// ---

// const parrafo = document.querySelector("#otro-parrafo");
// const parrafo = document.querySelector("p");

// console.log(parrafo);

// Ejercicio

// const title = document.querySelector(`h1`);
// title.style.color = `blue`;

// const primerParrafo = document.querySelector(`p`);
// primerParrafo.style.color = `blue`;

// ---

// const parrafos = document.querySelectorAll("p");

// console.log(parrafos);

// parrafos.forEach(function (parrafo) {
//   parrafo.style.color = "red";
// });

// Ejercicio

// const parrafosDescripcion = document.querySelectorAll("p");

// parrafosDescripcion.forEach((element) => {
//   element.textContent = "Párrafo modificado con querySelectorAll";
// });

// const parrafo = document.querySelectorAll("p");

// parrafo.forEach(p => p.style.fontSize = "50px");

// const parrafos = document.querySelectorAll("p");

// // console.log(parrafos);

// parrafos.forEach(function (colorP, index) {
//   colorP.style.color = "green";

//   colorP.textContent = `Item ${index + 1}`;
// });
// // parrafos[0].textContent = "contenido primer parrafo";
// // parrafos[1].textContent = "contenido segundo parrafo";
// // parrafos[2].textContent = "contenido tercer parrafo";
// // parrafos[3].textContent = "contenido cuarto parrafo";

// ---

// const h2 = document.querySelector("h2");

// h2.setAttribute("id", "seccion");
// const id = h2.getAttribute("id");
// // h2.setAttribute("class", "destacado");
// // h2.removeAttribute("id");

// console.log(id);

// const input = document.querySelector("#nombre");

// // input.setAttribute("value", "Pedro");
// // input.setAttribute("type", "password");

// console.log(input.value);
// input.value = "María";

// Ejercicio

// const h2 = document.querySelector("h2");

// const h2a = h2.getAttribute("id");

// h2.setAttribute("class", "atth2");

// h2.removeAttribute("class", "atth2");

// const input = document.querySelector("#boton");

// input.value = "submit";

// console.log(input.value);

// ---

const main = document.querySelector("main");

main.innerHTML = "<h2>Sección principal</h2>";

main.innerHTML += `
    <p class="texto">Párrafo 11</p>
    <p class="texto">Párrafo 21</p>
`;
