//Crie uma lista de filmes com 7 filmes e faça as seguintes operações com ela: - feito
//Exiba apenas o primeiro o filme da lista - Feito
//Exiba o filme da posição 4 - Feito
//Substitua o filme da última posição e exiba a lista - Feito
//Insira um novo filme no final da lista e exiba a lista - feito
//Insira um novo filme na posição 5 e exiba a lista - feito
//Exclua o primeiro filme e exiba a lista
//Exclua o último filme e exiba a lista
//Exiba os 3 primeiros filmes da lista
//Exiba os 4 últimos filmes da lista
//Exiba a quantidade de filmes atualmente na lista
//Ordene os filmes em ordem decrescente e exiba-os

//Declarar lista de filmes 
let listaDeFilmes = [`A cinco passos de você` , `Como eu era antes de você`, `Pânico`, `Minha mãe é uma peça`, `Velozes e furiosos`, 
    `Através da Minha Janela`, `Crepusculo`, `Ciquenta tons de cinza`]

//exiba o primeiro filme da lista
console.log(listaDeFilmes[0])

//exibir o filme da posição 4
console.log(listaDeFilmes[3]);

//Substituir o filme da última posição e exibir 
listaDeFilmes[3] = "10 coisas que eu odeio em você"
console.log(listaDeFilmes); 
//Outra forma de substituição de elementos/filmes.
listaDeFilmes[listaDeFilmes.length -1] = "Homem aranha" 
console.log(listaDeFilmes);

//Insira um novo filme no final da lista e exiba a lista 
listaDeFilmes = [...listaDeFilmes, "Para todos garotos que eu ja amei"]
console.log(listaDeFilmes);

//Insira um novo filme na posição 5 e exiba a lista
listaDeFilmes[5] = "A vila"
console.log(listaDeFilmes);

//Exclua o primeiro filme e exiba a lista
listaDeFilmes.shift()
//Exclua o último filme e exiba a lista
listaDeFilmes.pop

//Exiba os 3 primeiros filmes da lista
console.log(listaDeFilmes.slice(0,3));
console.log(listaDeFilmes);

//Exiba os 4 últimos filmes da lista
console.log(listaDeFilmes.slice(-2))

//Exiba a quantidade de filmes atualmente na lista
console.log(listaDeFilmes.length);

//Ordene os filmes em ordem decrescente e exiba-os
console.log(listaDeFilmes.sreverse());









 