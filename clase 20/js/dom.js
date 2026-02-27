export function renderList(users) {
  const lista = document.querySelector("#list");

  lista.textContent = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;
    lista.appendChild(li);
  });
}
