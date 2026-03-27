let idade = 18
let possuiConvite = true

let entradaPermitida = idade>=18&&possuiConvite==true ? "Entrada permitida (ternário)" : "Entrada barrada (ternário)"
console.log(entradaPermitida)

if(idade>=18&&possuiConvite==true){
    console.log("Entrada permitida (if)");
}
else{
    console.log("Entrada barrada (else)");
}