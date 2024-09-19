 // classe base pessoa 
 class Pessoa {
  constructor(nome, idade,altura,peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
}

// classe estudante que herda de pessoa
 class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso,  curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }

 }
// classe funcionario  que herda de pessoa
 class  funcionario extends Pessoa {
  constructor(nome, idade, altura, peso,  salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }

 }
// classe funcionario  que herda de pessoa
 class  diretor extends  funcionario {
  constructor(nome, idade, altura, peso,  salario) {
    super(nome, idade, altura, peso,salario);

  }

 }
 // classe funcionario  que herda de pessoa
 class  professor extends  funcionario {
  constructor(nome, idade, altura, peso,  salario) {
    super(nome, idade, altura, peso,salario);
  }
}
