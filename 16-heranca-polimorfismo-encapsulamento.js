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
}
