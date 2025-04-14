//Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7
//aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
const prompt = require("prompt-sync")()

let nota1 = Number(prompt("Digite a primeira nota"));
let nota2 = Number(prompt("Digite a segunda nota"));
let media = (nota1 + nota2)

switch(true)
{
    case media > 7:
        console.log("aprovado");
        
    case media > 5 && media <= 7: 
        console.log("Recuperação");
        
    case media <= 5:
        console.log("reprovado");
        break;
        default 

        
    
        
}