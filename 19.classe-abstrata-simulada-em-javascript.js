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
