// Inicializa a variável para armazenar a entrada do usuário
let numero;

// Loop while para continuar pedindo um número até que o usuário digite 5
while (numero !== 5) {
    // Solicita ao usuário que digite um número
    numero = parseInt(prompt("Digite um número:"));

    // Verifica se o número digitado é 5
    if (numero === 5) {
        console.log("Parabéns! Você digitou o número 5.");
    } else {
        console.log("Você digitou " + numero + ". Tente novamente.");
    }
}