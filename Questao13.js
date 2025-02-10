// Função para calcular a área de um círculo
function calcularAreaCirculo(raio) {
    // Fórmula da área do círculo: A = π * r^2
    const pi = Math.PI;  // Valor de π (pi)
    const area = pi * Math.pow(raio, 2);  // Calcula a área
    return area;  // Retorna o valor da área
}

// Exemplo de uso da função
const raio = 5;  // Raio do círculo
const area = calcularAreaCirculo(raio);  // Chama a função para calcular a área

// Exibe o resultado
console.log("A área do círculo com raio " + raio + " é: " + area.toFixed(2));