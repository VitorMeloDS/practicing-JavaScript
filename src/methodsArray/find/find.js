/*
 * Find é uma função nativa do JavaScript que retorno o primeiro elemento que satisfazer as condições
 * que forem posta.
 */

// Example with array the objects
let arrayObject = [
  {
    nome: 'Luiz',
    idade: 40
  },
  {
    nome: 'John',
    idade: 29
  },
  {
    nome: 'Carlos',
    idade: 37
  }
];

// * FInd element with name 'Jhon'
let findElement = arrayObject.find((element) => {
  if (element.nome === 'John') 
    return element;
});

console.log('Array of object =>', findElement); // * { nome: 'John', idade: 29 }


// * Example with array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find element with value 5
let result = array.find(element => element === 5);

console.log('Array =>', result); // * 5