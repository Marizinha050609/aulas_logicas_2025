//Crie uma lista com os 20 times do campeonato brasileiro de futebol
//Exiba o primeiro time da lista como campeão
//Exiba os 4 primeiros times como que irão jogar a libertadores
//Exiba os 4 últimos times como os que estão rebaixados para a série B

let times = [
    "Corinthias",
    "Flamengo",
    "Palmeiras",
    "São Paulo",
    "Santos",
    "Botafogo",
    "Fluminense"
]

//Exibir o campeao (primeiro da lista)
console.log(times[0]);
//Exibir os 4 primeiros
console.log(times.slice(0,4));
//Exibir os 4 ultimos
console.log(times [-4]);


