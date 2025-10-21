class retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
        
    }
    
    area(){
        return this.largura*this.altura;
    }
    perimetro(){
        return  2*(this.largura + this.altura);
    }

}
 const retangulo1 = new retangulo(5,3);
 console.log(`A area do retangulo é: ${retangulo1.area()} ▀▀ 
e o seu perimetro é: ${retangulo1.perimetro()} ▀▀`);



