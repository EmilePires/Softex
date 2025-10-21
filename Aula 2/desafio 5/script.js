let mensagemVisivel = false
function apresentar() {
    let nome = "Êmile Pires Ferreira";
    let hobby = "andar de patins e pintar telas";

    const paragrafo = document.getElementById("mensagem");
    if (mensagemVisivel){
        paragrafo.textContent = "Obrigada!";
    } else {
        paragrafo.textContent = "Olá, eu sou " + nome + ", adoro " + hobby + "!";
    }
    mensagemVisivel = !mensagemVisivel
}