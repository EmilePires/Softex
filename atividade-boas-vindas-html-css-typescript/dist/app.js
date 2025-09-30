"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        return `Olá! Meu nome é ${this.nome}`;
    }
}
const botao = document.getElementById("btnApresentar");
const mensagem = document.getElementById("mensagem");
if (botao && mensagem) {
    botao.addEventListener("click", () => {
        if (mensagem.textContent) {
            // Se a mensagem estiver visível, limpa o texto para sumir
            mensagem.textContent = "";
            mensagem.classList.remove("mostrar-mensagem");
        }
        else {
            // Se não tiver mensagem, cria e mostra
            const pessoa = new Pessoa("Êmile");
            mensagem.textContent = pessoa.apresentar();
            mensagem.classList.add("mostrar-mensagem");
        }
    });
}
