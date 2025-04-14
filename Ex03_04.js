//Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7
//aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
const prompt = require("prompt-sync")()

let= nome = prompt("Digite seu nome")
let = nota1 Number(promt(`${nome} qual sua a primeira nota`))
let = nota2 Number(promt(`${nome} qual sua a segunda nota`))
let media = (nota1 + nota2) / 2 

if (media > 7){
    console.log(`ola ${nome}, voce foi aprovado! com média ${media}`)

}
else if(media > 5 || media < 7){
    console.log(`ola ${nome}, voce esta com recuperação com média ${media}`)
}