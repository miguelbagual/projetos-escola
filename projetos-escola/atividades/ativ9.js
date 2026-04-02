let tempo = 12
let nome = "Miguel"

function horaAtual(tempo, nome){
    if(tempo>=12&tempo<=17){
        console.log(`Boa tarde ${nome}!`);
    }
    else if(tempo>=18&&tempo<=23){
        console.log(`Boa noite ${nome}!`);
    }
    else{
        console.log(`Bom dia ${nome}!`);
    }
}

horaAtual(tempo,nome);
