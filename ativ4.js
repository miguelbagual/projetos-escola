let desconto ,preco = 6000
let temDesconto = preco>=100 ? desconto=true : desconto=false;
let precoFinal = desconto==true ? console.log(`O preco após o desconto será de: R$${preco*0.9}`) : console.log(`Sem desconto, preco ainda é R$${preco}`);
