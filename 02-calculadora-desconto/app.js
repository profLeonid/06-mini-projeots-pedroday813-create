'use strict';

function calcularDesconto() {
    // 1. Pega os elementos de entrada
    const inputPreco = document.getElementById('preco');
    const inputDesconto = document.getElementById('desconto');
    const displayResultado = document.getElementById('resultado');

    resultado.classList.remove('pequeno', 'bom', 'otimo')


    // 2. Converte os valores para números
    const preco = parseFloat(inputPreco.value);
    const percentualDesconto = parseFloat(inputDesconto.value);

    // 3. Validação simples
    if (isNaN(preco) || isNaN(percentualDesconto)) {
        displayResultado.textContent = "Por favor, preencha os campos.";
        return;
    }

    // 4. Cálculo
    const valorDescontado = (preco * percentualDesconto) / 100;
    const valorFinal = preco - valorDescontado;

    // 5. Lógica de exibição (Exemplo baseado no seu código)
    if (percentualDesconto <= 5) {
        displayResultado.textContent = `Pequeno desconto: R$ ${valorFinal.toFixed(2)}`;
        resultado.classList.add('pequeno')
    } else if (percentualDesconto <= 10) {
        displayResultado.textContent = `Bom desconto: R$ ${valorFinal.toFixed(2)}`;
        resultado.classList.add('bom')
    } else {
        displayResultado.textContent = `Ótimo desconto: R$ ${valorFinal.toFixed(2)}`
        resultado.classList.add('otimo')
        
    }
}
