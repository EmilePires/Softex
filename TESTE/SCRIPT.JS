let botão = document.querySelector('button')

botão.addEventListener('click', function() {

    let tabela = document.querySelector('#tabelaNotas tbody')

    let nome = document.getElementById('nome').value

    if (nome == "") {
        alert('Digite um nome')
        return
    } else if (tem_numero(nome)) {
        alert('Digite apenas letras')
        return
    }

    let n1 = parseFloat(document.getElementById('nota1').value)
    let n2 = parseFloat(document.getElementById('nota2').value)
    let n3 = parseFloat(document.getElementById('nota3').value)

    if (Number.isNaN(n1)) {
        alert('Preencha as Nota 1')
        return
    } else if (n1 > 10 || n1 < 0) {
        alert('A nota precisa ser menor que 10 e maior que 0')
        return
    }

    if (Number.isNaN(n2)) {
        alert('Preencha as Nota 2')
        return
    } else if (n2 > 10 || n2 < 0) {
        alert('A nota precisa ser menor que 10 e maior que 0')
        return
    }

    if (Number.isNaN(n3)) {
        alert('Preencha as Nota 3')
        return
    } else if (n2 > 10 || n2 < 0) {
        alert('A nota precisa ser menor que 10 e maior que 0')
        return  
    }

    let linha = document.createElement('tr')

    let celN1 = document.createElement('td')
    celN1.textContent = n1

    let celN2 = document.createElement('td')
    celN2.textContent = n2

    let celN3 = document.createElement('td')
    celN3.textContent = n3

    let celMedia = document.createElement('td')
    let media_aluno = get_media(n1,n2,n3)
    celMedia.textContent = media_aluno

    let celSituacao = document.createElement('td')
    let situação_aluno = is_approved(media_aluno)
    celSituacao.textContent = situação_aluno

    let celAluno = document.createElement('td')
    celAluno.textContent = nome

    linha.appendChild(celAluno)
    linha.appendChild(celN1)
    linha.appendChild(celN2)
    linha.appendChild(celN3)
    linha.appendChild(celMedia)
    linha.appendChild(celSituacao)
    
    console.log(linha)
    
    tabela.appendChild(linha)

    document.getElementById('nome').value = ""
    document.getElementById('nota1').value = ""
    document.getElementById('nota2').value = ""
    document.getElementById('nota3').value = ""

    document.getElementById('nome').focus()

})

function get_media(n1, n2, n3) {
    let media = (n1+n2+n3)/3
    return parseFloat(media.toFixed(2))
}

function is_approved(media) {
    let situação = "null"

    if (media >= 7) {
        situação = "Aprovado"
    } else if (media >= 5 && media < 7) {
        situação = "Em recuperação"
    } else {
        situação = "Reprovado"
    }

    return situação
}

function tem_numero(text) {
    let contem_numero = text.match(/\d/);
    return Boolean(contem_numero)
}