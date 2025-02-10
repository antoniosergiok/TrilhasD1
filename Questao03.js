// Criação das variáveis e atribuição dos valores
let preco = 50;          // Variável 'preco' com valor 50
let desconto = 0.2;      // Variável 'desconto' com valor 0.2 (20%)

// Cálculo do preco com desconto
let precoFinal = preco * (1 - desconto);

// Exibição do valor final no console
console.log("Preco original: R$" + preco.toFixed(2));
console.log("Desconto: " + (desconto * 100) + "%");
console.log("Preco final: R$" + precoFinal.toFixed(2));