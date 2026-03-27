let nota1 = 10, nota2 = 10;
let media = (nota1+nota2)/2;

if(nota1<0||nota1>10||nota2<0||nota2>10){
    console.log("Dados inválidos.");
}
else if(media>=7){
    console.log("Aprovado.");
}
else if(media>=5&&media<7){
    console.log("Recuperação");
}
else{
    console.log("Reprovado");
}  