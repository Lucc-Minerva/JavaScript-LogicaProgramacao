alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto)

let chute = prompt('Escolha um número entre 1 e 30');

// condicional 
if (numeroSecreto == chute) {
    alert(`Isso ai! você acertou o número secreto! (${numeroSecreto})`)
} else {
    alert('Você errou!')
}