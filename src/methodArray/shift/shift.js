
/*
 * Shift é uma função nativa do JavaScript que remove o primeiro elemento da array 
 * .e retorna o mesmo.
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8];

// * Remove first element of array
let firstElement = array.shift(); // * Return 1

console.log('Element removed =>', firstElement); // * 1

console.log('New Array =>', array); // * [2, 3, 4, 5, 6, 7, 8]
