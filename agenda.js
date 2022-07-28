let alunos = [];
var entrada = require('readline-sync');

console.log("Cadastro de Alunos");
opcao = 's';
while (opcao == 's'){
    aluno = entrada.question("Informe o Nome do Aluno...: ");
    alunos.push(aluno);
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
}

console.log("Programa Encerrado!!!")

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index]);    
}