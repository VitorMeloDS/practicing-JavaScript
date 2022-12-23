
/*
 * Filter é uma função nativa do JavaScript criada para filtrar valores de uma lista
 * e retorna uma nova lista mantendo a lista original.
 */

/**
 * 
 * @param {array} array Array de valores que será filtrada.
 * @param {string} key String que representa a propriedade do objeto.
 * @param {number | string} value String ou Number que deseja usar como valor para comparação para os valores iguais.
 */
function valuesDistinct(array, key, value) {
  return array.filter((elemento) => {
    return elemento[key] !== value;
  });
}

let arrayObject = [
  {
    nome: 'Carlos',
    idade: 40
  },
  {
    nome: 'John',
    idade: 29
  },
  {
    nome: 'Carlos',
    idade: 40
  }
];

let arrayObjectReturn = [];

// * Removendo os valores repeitos pela propriedade 'nome'
arrayObjectReturn = valuesDistinct(arrayObject, 'nome', 'Carlos'); // * Retorno [ { nome: 'John', idade: 29 } ].

console.log("Removendo os valores repeitos pela propriedade 'nome'");

console.log('Array the object with values original =>', arrayObject); // Array de objetos original.

console.log('Array the object with values distinct =>',arrayObjectReturn); // * Array de objetos sem os valores duplicados.


// * Removendo os valores repeitos pela propriedade 'idade'
arrayObjectReturn = valuesDistinct(arrayObject, 'idade', 40); // * Retorno [ { nome: 'John', idade: 29 } ].

console.log("\n\nRemovendo os valores repeitos pela propriedade 'idade'");

console.log('Array the object with values original =>', arrayObject); // Array de objetos original.

console.log('Array the object with values distinct =>',arrayObjectReturn); // * Array de objetos sem os valores duplicados.
