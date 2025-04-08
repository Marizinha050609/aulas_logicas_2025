//Utilizando o comando while, exiba todos os números pares, de 1 a 20.
const prompt = require("prompt-sync")()

//exiba todos os números pares, de 1 a 20.
let contador = 1;

while(contador <= 20 ){
    if(contador % 2 == 0){
        console.log(`${contador} é par`);
    }
    contador++
    

    } 