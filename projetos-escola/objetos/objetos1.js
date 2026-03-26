const aluno = {
    nome: "Miguel",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno); 
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2026A";
delete aluno.curso;

console.log(aluno);