export function renderUsers(users, container) {
  container.textContent = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;

    container.appendChild(li);
  });
}
