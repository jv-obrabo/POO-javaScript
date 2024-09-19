//classe base Personagem
class Personagem {
     constructor(nome,vida) {
         this.nome = nome;
         this.vida = vida;
     }
     atacar(){
        console.log(`${this.nome}realiza um ataque basico ` );
     }
     receberDano(dano){
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano.Vida restante ${this.vida} `);
     
}
}

class Guego extends Personagem{
    constructor(nome, vida, arma){
        super(nome, vida);{
        this.arma= arma;
    }

    console.log(`${this.nome} atacar ${this.arma}`);
}

}