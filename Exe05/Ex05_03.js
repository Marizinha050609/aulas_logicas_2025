//Receba alguns números e verifique a soma e a quantidade de todos os pares e ímpares
//digitados, digite 0 para não receber mais
const prompt = require("prompt-sync")()

let entrada;
let qtdpar
let somaPar = 0
let qtdImpar = 0
let somaImpar = 0
console.log("Digite números (0 para encerrar):")
while(true){
    entrada = parseFloat(prompt("Numero:"))
    
    if(entrada ===0){
        break;//encerra o loop
    }
    if(entrada % 2 == 0){
        somaPar = entrada + somaPar
        qtdpar++
    }
    else{
        somaImpar = entrada + somaPar
        qtdImpar++;

    }
}

console.log(`Somas dos pares digitados: ${somaPar} quantidade de par: ${qtdpar} `);
console.log(`Somas dos pares digitados: ${somaImpar} quantidade de par: ${qtdImpar} `);


