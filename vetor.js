let pecas = [];

var entrada = require('readline-sync');

console.log("Cadastro de Eventos");
opcao = 's';
while (opcao == 's'){
    peca = entrada.question("Descrição ...: ");
    valor = entrada.question("Valor ...: ");
    pecas.push(peca,valor);
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
}

for (let index = 0; index < pecas.length; index++) {
    console.log(pecas[index]);
}