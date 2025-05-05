const contarPares = vetor => vetor.filter(numero => numero % 2 === 0).length;
console.log(contarPares([2, 3, 7, 4, 6]));