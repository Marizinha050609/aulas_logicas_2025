//Pede o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até
//2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o novo salário.
const prompt = require("prompt-sync")()

let salario = Number(prompt("Digite seu salario"))

if(salario <= 2000){
    //let reajuste = salario * 0.12
    //salario = salario + reajuste
    salario = salario +(salario * 0.12)   
    console.log(`salario reajustando em 12%, o valor total é: ${salario}`)
}
    
else if(salario <= 2000 || salario <= 4000){
// let reajuste = salario * 0.12
//salario = salario + reajuste
salario = salario +(salario * 0.12)   
console.log(`salario reajustando em 10%, o valor total é: ${salario}`)
}

else{
    //let reajuste = salario * 0.12
//salario = salario + reajuste
salario = salario +(salario * 0.12)   
console.log(`salario reajustando em 8%, o valor total é: ${salario}`)
}

