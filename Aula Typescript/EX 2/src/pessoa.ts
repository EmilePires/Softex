class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Emile", 20);
const pessoa2 = new Pessoa("Gabriel", 20);

console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());
