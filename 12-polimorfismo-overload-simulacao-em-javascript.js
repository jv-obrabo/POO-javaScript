class Personagem {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }

  atacar(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} REALIZA UM ATAQUE BÁSICO!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} ATACA COM ${arma.nome}!`);
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

  receberDano(dano) {
    this.vida -= dano; 
    console.log(
      `${this.nome} RECEBE ${dano} DE DANO. VIDA RESTANTE: ${this.vida}`
    );
  }
}
