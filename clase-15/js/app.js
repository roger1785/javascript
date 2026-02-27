const search = document.querySelector("#search");
const button = document.querySelector("#load");
const lista = document.querySelector("#lista");

// button.addEventListener("click", async () => {
//   lista.textContent = "Cargando...";

//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();

//   lista.textContent = "";

//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = user.name;

//     lista.appendChild(li);
//   });
// });

let usersState = [];

import { getUsers } from "./api.js";
import { renderUsers } from "./dom.js";
import { filterUsers } from "./logic.js";

button.addEventListener("click", async () => {
  try {
    lista.textContent = "Cargando...";

    usersState = await getUsers();

    renderUsers(usersState, lista);
  } catch (error) {
    lista.textContent = error.message;
  }
});

// search.addEventListener("search", (event) => {
//   // console.log(event.target.value)
//   const filtered = filterUsers(usersState, event.target.value);
//   renderUsers(filtered, lista);
// });

search.addEventListener("input", (event) => {
  // console.log(event.target.value)
  const filtered = filterUsers(usersState, event.target.value);
  renderUsers(filtered, lista);
});

// const users = [
//   { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
//   { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
//   { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
// ];

// // const userNames = users.map((user) => user.name);

// // console.log(userNames, users);

// import { mapUserNames } from "./logic.js";

// const userNames = mapUserNames(users);

// console.log(userNames, users);
