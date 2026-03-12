//Desafio

let nota1 = 5;
let nota2 = 5;
let media = (nota1+nota2)/2;

console.log("Notas:", nota1, nota2);
console.log("Media:", media);

if(media>=7.5){
    console.log("Aprovado");
}
else if(media<7.5&&media>=5){
    console.log("Recuperação");
}
else{
    console.log("Reprovado");
}