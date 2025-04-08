//Crie um programa que receba do usuário através do prompt 6 comidas e
//refaça todos os itens do exercício 1
const prompt = require("prompt-sync")()
let comidas = []

for(let i = 0; i < 6; i++){
    let comidas = prompt(`Digite o nome da comida ${i + 1}`)
    comidas.push(comida)
}

console.log(comidas);
//Exiba a primeira comida 
console.log(comidas[0]);

