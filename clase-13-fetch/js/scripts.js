// const promise = fetch("https://fakestoreapi.com/products/1");

// promise
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((product) => console.log(product));

// fetch

// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async / await

// async function mostrarProducto() {
//   const response = await fetch("https://fakestoreapi.com/products/1");
//   const product = await response.json();
//   console.log(product);

//   document.querySelector("#titulo").textContent = product.title;
//   document.querySelector("#precio").textContent = `$ ${product.price}`;

//   const imagen = document.querySelector("#imagen");
//   imagen.src = product.image;
//   imagen.alt = product.title;
// }

// mostrarProducto();

// ---

function getFavoritos() {
  const texto = localStorage.getItem("favoritos");
  // console.log(texto);
  if (texto == null) return [];
  return JSON.parse(texto);
}

// const favoritos = getFavoritos();
// console.log(favoritos);

function setFavoritos(favoritos = []) {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// setFavoritos([2, 6, 3]);

// console.log([2, 6, 3].includes(4));

function esFavorito(id) {
  const favoritos = getFavoritos(); // [2, 6, 3].includes(4)

  // if (favoritos.includes(id)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return favoritos.includes(id);
}

// console.log(esFavorito(3));

async function mostrarProductos() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log(products);

  const container = document.querySelector("#productos");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const imagen = document.createElement("img");
    const h3 = document.createElement("h3");
    const price = document.createElement("p");
    const btnFavorito = document.createElement("button");

    if (esFavorito(product.id)) {
      btnFavorito.textContent = "Quitar";
    } else {
      btnFavorito.textContent = "Agregar";
    }

    imagen.src = product.image;
    imagen.alt = product.title;
    imagen.width = 150;

    h3.textContent = product.title;

    price.textContent = `$ ${product.price}`;

    btnFavorito.addEventListener("click", () => {
      const favoritos = getFavoritos();

      // if (esFavorito(product.id) == false) {
      // No es favorito
      if (!esFavorito(product.id)) {
        // console.log("Agregar");
        favoritos.push(product.id); // [2, 5, 6, 1]
        setFavoritos(favoritos);
      } else {
        // [2, 5, 6, 1]
        // console.log("Quitar");
        // [2, 5, 1]
        // [2, 5, 6, 1]

        // const numeros = [2, 5, 6, 1];
        // const nuevosNumeros = [];

        // numeros.forEach((numero) => {
        //   if (numero != 6) {
        //     nuevosNumeros.push(numero);
        //   }
        // });

        // console.log(nuevosNumeros);
        // [2, 5, 1]

        // const numeros = [2, 5, 6, 1];
        // const index = numeros.findIndex((item) => item == 6);
        // const numero = numeros.splice(index, 1);
        // console.log(numeros, numero);

        // const nuevosFavoritos = numeros.filter((numero) => numero != 6);
        // console.log(nuevosFavoritos);

        const nuevosFavoritos = favoritos.filter(
          (numero) => numero != product.id,
        );

        setFavoritos(nuevosFavoritos);
      }

      if (esFavorito(product.id)) {
        btnFavorito.textContent = "Quitar";
      } else {
        btnFavorito.textContent = "Agregar";
      }
    });

    card.appendChild(imagen);
    card.appendChild(h3);
    card.appendChild(price);
    card.appendChild(btnFavorito);

    container.appendChild(card);
  });
}

mostrarProductos();

const btnVerProductos = document.querySelector("#btnVerProductos");

btnVerProductos.addEventListener("click", () => {
  mostrarProductos();
});

const btnVerFavoritos = document.querySelector("#btnVerFavoritos");

btnVerFavoritos.addEventListener("click", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log(products);

  const container = document.querySelector("#productos");
  container.innerHTML = "";

  products.forEach((product) => {
    if (esFavorito(product.id)) {
      const card = document.createElement("article");
      card.classList.add("card");

      const imagen = document.createElement("img");
      const h3 = document.createElement("h3");
      const price = document.createElement("p");

      imagen.src = product.image;
      imagen.alt = product.title;
      imagen.width = 150;

      h3.textContent = product.title;

      price.textContent = `$ ${product.price}`;

      card.appendChild(imagen);
      card.appendChild(h3);
      card.appendChild(price);

      container.appendChild(card);
    }
  });
});
