class Personagem {
  constructor(nome) {
    if (new.target === Personagem) {
      throw new Error(
        "Não é possível instanciar a classe abstrata Personagem diretamente."
      );
    }
    this.nome = nome;
  }

  atacar() {
    throw new Error("Método abstrato. Não pode ser chamado diretamente.");
  }

  defender() {
    throw new Error(
      "O método defender() deve ser implementado pela classe derivada."
    );
  }
}

class Guerreiro extends Personagem {
    constructor(nome,arma) {
        super(nome);
        this.forca = forca;
        this.arma = arma;
    }
    
    atacar() {
        console.log(`${this.nome} ataca com ${this.arma}`);
    }
    
    defender() {
        console.log(`${this.nome} defende-se com força`);
    }
}

class Mago extends  Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }
    atacar (){
        console.log(`${this.nome}  lançar magia  ${this.magia}!`);
    }
    defender() {
        console.log(`${this.nome} usa um escudo magico para se defender!`);
    }
}

try {
  const guerreiro = new Personagem("invalido");
} catch (error) {
  console.log(error.message);
}

const guerreiro = new Guerreiro("thorin", "espada");
guerreiro.atacar();
guerreiro.defender();

const mago = new Mago("Gandalf", "bola de fogo");
mago.atacar();
mago.defender();
