/*
Atalho comentario de várias linhas
alt + shift + A

Desafio: Criar uma função que receba preco e desconto em %, e mostre o valor final com desconto 
Crie outra função que receba preço e quantidade e mostre o valor total da compra.
*/

function calcularDesconto(preco, desconto){
    const valDesconto = (preco*(desconto/100));
    return valDesconto;
}

function calcularValorEquantidade(preco, quantidade){
    const valQuant = preco*quantidade;
    return valQuant;
}

console.log(`O desconto foi de R$${calcularDesconto(50, 50)}`);
console.log(`Valor total ${calcularValorEquantidade(10, 10)}`);