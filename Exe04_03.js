//Pede ao usuário para digitar o número de um mês e imprime o seu nome.

let mes = parseInt(prompt("Digite um número referente ao mes:"));

switch (mes) {
   case 1:
        console.log("mes de janeiro");
        break;
   case 2:
        console.log("Mes de fevereiro");
        break;
   case 3:
        console.log("Março");
        break;
   case 4:
        console.log("Abril");
        break;
   case 5:
        console.log("Maio");
        break;
   case 6:
        console.log("Junho");
        break;
    case 7:
         console.log("julho");
        break;
    case 8:
         console.log("Agosto");
        break;
    case 9:
         console.log("Setembro");
        break;
    case 10:
         console.log("Outribro");
        break;
    case 11:
         console.log("Novembro");
        break;
    case 12:
         console.log("Dezembro");
        break;
        default:
        console.log("Mes inválida");
}