class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return `Funcionário ${this.nome}, salário: ${this.salario}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario);
    this.departamento = departamento;
  }

  descricao() {
    return `Gerente ${this.nome}, salário: ${this.salario}, departamento: ${this.departamento}`;
  }
}

const funcionario1 = new Funcionario("Alex", 2500);
console.log(funcionario1.descricao());

const gerente1 = new Gerente("Êmile", 8000, "TI");
console.log(gerente1.descricao());
