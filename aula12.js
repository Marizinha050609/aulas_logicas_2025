//Criando nosso primeiro For

for(let i = 0; i < 100; i++){
    console.log(i);
}

//entregando os notebooks por ordem 
const prompt = require("prompt-sync")()
console.log("Entregando os notebooks");

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o número ${nr}`)
    let presente =  prompt(`O(A) veio pra escola (S ou N)`)
    
    if(presente === "S") {
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`levar  notebook até a(o) ${nome}`);
} else{
    console.log(`Não pegar notebook  ${nr}`);
}
}
console.log();


