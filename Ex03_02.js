//Peça ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele
//pertence considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)
const prompt = require("prompt-sync")()

let anoNasc = Number (prompt("Digite o ano de nascimento"))
let anoAtual = Number (prompt("Digite o ano Atual"))
let Idade = anoAtual - anoNasc
console.log(idade)

if(idade <= 10){
    console.log("É criança")
}
else if(idade >= 11 && idade 17){
    console.log("adolecente")

}
 else if(idade > 18 && idade 59){
    console.log("adulto")
 }
 else if(idade >= 60)
 {
    console.log("idoso")
 }