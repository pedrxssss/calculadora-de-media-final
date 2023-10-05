/* Exercício Javascript */

//Inputs de notas e media
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxNota4 = document.querySelector('#nota4')
let cxMedia = document.querySelector('#media')

//Botoes de calcular e limpar
let btnCalcular = document.querySelector('.btnCalcular')
let btnLimpar = document.querySelector('.btnLimpar')

//Situacao da media e aviso
let cxSit = document.querySelector('#situacao')
let aviso = document.querySelector('#aviso')
let form = document.querySelector('form')

/* Código funcional */

//Calculo da média
function calcularMediaPorQuatro(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

function calcularMediaPorTres(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

function calcularMediaPorDois(n1, n2) {
    return (n1 + n2) / 2
}



//Definicao da situacao final com base na media
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if (mediaFinal >= 6 || mediaFinal > 5.96) {
        situacaoFinal = 'Aprovado(a)!'
    } else if (mediaFinal < 3.5) {
        situacaoFinal = 'Reprovado(a)!'
    } else {
        situacaoFinal = 'Recuperação!'
    }

    return situacaoFinal
}

//Formatacao da caixa de situacao final
//Formatacao com switch case
function formatarSituacao(situacaoFinal) {
    console.log(`Situação final ${situacaoFinal}`)

    switch (situacaoFinal) {
        case 'Aprovado(a)!':
            cxSit.classList.remove('reprovado')
            cxSit.classList.remove('recuperacao')
            cxSit.classList.add('aprovado')
            console.log('Adicionando classe de aprovado.')
            break

        case 'Reprovado(a)!':

            cxSit.classList.remove('aprovado')
            cxSit.classList.remove('recuperacao')
            cxSit.classList.add('reprovado')
            console.log('Adicionando classe de reprovado.')
            break

        case 'Recuperação!':
            cxSit.classList.remove('reprovado')
            cxSit.classList.remove('aprovado')
            cxSit.classList.add('recuperacao')
            console.log('Adicionando classe de recuperacao.')
            break
    }
    //Final do switch case.
}

//Validacao e gerando flash message
function validarNumero(n) {
    let num1 = parseFloat(cxNota1.value)
    let num2 = parseFloat(cxNota2.value)
    let num3 = parseFloat(cxNota3.value)
    let num4 = parseFloat(cxNota4.value)

    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10 || num4 < 0 || num4 > 10) {
        form.reset()
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function () {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 3000)
    }
}

//Calculando a media apos click do botao de calcular

//PreventDefault do btnCalcular
btnCalcular.addEventListener('click', function (e) {
    //Pegar valor que esta dentro das caixas
    //Usar metodo parseFloat para converter string para float.
    //Prevent Default do btnCalcular
    e.preventDefault()

    //Valores das caixas
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let nota4 = parseFloat(cxNota4.value)
    let media = calcularMediaPorQuatro(nota1, nota2, nota3, nota4)
        || calcularMediaPorTres(nota1, nota2, nota3)
        || calcularMediaPorDois(nota1, nota2)


    //Arredondamento de nota caso o resultado da media for 5.96 se tornar 6
    if (media >= 5.96 && media < 6) {
        media = 6
    }

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    console.log(media)


    //
    if (isNaN(media) || media < 0) {
        console.log('Não é um  número.')
        cxSit = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSit.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }

})

//Botão de limpar tirar as classes dos Sit
btnLimpar.addEventListener('click', function () {
    cxSit.classList.remove('aprovado')
    cxSit.classList.remove('reprovado')
    cxSit.classList.remove('recuperacao')
})
