class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(porcentagem: number): number {
        return this.preco - (this.preco * porcentagem / 100);
    }
}

const produto1 = new Produto("Fone de Ouvido", 200);
console.log(`Preço com desconto: R$ ${produto1.desconto(10)}`);
