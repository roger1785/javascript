// --- Sincrónico

// const promise = new Promise((resolve, reject) => {
//   resolve("OK");
//   //   reject("Error");
// });

// console.log(promise);

// ---

// setTimeout(() => {

// }, 2000);

// --- Asincronía

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("OK");
//   }, 2000);
// });

// promise.then((response) => {
//   console.log(response);
// });

// ---

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Algo fallo");
  }, 2000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
