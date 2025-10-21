class carro{

    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    apresentar(){
        return `${this.marca} ${this.modelo} - ${this.ano}`

    }
}
    const carro1 = new carro("Dodge", "journey", 2010);
    console.log(carro1.apresentar());

    const carro2 = new carro("Peugeot", "Expert", 2019);
    console.log(carro2.apresentar());
