function calcularTotal (preco1, preco2) {
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); //somar

console.log(resultado);

//desafio: imprimir concatenando e com template string

console.log("O preco do produto é", resultado);
console.log(`O preco do produto é ${resultado}`);