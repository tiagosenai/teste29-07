//Variáveis do tipo array para armazenar o evento e data de realização
let eventos = [];
let dataevento = [];

var entrada = require('readline-sync');

console.log("Cadastro de Eventos");
opcao = 's';
while (opcao == 's'){
    data = entrada.question("Data do Evento ...: ");
    //Gravando informação no array
    dataevento.push(data);
    evento = entrada.question("Nome do Evento ...: ");
    //Gravando informação no array
    eventos.push(evento);
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
}

qtdeEventos = eventos.length;

console.log("Programa Encerrado!!!\n");

console.log(qtdeEventos+" Eventos Cadastrados");

for (let index = 0; index < dataevento.length; index++) {
    console.log("Data..: "+dataevento[index] + " - Nome..: "+eventos[index]);
}