//Estrutura de Repetição FOR
console.log("Exemplo com For");
var entrada = require('readline-sync');
num = entrada.question("Informe numero para calcula da tabuada...: ");
for (let i = 1; i <= 10; i++) {
    console.log(num+" x "+i+" = "+num*i);
}

//For com Array
console.log("\nExemplo de For com Array");
var nomes=["Tiago", "Iago Gabriel","João Emanuel","Miguel Henrique","José Rafael"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log("\nExemplo com While");
num = entrada.question("Informe numero para calcula da tabuada...: ");
i = 1;
while (i <= 10){
    console.log(num+" x "+i+" = "+num*i);
    i++;
}

console.log("\nExemplo com While e Pergunta")
var opcao = 's';
while (opcao == 's'){
    console.log("Entrou no While");
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
}
console.log("Já estou fora do While");
console.log("\nEncerrou o programa");


//Exemplo do DO WHILE
console.log("\nExemplo com do while");
i = 1;
do{
    console.log(nomes[i]);
    i++;
} while(i>nomes.length)

console.log("\nExemplo com do while");

do{
    console.log("Entrou no Do While");
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
} while(opcao == 's')