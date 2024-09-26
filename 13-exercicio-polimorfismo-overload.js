class Animais {
  constructor(
    nome,
    vida,
    altura,
    peso,
    idade,
    especie,
    forca,
    sexo,
    habitat,
    cor
  ) {
    this.nome = nome;
    this.vida = vida;
    this.altura = altura;
    this.idade = idade;
    this.especie = especie;
    this.peso = peso;
    this.forca = forca;
    this.sexo = sexo;
    this.habitat = habitat;
    this.cor = cor;
  }

  correr(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} REALIZA UMA Corrida!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} correr COM ${this.forca}!`);
    } else if (args.length === 2) {
      const [tipoFlecha, comArco] = args;
      if (comArco) {
        console.log(`${this.nome} DISPARA FLECHAS ${tipoFlecha} COM UM ARCO!`);
      } else {
        console.log(`${this.nome} DISPARA FLECHAS ${tipoFlecha} SEM UM ARCO!`);
      }
    } else {
      console.log(`NÚMERO DE ARGUMENTO NÃO SUPORTADO.`);
    }
  }
        
            
  }

  brigaDeAnimal() {
    console.log(`${this.nome} briga.`);
  }
  fazerSom() {
    console.log(`${this.nome} fazer som.`);
  }
  dormir () {
    console.log(`${this.nome} dormir.`);
  }
}
