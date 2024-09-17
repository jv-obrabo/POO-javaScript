class Personagem {
  constructor(nome, altura, teletransporte, forca, poder) {
    // atributos
    this.nome = nome;
    this.altura = altura;
    this.teletransporte = teletransporte;
    this.forca = forca;
    this.poder = poder;
  }
  // Metodos
  soltarEspecial() {
    console.log(`${this.nome} soltar  ${this.poder}!`);
  }

  apresentarNome() {
    console.log(`oi, eu sou  ${this.nome}!`);
  }
  teletransportar() {
    console.log(`${this.nome} teletransportar  ${this.teletransporte}!`);
  }
}

// Criando um objeto da classe

const goku = new Personagem('Goku', 1.80, 'Gravitational teletransporte', 100, 'Kamehameha');

goku.apresentarNome();
goku.soltarEspecial();
goku.teletransportar();

