//trabalho com lçaos de repetição(while)

//Executar o laço x vezes 


/*
let contador = 1;
//irá repetir enquanto a condição for verdadeira
//ou seja verdade enquanto o contdaor for menor igual a 5
while(contador <= 5){
    console.log(`o contador é ${contador}`);
    //incrementando a variavel ou seja adicionado valor a ela 
    //para que continue o processo ate que a condução seja atingida 
    //contador = contador++
    contador = contador +1
}

console.log("Fim")

const prompt = require("prompt-sync")()
let senha_senai = "12345"

while(true){
    let senha = prompt("digite a senha:")
    if(senha_senai == senha){
        console.log("voce hakeou a senha")
        break
    }else if(senha == "desisto") 
        break
}



//escreva um programa que fique recebendo o valor de vários produtos ate que eu digite 
// /0 e exiba no final a soma da minha compra e a quantidades de produtos lidos

let soma = 0;
let qtd = 0

while(true){
    let valor = Number(prompt("digite o valor do produto(0 para encerrar)"))
    if(valor == 0){
        break
    }
    else{
        soma = soma + valores
        qtd++
    }
}
console.log(`Foram informados ${qtd}`);
//toFixed para colocar somente dois digitos apos a virgula    
console.log(`valor total dos produtos ${soma.toFixed(2)}`);



*/


const prompt = require("prompt-sync")()

let soma2 = 0;
let qtd2 = 0
let encerrar

while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt("digite o valor do produto(0 para encerrar)"))
    soma = soma + valores
        qtd++
    }

console.log(`Foram informados ${qtd}`);
//toFixed para colocar somente dois digitos apos a virgula    
console.log(`valor total dos produtos ${soma.toFixed(2)}`);


//Crie um jogo de adi
//
//
//
console.log('############################');
console.log("🤔    JOGO DA ADIVINHAÇÃO 🤔" )
console.log("#############################");

let nrSorteado = Math.floor(Math.random()) * 100 + 1 //gera um numero aleatorio 
let acertou = false
while(!acertou){
    const chute = parseInt(prompt("🤔 digite um numero entre 1 a 100 para adivinhar"))

    if(chute > nrSorteado){
        console.log(`voce chutou ${chute}, tente um numero 👇!`)
    }
    else if(chute < nrSorteado){
        console.log(`voce chutou ${chute}, tente um numero 👆!`)
    }
}


