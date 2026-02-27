const btnCambiarTema = document.querySelector("#btnCambiarTema");

const tema = localStorage.getItem("tema");

if (tema == "dark") {
  document.body.classList.add("dark");
}

btnCambiarTema.addEventListener("click", () => {
  //   console.log("Click");
  //   document.body.classList.add("dark");
  //   console.log(document.body.classList.contains("dark"));

  //   if (document.body.classList.contains("dark")) {
  //     document.body.classList.remove("dark");
  //   } else {
  //     document.body.classList.add("dark");
  //   }

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }

  //   console.log(document.body.className);

  //   if (document.body.classList.value == "dark orange") {
  //     document.body.classList.value = "";
  //   }
});
