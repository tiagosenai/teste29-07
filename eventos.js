//Variáveis do tipo array para armazenar o evento e data de realização
let eventos = [];
let dataevento = [];

var entrada = require('readline-sync');

console.log("Cadastro de Eventos");
opcao = 's';
while (opcao == 's'){
    data = entrada.question("Informe a Data do Evento - Ex: 08/08/2022 ...: ");
    dataevento.push(data);
    evento = entrada.question("Informe o Nome do Evento - Ex: Carnaval ...: ");
    eventos.push(evento);
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
}

console.log("Programa Encerrado!!!")

for (let index = 0; index < dataevento.length; index++) {
    console.log("Data..: "+dataevento[index] + " - Nome..: "+eventos[index]);
}