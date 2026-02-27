export async function getUsers(query) {
  let url;

  if (query == "") {
    url = "https://dummyjson.com/users";
  } else {
    url = "https://dummyjson.com/users/search?q=" + query;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  const data = await response.json();

  // console.log(data);
  return data.users;
}
