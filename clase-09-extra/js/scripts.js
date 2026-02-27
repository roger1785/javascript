// const array = [1, "Juan", "Calle 123", true, false, ["user", "editor"]];

const personas = [
  { nombre: "Ana", edad: 22, admin: true },
  { nombre: "Juan", direccion: "Calle 123", edad: 17 },
  { nombre: "Pedro", edad: 30 },
];

console.log(personas);

// function esMayorDeEdad(persona) {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const esMayorDeEdad = function (persona) {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const esMayorDeEdad = (persona) => {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const esMayorDeEdad = (persona) => persona.edad >= 18;

// console.log(esMayorDeEdad(personas[1]));

//                              3
// for (let i = 0; i < personas.length; i++) { // i = 3
//   console.log(personas[i]);
// }

// let i = 0;

// while (i < personas.length) {
//   console.log(personas[i]);
//   i++;
// }

// function mostrar(persona) {
//   console.log(persona);
// }

// const mostrar = function (persona) {
//   console.log(persona);
// };

// const mostrar = persona => console.log(persona);

// personas.forEach((persona) => console.log(persona));

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Mostrar en la consola "Ana tiene 22 años" por cada persona

// personas.forEach((persona) => {
//   console.log(persona.nombre + " tiene " + persona.edad + " años");
// });

// personas.forEach((persona) => {
//   console.log(`${persona.nombre} tiene ${persona.edad} años`);
// });

// const lista = document.getElementById("lista");
// const lista = document.querySelector("#lista");

// // console.log(lista.textContent);

// const li = document.createElement("li");
// li.textContent = `${personas[0].nombre} tiene ${personas[0].edad} años`;

// // console.log(li.textContent);

// lista.appendChild(li);

// lista.innerHTML += `<li>${personas[0].nombre} tiene ${personas[0].edad} años</li>`;

// console.log(lista.innerHTML);

// let num = 1;

// num = num + 2;
// num += 2;

const esMayorDeEdad = (persona) => persona.edad >= 18;

const lista = document.querySelector("#lista");

personas.forEach((persona) => {
  const li = document.createElement("li");
  li.textContent = `${persona.nombre} tiene ${persona.edad} años`;

  //   if (esMayorDeEdad(persona)) {
  //     li.style.color = "green";
  //   } else {
  //     li.style.color = "red";
  //   }

  li.style.color = esMayorDeEdad(persona) ? "green" : "red";

  lista.appendChild(li);
});

// ---

const listaEdad = document.querySelector("#lista-edad");

const input = document.querySelector("#edadMinima");

input.addEventListener("keyup", () => {
  //   console.log(input.value);
  listaEdad.innerHTML = "";

  const edad = input.value;

  personas.forEach((persona) => {
    // edad <= persona.edad
    if (persona.edad >= edad) {
      const li = document.createElement("li");
      li.textContent = `${persona.nombre} tiene ${persona.edad} años`;

      listaEdad.appendChild(li);
    }
  });
});
