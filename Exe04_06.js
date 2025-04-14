//Pede o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até
//2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o novo salário.
const prompt = require("prompt-sync")()

const salário = Number(prompt("digite o salário"))

switch(true){
    case salario < 2000:
        salario = salario + (salario * 0.12)
        console.log(`salario reajustado ${salario}`);
        break
    case salario >= 2000 && salario <:
        salario = salario + (salario * 0.08)
        console.log(`salario reajustado ${salario}`);    
}