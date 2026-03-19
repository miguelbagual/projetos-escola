const numeros = [1, 2, 3, 4, 5, 8];

//adicionar elementos

numeros[0] = 100;
numeros.push(20);

console.log(numeros);
console.log(numeros.indexOf(5));
console.log(numeros.includes(6));
console.log(numeros.join("  |  "));

const valores = [200, 300, 400];
console.log(numeros.concat(valores));