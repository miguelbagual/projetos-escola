const estoque = ["Memória RAM","Placa de Vídeo", "Processador", "Placa Mãe", "SSD"];       //Criação do estoque com produtos

estoque.push("Fonte");      //Adicionando mais um produto ao estoque

//Declaração das variaveis
let produtosComprados = 3;
let valorTotal = 501;
let quantidadeItens;
let clienteNome = "Miguel"
let clienteIdade = 16;
let possuiCupom = false;
let vendaPossivel;

//Função para o desconto
function processarVenda(valorTotal, possuiCupom){
    let valorFinal = valorTotal>500||possuiCupom==true ? valorTotal=valorTotal*0.85 : valorTotal;       //Se o valor total for maior que 500, ou se possuir cupom for true, aplicar 15% de desconto.
    
    return valorFinal;
}
console.log(`Valor da compra: R$${processarVenda(valorTotal, possuiCupom)}`);      //Exibindo o return da função.

//If para verificar a idade, se maior que 16, a venda é autorizada.
if(clienteIdade>=16){
    console.log(`Venda autorizada para ${clienteNome}`);
    vendaPossivel = true;       //Variavel venda possivel, para caso cliente seja menor que 16, nao permitir a venda.
}
else{
    console.log(`Venda bloqueada: Idade insuficiente`);
    vendaPossivel = false;
}

console.log("\n")      //Espaço em branco para organizar

//Se a venda for possivel (cliente maior que 16 anos)
if(vendaPossivel==true){
    for(let i = 0; i<produtosComprados; i++){       //Loop for com variavel produtos comprados, para facilitar o uso do programa.
        console.log(`Despachando item: ${estoque[i]}... OK!`);      //estoque[i], o console.log vai mostrar o produto correspondente a iteração do loop for.
    }

    for(let i = 0; i<produtosComprados; i++){      //Outro for, para nao cortar os produtos antes do console.log
        estoque.shift()      //Remover o primeiro produto.
    }

quantidadeItens = estoque.length      //Definir variavel quantidade de itens como a quantidade de itens do estoque.

console.log("\n")      //Espaço em branco para organizar

//Ultimo console.log para fazer um relatório da compra.
    console.log(`Relatório da Loja:
Cliente: ${clienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}.
Itens restantes no estoque: ${quantidadeItens}`); 
}