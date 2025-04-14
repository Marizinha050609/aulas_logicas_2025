//Pede ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
const prompt = require("prompt-sync")()

let mes = (prompt("Digite o nome do mes:")).toLowerCase;

switch (mes) {
   case "janeiro":
   case "março":
   case "maio":
   case "julho":
   case "agosto":
    case "outubro":
    case "dezembro":
        console.log(`${mes} tem 31 dias`);
    case "abril":
    case "julho":
    case "setembro":
    case "novembro":
        console.log(`${mes} tem 30 dias`);
        break;
    case "fevereiro":
    console.log(`${mes} tem 29 dias`);
    
        default:
        console.log("Mes inválido");
}