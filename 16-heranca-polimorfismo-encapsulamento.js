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