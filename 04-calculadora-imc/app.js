'use strict';

function calcularIMC() { 
    const inputAltura = document.getElementById("altura");
    const inputPeso = document.getElementById('peso');
    const displayResultado = document.getElementById('resultado');

    displayResultado.classList.remove('baixo', 'normal', 'sobrepeso', 'obesidade1', 'obesidade2', 'obesidade3');

    const altura = parseFloat(inputAltura.value);
    const peso = parseFloat(inputPeso.value);

    if (!altura || !peso || altura <= 0) {
        displayResultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    const resultadoimc = imc.toFixed(2);

    if (imc < 18.5) {
        displayResultado.textContent = `Abaixo do peso. IMC: ${resultadoimc}`;
        displayResultado.classList.add('baixo');
    } else if (imc < 25) {
        displayResultado.textContent = `Peso normal. IMC: ${resultadoimc}`;
        displayResultado.classList.add('normal');
    } else if (imc < 30) {
        displayResultado.textContent = `Sobrepeso. IMC: ${resultadoimc}`;
        displayResultado.classList.add('sobrepeso');
    } else if (imc < 35) {
        displayResultado.textContent = `Obesidade Grau 1. IMC: ${resultadoimc}`;
        displayResultado.classList.add('obesidade1');
    } else if (imc < 40) {
        displayResultado.textContent = `Obesidade Grau 2. IMC: ${resultadoimc}`;
        displayResultado.classList.add('obesidade2');
    } else {
        displayResultado.textContent = `Obesidade Grau 3. IMC: ${resultadoimc}`;
        displayResultado.classList.add('obesidade3');
    }
}