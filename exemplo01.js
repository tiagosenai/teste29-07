//Declaração das Variáveis onde vamos guardar os valores
var nota1, nota2, nota3, media;

//Importação da biblioteca realine-sync para pegar os dados
//digitados no teclado
var entrada = require('readline-sync');

for (contador=1; contador<=3; contador++){
    console.log("Cálculo da Média do "+contador+"º aluno");
//Solicitando e pegando as notas
//OBS: parseFloat faz a conversão de um tipo texto para numérico(Float)
nota1 = parseFloat(entrada.question("Informe a Primeira Nota..: "));
nota2 = parseFloat(entrada.question("Informe a Segunda Nota...: "));
nota3 = parseFloat(entrada.question("Informe a Terceira Nota..: "));

//processamento- Cálculo da Média
media = (nota1+nota2+nota3)/3;
//saída: exibindo a média do aluno
console.log("Média..: "+media);

//Estrutura de Decisão - Condição
if (media >= 7)
    console.log("APROVADOOOOO!");
else
    console.log("Reprovado");
}