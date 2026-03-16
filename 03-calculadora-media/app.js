'use strict';


function calcularMedia() {
    // 1. Pega os elementos de entrada
    const inputNota1 = document.getElementById("n1");
    const inputNota2 = document.getElementById('n2');
    const inputNota3 = document.getElementById("n3");
    const displayResultado = document.getElementById('resultado');

    resultado.classList.remove('reprovado', 'recuperacao', 'aprovado')

    // 2. Converte os valores para números
    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);
    const nota3 = parseFloat(inputNota3.value);


    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        displayResultado.textContent = " erro: 'Erro: notas inválidas.";
        return;
    }



    if (nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10) {
        displayResultado.textContent = "Digite um valor Acima de 0 e abaixo de 10";
        return;
        
    }

    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(2);

    if (media < 5) {
        displayResultado.textContent = `O Aluno ficou com a média ${mediaFormatada}, Reprovado`;
        resultado.classList.add('reprovado')
    }else if(media >= 5 && media <= 6.9){
        displayResultado.textContent = `O Aluno ficou com a média ${mediaFormatada}, Recuperação`;
        resultado.classList.add('recuperacao')
    }else if(media > 6.9){
        displayResultado.textContent = `O Aluno ficou com a média ${mediaFormatada}, Aprovado`;
        resultado.classList.add('aprovado')
    }

}