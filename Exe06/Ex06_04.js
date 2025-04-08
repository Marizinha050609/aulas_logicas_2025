//Solicite os parâmetros de início, fim e passo para o laço de repetição usando a função for() e
//exiba o valor atual da variável de controle a cada iteração.
const prompt = require("prompt-sync")()

 let inico = Number(prompt("Digite o valor de inicio: "))
 let fim = Number(prompt("Digite o valor do fim: "))
 let passo = Number(prompt("Digite o valor do passo: "))

 for(inico; inico < fim; inico+= passo ){
    console.log(`Valor iciial: ${inico}`);
    console.log(`Valor final: ${fim}`);
    console.log(`Valor passo: ${passo}`);
    console.log(`==========================`);
    
 }
 