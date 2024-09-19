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