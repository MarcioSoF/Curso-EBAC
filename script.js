// Sorteia o número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Define o número máximo de tentativas
let maxTentativas = 10;

//Começa o contador de tentativas
let tentativas = 0;

document.getElementById("botaoChutar").addEventListener("click",function() {
    // Aqui dentro vai o que acontece quando o jogador clicar no botãou
    let palpite = parseInt(document.getElementById("valor").value);

    // Só para testar, vamos imprimir o que o jogador digitou
    console.log("Palpite do Jogador:" + palpite);

});

tentativas++;

if (palpite === numeroSecreto) {
    // Se o jogador acertou
    dicasJogo.textContent = `Parabéns! Você acertou! O número secreto era ${numeroSecreto}.`;
    botaoChutar.disabled = true; // Desabilita o botão "Chutar"
} else if (palpite < numeroSecreto) {
    // Se o palpite for menor
    dicasJogo.textContent = "O número secreto é maior. Tente novamente!";
} else {
    // Se o palpite for maior
    dicasJogo.textContent = "O número secreto é menor. Tente novamente!";
}

//Mostra o número de tentativas restantes
let restantes = maxTentativas - tentativas;
document.getElementById("tentativasRestantes").textContent = "Tentativas restantes: " + restantes;

//Se acabou as tentativas:
if (tentativas >= maxTentativas && valor !== numeroSecreto) {
    document.getElementById("dicasJogo").textContent = "Você perdeu! O número secreto era " + numeroSecreto + ".";
    document.getElementById("botaoChutar").disabled = true; // Desabilita o botão
}


