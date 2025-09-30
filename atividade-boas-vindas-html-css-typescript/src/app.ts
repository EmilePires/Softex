class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  apresentar(): string {
    return `Olá! Meu nome é ${this.nome}`;
  }
}

const botao = document.getElementById("btnApresentar") as HTMLButtonElement | null;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement | null;

if (botao && mensagem) {
  botao.addEventListener("click", () => {
    if (mensagem.textContent) {
      // Se a mensagem estiver visível, limpa o texto para sumir
      mensagem.textContent = "";
      mensagem.classList.remove("mostrar-mensagem");
    } else {
      // Se não tiver mensagem, cria e mostra
      const pessoa = new Pessoa("Êmile");
      mensagem.textContent = pessoa.apresentar();
      mensagem.classList.add("mostrar-mensagem");
    }
  });
}


