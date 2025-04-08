//Pede ao usuário para digitar um número de 1 a 7 e imprime o dia da semana correspondente.
const prompt = require("prompt-sync")()

let numero = parseInt(prompt("Digite um número de 1 a 7:"));

switch (numero) {
   case 1:
        console.log("Domingo");
        break;
   case 2:
        console.log("Segunda-feira");
        break;
   case 3:
        console.log("Terça-feira");
        break;
   case 4:
        console.log("Quarta-feira");
        break;
   case 5:
        console.log("Quinta-feira");
        break;
   case 6:
        console.log("Sexta-feira");
        break;
    case 7:
         console.log("Sabado");
        break;
        default:
        console.log("Data inválida");
}