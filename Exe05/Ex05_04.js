//Faça um programa que leia 10 valores inteiros e:
//Encontre e mostre o maior valor
//Encontre e mostre o menor valor
//Calcule e mostre a média dos números lidos
const prompt = require("prompt-sync")()

let contador = 0 
let entrada
let maior = 0
let menor = Infinity
let soma = 0
while(contador <= 10){
    entrada = Number(prompt("Digite um número: "))
    if(entrada > maior){
        maior = entrada
    }
    if(entrada < menor){
        menor = entrada
    }
    
    soma += entrada;
    // soma = entrada + soma
    contador++;
}

let media = soma / 10;
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média valor: ${média}`);
