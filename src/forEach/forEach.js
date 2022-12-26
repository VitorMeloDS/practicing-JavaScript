/*
 * forEach é um método mativo do javaScript usado para percorrer os elementos de uma array.
 */

/**
 * 
 * @param {array} array Lista de valores a serem percorridos.
 */
function courseArray(array) {
  let count = 0;
  array.forEach((elemento) => {
    count++;
    console.log(`${count}º elemento: ${elemento}`);
  });
}

let values = ['Casa', 'Carro', 'Televisão', 'Computador'];

courseArray(values);
