// Classe base Pesooa
class Pessoa {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  mostrarDados() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e peso ${this.peso} kg!`
    );
  }
}

// Classe Estudante que herda de Pessoa
class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
  mostrarCurso() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e peso ${this.peso} kg, e faço curso de jogos digitais ${this.curso}!`
    );
  }
}

// Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  mostrarSalario() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e peso ${this.peso} kg, e recebo ${this.salario} de salario`
    );
  }
}

// Classe Diretor que herda de Pessoa
class Diretor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
 

}

// Classe Professor que herda de Pessoa
class Professor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

const aluno = new Estudante( "João",16,1.7, 70, "Programação de Jogos Digitais");
aluno.mostrarDados();
aluno.mostrarCurso();

const diretor = new Diretor("Sergio", 45, 1.65, 65, 3000);
diretor.mostrarDados();
diretor.mostrarSalario();

const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);
professor.mostrarDados();
professor.mostrarSalario();

