'use strict'

function avaliar() {
    const tempo = document.getElementById('tempo').value
    const resultado = document.getElementById('resultado')

    resultado.classList.remove('apto', 'nao-apto')

    if (tempo !== "" && Number(tempo) < 14) {
        resultado.textContent = 'Apto'
        resultado.classList.add('apto')
    } else if (tempo !== "") {
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao-apto')
    } else {
        resultado.textContent = 'Por favor, digite um tempo.'
    }
}