class contaBancaria{
    #saldo = 0;
    depositar(valor){
            this.#saldo += valor;
    }
    sacar(valor){
        if (valor <= this.#saldo){
             this.#saldo -= valor ;
        }
        else{
            console.log("Saldo insuficiente");
        }
    }

    verSaldo(){
        return`saldo atual: R$${this.#saldo}`;
    }
}

const contaBancaria1 = new contaBancaria();
contaBancaria1.depositar(100);
contaBancaria1.sacar(30);

console.log(contaBancaria1.verSaldo());


