export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  const users = await response.json();

  return users;
}
