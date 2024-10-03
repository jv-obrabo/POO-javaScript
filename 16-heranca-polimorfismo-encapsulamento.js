class Personagem {
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  construtor(nome, classe, nivel, vida, mana) {
    this.nome = nome;
    this.classe = classe;
    this.nivel = nivel;
    this.vida = vida;
    this.mana = mana;
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }

  get nivel() {
    return this.#nivel;
  }

  get vida() {
    return this.#vida;
  }

  get mana() {
    return this.#mana;
  }
  atacar(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} REALIZA UM ataque normal!`);
    } else if (args.length === 1) {
      console.log(`${this.nome} atacar com um poder de ${args[0]}!`);
    } else if (args.length === 2) {
        console.log(`${this.nome} usou defesa ${args[1]} e atacou COM ${args[0]}de poder!`);
      } else {
        console.log("numero invalido de argumentos");
}
}

defesa () {
    console.log(`${this.nome} se defendeu com ${this.#nivel * 2} pontos de defesa `);

}
receberDano(dano) {
    this.#vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.#vida} `);
}
}

class Assasino  extends Personagem {
    constructor(nome, nivel, vida, mana,furtividade) {
        super(nome, 'Assassino', nivel, vida, mana);
        this.furtividade = furtividade;
    }
    atacar() {
        console.log(`${this.nome} atacar silenciosamente com dano adicional pela furtividade!`);
    }
    usarFurtividade() {
        console.log(`${this.nome} usa sua Furtividade de nivel ${this.furtividade}para se esconder!`);
    } 
}

class Paladino  extends Personagem {
  constructor(nome, nivel, vida, mana, fe) {
    super(nome, "paladino", nivel, vida, mana);
    this.fe = fe;
  }
  defesa() {
    console.log( `${this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na de (${this.fe}) !`);
  }
  curar() {
    console.log(
      `${this.nome} usa sua fe para curar a si mesmo ou aliados !`
    );
  }
}
class Mecanico extends Personagem {
  constructor(nome, nivel, vida, mana, engenharia) {
    super(nome, "Mecanico", nivel, vida, mana);
    this.engenharia = engenharia;
  }

  receberDano(Dano) {
    const danoReduzido = dano - this.engenharia;
    super.receberDano(danoReduzido);
    console.log(
      `${this.nome} usou sua engenharia para reduzir o dano em ${this.engeharia}.`
    );
  }

  contruirTorre() {
    console.log(`${this.nome} construiu uma torre defensiva!`);
  }
}
const assassino =new Assasino("luna sombria",10,100,50,8);

assassino.atacar();
assassino.usarFurtividade();

const paladino = new Paladino("Sir lancelot", 12, 120, 70, 15);

paladino.defesa();
paladino.curar();

const mecanico = new Mecanico("Roberto das Engrenagens", 15, 150, 40, 10);

mecanico.receberDano(30);
mecanico.contruirTorre();