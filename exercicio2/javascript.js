const jogar = function(numeroApostado) {
    const numeroSorteado = Math.floor(Math.random() * 3) + 1;
    if (numeroApostado === numeroSorteado) {
        alert("Parabéns! Você acertou. Número sorteado: " + numeroSorteado);
    } else {
        alert("Você errou. Número sorteado: " + numeroSorteado);
    }
}

jogar(2);

const gerarTabuada = function(numero) {
    let resultado = "Tabuada do " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    return resultado;
}

let tabuada = gerarTabuada(5);
console.log(tabuada);
