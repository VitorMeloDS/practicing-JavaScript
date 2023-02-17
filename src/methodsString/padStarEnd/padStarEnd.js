/*
 * The padStart and padEnd methods are native to JavaScript, these methods add numbers and/or strings to the left
 * and on the right respectively.
 */


/**
 * 
 * @param {string} value String for incrementing the caracter.
 * @param {string | number} qtd Number of decimal places you want the String to have.
 * @param {string | number} repor Caracter for incrementing the velue.
 * @returns 
 */
 function addLeft(value, qtd, repor) {
    return value.padStart(qtd, repor);
  }
  
  /**
   * 
   * @param {string} value String for incrementing the caracter.
   * @param {string | number} qtd Number of decimal places you want the String to have.
   * @param {string | number} repor Caracter for incrementing the velue.
   * @returns 
   */
  function addRight(value, qtd, repor) {
    return value.padEnd(qtd, repor);
  }
  
  let codigo = '8';
  let nome = 'nome';
  
  console.log(addLeft(codigo, '5', 0));
  // Returns 00008.
  
  console.log(addRight(nome, 8, 'a'));
  // returns nomeaaaa.