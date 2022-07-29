var entrada = require('readline-sync');

do{
    idade = entrada.question("Informe sua idade..: ");
    if (idade >= 18){
        console.log("Você pode acessar a Rede Social");
    }else{
        console.log("Você NAO pode acessar a Rede Social");
    }
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
} while(opcao == 's')