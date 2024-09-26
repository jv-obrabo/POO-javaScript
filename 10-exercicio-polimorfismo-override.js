// classe base Animais
class Animais {
  constructor(nome, vida, altura, idade, especie) {
    this.nome = nome;
    this.vida = vida;
    this.altura = altura;
    this.idade = idade;
    this.especie = especie; 
  }

  correr() {
    console.log(`${this.nome} realiza uma corrida.`);
  }

  brigaDeAnimal() {
    console.log(`${this.nome} briga.`);
  }
}

class Gorila extends Animais {
  constructor(nome, vida, altura, idade, especie, forca, cor) {
    super(nome, vida, altura, idade, especie);
    this.forca = forca; 
    this.cor = cor;
  }

  correr() {
    console.log(`${this.nome} realiza uma corrida para pegar uma banana.`);
  }

  brigaDeAnimal() {
    console.log(`${this.nome} ataca o leão.`);
  }
}

class Leao extends Animais {
  constructor(nome, vida, altura, idade, especie, juba, rabo) {
    super(nome, vida, altura, idade, especie);
    this.juba = juba;
    this.rabo = rabo;
  }

  correr() {
    console.log(`${this.nome} realiza uma corrida para morder o inimigo.`);
  }

  brigaDeAnimal() {
    console.log(`${this.nome} ataca o gorila.`);
  }
}

const gorila = new Gorila("Loxes", 90, 3.0, 3, "macaco", 70, "preto"); 
gorila.correr(); 
gorila.brigaDeAnimal(); 

const leao = new Leao("Alex", 100, 2.0, 1, "felino", "juba grande", "grande"); 
leao.correr(); 
leao.brigaDeAnimal(); 
