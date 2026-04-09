const estoque = ["Memória RAM","Placa de Vídeo", "Processador", "Placa Mãe", "SSD"]; //

estoque.push("Fonte");

let produtosComprados = 3;
let valorTotal = 501;
let quantidadeItens;
let clienteNome = "Miguel"
let clienteIdade = 16;
let possuiCupom = false;
let vendaPossivel;

function processarVenda(valorTotal, possuiCupom){
    let valorFinal = valorTotal>500||possuiCupom==true ? valorTotal=valorTotal*0.85 : valorTotal;
    
    return valorFinal;
}
console.log(`Valor da compra: R$${processarVenda(valorTotal, possuiCupom)}`);

if(clienteIdade>=16){
    console.log(`Venda autorizada para ${clienteNome}`);
    vendaPossivel = true;
}
else{
    console.log(`Venda bloqueada: Idade insuficiente`);
    vendaPossivel = false;
}

console.log("\n")

if(vendaPossivel==true){
    for(let i = 0; i<produtosComprados; i++){
        console.log(`Despachando item: ${estoque[i]}... OK!`);
    }

    for(let i = 0; i<produtosComprados; i++){
        estoque.shift()
    }

quantidadeItens = estoque.length
    console.log("\n")

    console.log(`Relatório da Loja:
Cliente: ${clienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}.
Itens restantes no estoque: ${quantidadeItens}`);
}