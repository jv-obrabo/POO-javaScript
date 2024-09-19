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
//criando objetos aluno,  diretor e professor 
const aluno = new Estudante("Joao",16,1.70,70, "progamaçao de jogos digitais");
const diretor = new Diretor("sergio",45,1.65,3000);
const professor = new Professor ("wanderson",40,1.65,70,1000);

console.log(aluno);
console.log(diretor)
 console.log(professor)