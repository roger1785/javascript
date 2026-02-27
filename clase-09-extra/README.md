# Clase 09 Extra

- **Variables** → guardar un dato
- **Condicional (`if`)** → decidir algo
- **Bucle (`for`)** → repetir algo
- **Función** → ordenar o reutilizar lógica
- **DOM** → mostrar / cambiar algo en la página
- **Array** → agrupar datos similares
- **Objeto literales** → agrupar datos relacionados

- **Evento** → esperar que el usuario haga algo

## Funciones

```js
// function saludar(nombre) {
//   return `Hola, ${nombre}!`;
// }

// const saludar = function (nombre) {
//   return `Hola, ${nombre}!`;
// }

const saludar = (nombre) => `Hola, ${nombre}!`;

console.log(saludar("Pedro"));
```

## Operador ternario

```js
const esMayor = personas[1].edad >= 18 ? "Si" : "No";
```
