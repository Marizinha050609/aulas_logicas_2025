let frutas = ["Maça" , "Banana" , "uva" , "Abacaxi"]
//A variavel x serve para não interar os valores ate o limite da lista o nome não é obrigatótoiamente 
//ser o nome i, x ou contador pode ser qualquer nome de variavel
for(let x= 0; x < frutas.length; x++){
    //o lenght identifica o tamanho total ta lista 
    console.log(`A fruta é ${frutas[x]}`);
}

let listaNomes = ["Bill Gates", "Rafinha", "Raul Seixas", "Esteves", "vieira"]
//Para cada nome da lista nome, escreva o nome 
for(let nomes of listaNomes){
    console.log(nomes);
}

//verificando se é uma conssoante 
//lista de vogais
const prompt = require("prompt-sync")()
let vogais = ["a", "e", "i", "o", "u"]
let conssoante = ["b", "C","D", "f", "g", "h", "j", "K", "l", "m", "N"  ]

let letras = prompt("Digite uma letra: ")
//se letra estiver incluso na lista de vogais, identifico que
//é uma vogal
if(vogais.includes(letars.toLowerCase())){
    console.log("é uma vogal");
}else if(conssoante.includes(letras.toLowerCase())){
    console.log("consoante");}
else{console.log("Não e uma letra");}

//Obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
    //entrires retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`posição${pos} e fruta ${fruta}`);
}

//separando os itens em uma lista 
let produtos = "Celular, Notebook, TV, Tablet, headset"
//o slipt divide  a string e forma uma lista a partir do limita
//no caso abaixo uma virgula
let listaProdutos = produtos.split(",")
for(let produto of listaProduto){
    console.log(produto);
}

//Percorrendo uma string como uma lista(lista de caracteres)
let palavra = "SENAI"
for(letra of palavra){
    console.log(letra);
    
}