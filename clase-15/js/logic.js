export function mapUserNames(users) {
  return users.map((user) => user.name);
}

//                         Er || er
export function filterUsers(users, query) {
  // const filtrados = users.filter((user) =>
  //   user.name.toLowerCase().includes(query.toLowerCase()),
  // );

  // return filtrados;

  return users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );
}
