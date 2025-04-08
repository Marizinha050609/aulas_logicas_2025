//Ler do teclado a idade e o sexo de 10 pessoas, calcule e imprima:
//idade média das mulheres
//idade média dos homens
//idade média do grupo
const prompt = require("prompt-sync")()

let idade = 0
let sexo; 
let mediaH = 0
let qtdH = 0
let mediaF = 0
let qtdF = 0
for(let i = 0; i < 10; i++ ){
    idade = Number(prompt("digite a idade"))
    sexo = prompt("Digite o sexo: (M ou F)").toUpperCase

    if(sexo == "M"){
        mediaH += idade
        qtdH++;
    }else{
        mediaF += idade
        qtdF++
    }

} console.log(`A media da idade dos hoemens ${mediaH / qtdH}`);
console.log(`A media da idade dos hoemens ${mediaF / qtdF}`);

