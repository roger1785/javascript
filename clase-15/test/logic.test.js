import { filterUsers, mapUserNames } from "../js/logic.js";

describe("filterUsers", function () {
  const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
  ];

  it("Filtrar por nombre", function () {
    const query = "er";

    const filtered = [
      { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    ];

    assert.deepEqual(filterUsers(users, query), filtered);
  });

  it("query vacío", function () {
    const query = "";

    assert.deepEqual(filterUsers(users, query), users);
  });

  it("Sin resultados", function () {
    const query = "algo";

    assert.deepEqual(filterUsers(users, query), []);
  });
});

describe("mapUserNames", function () {
  it("devuelve solo los nombres", function () {
    const users = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    ];

    // const userNames = ["Leanne Graham", "Ervin Howell", "Clementine Bauch"];
    const userNames = users.map((user) => user.name);

    assert.deepEqual(mapUserNames(users), userNames);
  });

  it("si recibe array vacío, devuelve array vacío", function () {
    assert.deepEqual(mapUserNames([]), []);
  });
});
