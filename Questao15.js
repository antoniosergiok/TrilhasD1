// Declaração das variáveis com nomes mais descritivos 
// As variáveis x e y mudei para primeiroNumero e segundoNumero

let primeiroNumero = 10;
let segundoNumero = 20;

// Função para calcular a soma de dois números
function calcularSoma(a, b) {
    return a + b;
}

// Chama a função para calcular a soma
// O resultado da soma foi armazenado em uma variável chamada resultadoSoma, que tem um nome mais descritivo do que Z (na atividade resultado era z = x + y)
let resultadoSoma = calcularSoma(primeiroNumero, segundoNumero);

// Exibe o resultado no console
console.log("O resultado da soma é: " + resultadoSoma);