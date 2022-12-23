/*
 * Map é uma função nativa do JavaScript criada para alterar os valores de uma lista de valores
 * e retornar uma nova lista mantendo a lista anterior.
 */
/**
 * 
 * @param {array<number>} a Lista de valores a serem multiplicados.
 * @param {number} b Valor que irá multiplicar os valores da lista.
 * @returns {array<number>} Lista com os valores multiplicados.
 */
function multiplier (array, multiplicador) {
  return array.map((elemento) => {
    return elemento * multiplicador;
  });
}

let arrayValues = [1,2,3];
let arrayReturn = [];

arrayReturn = multiplier(arrayValues, 2); // * Retorna [2, 4, 6].

console.log(arrayValues); // * Lista com os valores originais.
console.log(arrayReturn); // * Lista com os valores da lista original multiplicados pelo valor passado.
