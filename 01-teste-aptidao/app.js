'use strict'

function avaliar (){
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    if (tempo.value < 14){
       resultado.textContent = 'apto'
    }else{
        resultado.textContent = 'Não apto'
    }
}