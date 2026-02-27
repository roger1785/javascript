function isValidCredentials(email, password) {
  if (
    typeof email === "string" &&
    email.trim() !== "" &&
    typeof password === "string" &&
    password.trim() !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

function findUserByCredentials(users, email, password) {
  const found = users.find((u) => u.email === email && u.password === password);

  console.log(found);

  return found;
}

class Session {
  constructor(users) {
    this.users = users;
    this.userId = null;
  }

  login(email, password) {
    let valid = isValidCredentials(email, password);

    if (!valid) {
      this.userId = null;
      return false;
    }

    const user = findUserByCredentials(this.users, email, password); // User || undefined

    if (!user) {
      this.userId = null;
      return false;
    }

    this.userId = user.id;
    return true;
  }

  logout() {
    this.userId = null;
  }

  isLogged() {
    if (this.userId == null) {
      return false;
    } else {
      return true;
    }
  }

  getUserId() {
    return this.userId;
  }

  //   check(email, password) {
  //     if (!email || !password) return false;

  //     const found = this.users.find(
  //       (u) => u.email === email && u.password === password,
  //     );

  //     this.user = found || null;

  //     console.log(found ? "OK" : "FAIL");

  //     return Boolean(found);
  //   }
}

const usuarios = [
  { id: 1, email: "maria@example.com", password: "qwe" },
  { id: 3, email: "juan@example.com", password: "1234" },
];

const session = new Session(usuarios);

console.log(session.login("juan@example.com", "1234")); // true
console.log(session.isLogged()); // true
console.log(session.getUserId()); // 3

session.logout();
console.log(session.isLogged()); // false
