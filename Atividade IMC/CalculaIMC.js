
function calculaIMC() {
    // Entrada
    let valorPeso = parseFloat(document.getElementById("peso").value);
    let valorAltura = parseFloat(document.getElementById("altura").value);

    // Processamento
    let valorIMC = valorPeso / (valorAltura * valorAltura);
    let classificacao = "";

    if (valorIMC < 18.5) {
        classificacao = "você está abaixo do peso.";
    } else if (valorIMC < 24.9) {
        classificacao = "você está com peso normal.";
    } else if (valorIMC < 29.9) {
        classificacao = "você está com sobrepeso.";
    } else if (valorIMC < 34.9) {
        classificacao = "você está com obesidade grau 1.";
    } else if (valorIMC < 39.9) {
        classificacao = "você está com obesidade grau 2.";
    } else {
        classificacao = "você está com obesidade grau 3 (mórbida).";
    }

    // Saída
    document.getElementById("resultado").textContent =
        'Seu IMC é: ' + valorIMC.toFixed(1) + ' e ' + classificacao;

    // Esconde os inputs e botão
    document.getElementById("peso").style.display = "none";
    document.getElementById("altura").style.display = "none";
    document.querySelector("label[for='peso']").style.display = "none";
    document.querySelector("label[for='altura']").style.display = "none";
    document.querySelector("button").style.display = "none";
}
