const prompt = require("prompt-sync")()

//Estrutura condicional aninhada
let idade = Number(prompt("Digite sua idade"))

if(idade >= 18 && idade <= 70){
    console.log("voto obrigatório");
}
else{
    if(idade < 16){
        console.log("voce não pode votar!")
    }else{
        if(idade >= || idade > 70){
            console.log("voto facultativo");
            
        }
    }
}


//Switch case - Estrutura de controle de fluxo para tomar decisoes com base no valor de uma variavel
let n1 = Number(prompt("digite o primeiro numero"))
let n2 = Number(prompt("digite o segundo numero"))
let op = prompt("escolha a operação ( +, -, *, /, **)")

//testa o valor da variavel se é true
switch(op){
    //caso op a variavel
    case "+":
        console.log(`resultado ${n1 + n2}`)
        break;
     case "-"
        console.log(`Resultado: ${ n1 - n2}`)
        break
    
    }


















    //verificar qual letra é igual
    let letra = prompt("digite uma letra").toLocaleLowerCase()
//Quando usamos switch com variavel, o swtich compara exatamente o valor da variavel com cases definidos
    switch(letra){
        case: "A":
        case: "E":
        case: "I":
        case: "O":
        case:"U":
     console.log("vogal")  
      break:
      default:
        console.log("consoante")  
   
    }


    //converter a nota em numero para letra 
    let nota = parseInt(promt("digite a nota do aluno"))
// o switch(true) verifica quais expressões dentro do case retornam true(verdade) ou seja comparamos as expressões booleanas
    switch(true){
        case nota >= 90:
            console.log("nota A");
            break;
            case nota >= 80
            console.log("Nota b");
            break;
            case nota >= 70: 
            console.log("nota C");
            break;
            case nota >= 60: 
            console.log("Nota D")
            break
            default
            console.log("Nota E")
        }
    


