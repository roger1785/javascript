// fetch("https://dummyjson.com/users")
//   .then((response) => response.json())
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error.message));

// ---

// async function getUsers() {
//   const response = await fetch("https://dummyjson.com/users");
//   const users = await response.json();

//   console.log(users);
// }

// getUsers();

// ---

// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const users = await response.json();

//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();

// ---

// dom / ui -> elementos de HTML
// logic -> filtrar, buscar, calcular
// api -> internet

import { getUsers } from "./api.js";
import { renderList } from "./dom.js";

// function loadUsers() {
//   getUsers()
//     .then((users) => {
//       console.log(users);

//       const lista = document.querySelector("#list");
//       users.forEach((user) => {
//         const li = document.createElement("li");
//         li.textContent = `${user.firstName} ${user.lastName}`;
//         lista.appendChild(li);
//       });
//     })
//     .catch((error) => {
//       console.log("Error al cargar usuarios:", error.message);
//     });
// }

async function loadUsers() {
  try {
    const query = document.querySelector("#search").value.trim().toLowerCase();
    // console.log(!query, query == "", query);

    const users = await getUsers(query);
    console.log(users);

    // console.log(
    //   users
    //     .map((user) => `<li>${user.firstName} ${user.lastName}</li>`)
    //     .join()
    // );

    // document.querySelector("#list").innerHTML = users
    //   .map((user) => `<li>${user.firstName} ${user.lastName}</li>`)
    //   .join();

    // const userList = document.querySelector("#list");
    // users.forEach((user) => {
    //   const listItem = document.createElement("li");
    //   listItem.textContent = `${user.firstName} ${user.lastName}`;
    //   userList.appendChild(listItem);
    // });

    renderList(users);
  } catch (error) {
    console.log(error.message);
  }
}

document.querySelector("#load").addEventListener("click", loadUsers);
document.querySelector("#search").addEventListener("keyup", (event) => {
  //   console.log(event);
  if (event.key == "Enter") {
    loadUsers();
  }
});
