//Faça um programa que receba um número e mostre seu fatorial. Ex. :
//5! = 5 * 4 * 3 * 2 * 1 = 120
const prompt = require("prompt-sync")()


let numero = parseInt(prompt("Digite um numnero"))

let fatorial = 1 
let contador = numero
let sequencia =  numero + " ! = " // concatenando valores 

while(contador >= 1){
    fatorial = fatorial * contador
    sequencia =  sequencia + contador; 
    if(contador > 1){
        sequencia = sequencia + " * "
    }
    contador -- //decrementado contador 
}

sequencia = sequencia + " = " + fatorial
console.log(sequencia);
