alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;

let chute = prompt('Escolha um número entre 1 e 30');

if (numeroSecreto == chute) {
    alert(`Isso ai! você acertou o número secreto! (${chute})`)
} else {
    alert('Você errou!')
}