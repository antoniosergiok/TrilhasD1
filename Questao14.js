// Declaração de duas variáveis para armazenar os números que serão somados
let numero1 = 10;  // Primeiro número
let numero2 = 20;  // Segundo número

// Função para calcular a soma de dois números
function calcularSoma(a, b) {
    // Retorna a soma dos dois números passados como parâmetros
    return a + b;
}

// Chama a função calcularSoma, passando numero1 e numero2 como argumentos
let resultado = calcularSoma(numero1, numero2);

// Exibe o resultado da soma no console
console.log("A soma de " + numero1 + " e " + numero2 + " é: " + resultado);